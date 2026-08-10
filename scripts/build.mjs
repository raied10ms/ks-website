import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const destination = path.join(root, "dist")
const publicEntries = [
  "_headers",
  "assets",
  "tconfirmation.html",
  "robots.txt",
  "sitemap.xml",
  // Publish HTML last so every referenced asset is already available.
  "index.html",
]

if (path.dirname(destination) !== root || path.basename(destination) !== "dist") {
  throw new Error(`Refusing to replace unexpected build directory: ${destination}`)
}

fs.mkdirSync(destination, { recursive: true })

function filesMatch(source, target) {
  if (!fs.existsSync(target)) return false
  const sourceStat = fs.statSync(source)
  const targetStat = fs.statSync(target)
  if (!targetStat.isFile() || sourceStat.size !== targetStat.size) return false
  return fs.readFileSync(source).equals(fs.readFileSync(target))
}

function copyAtomic(source, target) {
  const stats = fs.statSync(source)
  if (stats.isDirectory()) {
    fs.mkdirSync(target, { recursive: true })
    for (const child of fs.readdirSync(source).sort()) {
      if (child === ".DS_Store") continue
      copyAtomic(path.join(source, child), path.join(target, child))
    }
    return
  }

  if (!stats.isFile() || filesMatch(source, target)) return
  fs.mkdirSync(path.dirname(target), { recursive: true })
  const temporary = `${target}.${process.pid}.tmp`
  fs.copyFileSync(source, temporary)
  fs.renameSync(temporary, target)
}

for (const entry of publicEntries) {
  const source = path.join(root, entry)
  const target = path.join(destination, entry)
  if (!fs.existsSync(source)) throw new Error(`Missing public entry: ${source}`)
  copyAtomic(source, target)
}

console.log(`Built static assets in ${path.relative(root, destination)}/`)
