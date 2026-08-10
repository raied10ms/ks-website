const TALLY_URL = "https://tally.so/r/81Y9Jo"
const RESPONSIVE_SCALES = new Set(["512", "1024"])
const MOBILE_HERO_IMAGES = new Set([
  "images_5Z80avBUbdHDFL2jvdo93AsF9A",
  "images_M3mzZIUcvkOix9OMWYtvOzaAA",
  "images_JhX0GL8NDV81t6aW2gmLc7OJTo",
  "images_sFZUpDY1ViOunuUpSZbmMVnFU",
  "images_bFWgBfIZrde4TZtU5ixU8nS668s",
  "images_rS5ctic8PhHdLq2WuVY1SERSO0",
])

function assetRequest(request, pathname) {
  const url = new URL(request.url)
  url.pathname = pathname
  url.search = ""
  return new Request(url, request)
}

function cacheControlFor(pathname, contentType, status) {
  if (status >= 400) return "no-store"

  // The Framer bundles are patched after export, so their original hashed names
  // are no longer content hashes. Revalidate them to avoid serving stale code.
  if (pathname.startsWith("/assets/framer/sites/") && pathname.endsWith(".mjs")) {
    return "public, max-age=0, must-revalidate"
  }
  if (pathname.startsWith("/assets/")) return "public, max-age=31536000, immutable"
  if (contentType.includes("text/html")) return "public, max-age=0, must-revalidate"
  return "public, max-age=3600"
}

function withSiteHeaders(response, pathname) {
  const headers = new Headers(response.headers)
  const contentType = headers.get("content-type") || ""

  headers.set("Cache-Control", cacheControlFor(pathname, contentType, response.status))
  headers.set("X-Content-Type-Options", "nosniff")
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  headers.set("Permissions-Policy", "camera=(), geolocation=(), microphone=()")

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

async function responsiveImage(request, env, url) {
  let scale = url.searchParams.get("scale-down-to")
  const match = url.pathname.match(/^\/assets\/framer\/([^/]+)\.(?:jpe?g|png|webp)$/i)
  if (!match) return null

  const mobileHint = request.headers.get("sec-ch-ua-mobile")
  const isMobile = mobileHint === "?1" || /Mobile|Android/i.test(request.headers.get("user-agent") || "")
  const isMobileHero = !scale && isMobile && MOBILE_HERO_IMAGES.has(match[1])
  if (isMobileHero) scale = "1024"
  if (!RESPONSIVE_SCALES.has(scale)) return null

  const optimizedPath = `/assets/framer/responsive/${match[1]}-${scale}.webp`
  const response = await env.ASSETS.fetch(assetRequest(request, optimizedPath))
  if (!response.ok) return null
  if (!isMobileHero) return response

  const headers = new Headers(response.headers)
  headers.append("Vary", "Sec-CH-UA-Mobile, User-Agent")
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === "/form" || url.pathname === "/form/") {
      return withSiteHeaders(Response.redirect(TALLY_URL, 302), url.pathname)
    }

    if (url.pathname === "/tconfirmation" || url.pathname === "/tconfirmation/") {
      const response = await env.ASSETS.fetch(assetRequest(request, "/tconfirmation.html"))
      return withSiteHeaders(response, url.pathname)
    }

    if (url.pathname === "/" || url.pathname === "/index.html") {
      const response = await env.ASSETS.fetch(assetRequest(request, "/index.html"))
      return withSiteHeaders(response, url.pathname)
    }

    const optimizedImage = await responsiveImage(request, env, url)
    const response = optimizedImage || (await env.ASSETS.fetch(request))
    return withSiteHeaders(response, url.pathname)
  },
}
