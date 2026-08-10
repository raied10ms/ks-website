import { spawnSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const framerAssets = path.join(root, "assets/framer")
const responsiveDirectory = path.join(framerAssets, "responsive")
const supportedScales = new Set([512, 1024])

const heroSlideshowImages = [
  "images_M3mzZIUcvkOix9OMWYtvOzaAA.webp",
  "images_rS5ctic8PhHdLq2WuVY1SERSO0.webp",
  "images_bFWgBfIZrde4TZtU5ixU8nS668s.webp",
  "images_sFZUpDY1ViOunuUpSZbmMVnFU.webp",
  "images_JhX0GL8NDV81t6aW2gmLc7OJTo.webp",
  "images_5Z80avBUbdHDFL2jvdo93AsF9A.webp",
]
const heroImagesToOptimize = heroSlideshowImages.filter(
  filename => filename !== "images_M3mzZIUcvkOix9OMWYtvOzaAA.webp",
)

function run(command, args) {
  const result = spawnSync(command, args, { encoding: "utf8" })
  if (result.status !== 0) {
    throw new Error(`${command} failed:\n${result.stderr || result.stdout}`)
  }
  return result.stdout
}

function dimensions(file) {
  const output = run("ffprobe", [
    "-v", "error",
    "-select_streams", "v:0",
    "-show_entries", "stream=width,height",
    "-of", "csv=s=x:p=0",
    file,
  ]).trim()
  const [width, height] = output.split("x").map(Number)
  return { width, height }
}

function encodeWebp(source, destination, maxDimension, quality = 78) {
  run("ffmpeg", [
    "-y",
    "-hide_banner",
    "-loglevel", "error",
    "-i", source,
    "-vf", `scale=${maxDimension}:${maxDimension}:force_original_aspect_ratio=decrease:flags=lanczos`,
    "-frames:v", "1",
    "-c:v", "libwebp",
    "-quality", String(quality),
    "-preset", "picture",
    destination,
  ])
}

function optimizeHeroImages() {
  for (const filename of heroImagesToOptimize) {
    const source = path.join(framerAssets, filename)
    if (!fs.existsSync(source)) continue
    const { width, height } = dimensions(source)
    if (Math.max(width, height) <= 1920) continue

    const temporary = `${source}.optimized.webp`
    encodeWebp(source, temporary, 1920, 78)
    if (fs.statSync(temporary).size < fs.statSync(source).size) {
      fs.renameSync(temporary, source)
      console.log(`Optimized ${filename}`)
    } else {
      fs.unlinkSync(temporary)
    }
  }
}

function generateResponsiveImages() {
  fs.mkdirSync(responsiveDirectory, { recursive: true })
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8")
  const variants = new Map()
  const pattern = /assets\/framer\/([^?"'&]+)\?scale-down-to=(512|1024|2048)/g

  for (const match of html.matchAll(pattern)) {
    const filename = match[1]
    const scale = Number(match[2])
    if (!supportedScales.has(scale)) continue
    if (!variants.has(filename)) variants.set(filename, new Set())
    variants.get(filename).add(scale)
  }

  for (const filename of heroSlideshowImages) {
    if (!variants.has(filename)) variants.set(filename, new Set())
    variants.get(filename).add(1024)
  }

  for (const [filename, scales] of variants) {
    const source = path.join(framerAssets, filename)
    if (!fs.existsSync(source)) throw new Error(`Missing responsive image source: ${source}`)
    const basename = path.basename(filename, path.extname(filename))

    for (const scale of scales) {
      const destination = path.join(responsiveDirectory, `${basename}-${scale}.webp`)
      const sourceModified = fs.statSync(source).mtimeMs
      if (fs.existsSync(destination) && fs.statSync(destination).mtimeMs >= sourceModified) continue
      encodeWebp(source, destination, scale)
      console.log(`Generated ${path.relative(root, destination)}`)
    }
  }
}

optimizeHeroImages()
generateResponsiveImages()
