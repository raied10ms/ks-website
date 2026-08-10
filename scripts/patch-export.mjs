import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const htmlPath = path.join(root, "index.html")
const pageBundlePath = path.join(
  root,
  "assets/framer/sites/Vs51a7c_GeSFn8p9Z9-pBbS6oGRw8rWMknYFpdXFri8.tyHYJInR.mjs",
)
const routerBundlePath = path.join(root, "assets/framer/sites/script_main.DHqY5x5u.mjs")
const videoBundlePath = path.join(root, "assets/framer/sites/Z1TG4zDAB.d3df3K0i.mjs")

const tallyUrl = "https://tally.so/r/81Y9Jo"
const internalFormLink = "{href:{webPageId:`cTKxDEEsL`},implicitPathVariables:void 0}"

function replaceAll(source, from, to, label) {
  if (!source.includes(from)) {
    if (source.includes(to)) return source
    throw new Error(`Could not find ${label}`)
  }
  return source.split(from).join(to)
}

function replaceFirstAvailable(source, alternatives, to, label) {
  for (const from of alternatives) {
    if (source.includes(from)) return source.split(from).join(to)
  }
  if (source.includes(to)) return source
  throw new Error(`Could not find ${label}`)
}

function removePattern(source, pattern, label) {
  if (!pattern.test(source)) return source
  return source.replace(pattern, "")
}

function normalizeStaticHeadings(source) {
  source = source.replace(/<h1\b([^>]*)>([\s\S]*?)<\/h1>/g, (match, attributes, body) => {
    const text = body.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()
    if (text === "SSC 2026") return match
    return `<h2${attributes}>${body}</h2>`
  })
  return source
    .replaceAll("<h5", "<h3")
    .replaceAll("</h5>", "</h3>")
    .replaceAll("<h4", "<p")
    .replaceAll("</h4>", "</p>")
}

function normalizeBundleHeadings(source) {
  source = source.replaceAll("d(`h1`,", "d(`h2`,")
  source = source.replaceAll("g(`h1`,", "g(`h2`,")
  source = source.replaceAll("d(`h4`,", "d(`p`,")
  source = source.replaceAll("g(`h4`,", "g(`p`,")

  let cursor = 0
  const title = "children:`SSC 2026`"
  while ((cursor = source.indexOf(title, cursor)) !== -1) {
    const headingStart = source.lastIndexOf("d(`h2`,", cursor)
    if (headingStart === -1) throw new Error("Could not restore the page title heading")
    source = `${source.slice(0, headingStart)}d(\`h1\`,${source.slice(headingStart + 7)}`
    cursor += title.length
  }

  return source.replaceAll("d(b.h5,", "d(b.h3,")
}

function lazyLoadStaticImages(source) {
  return source.replace(/<img\b[^>]*>/g, (tag) => {
    if (/\bloading=/.test(tag) || /\bfetchpriority=["']high["']/.test(tag)) return tag

    const attributes = /\bdecoding=/.test(tag)
      ? ' loading="lazy"'
      : ' loading="lazy" decoding="async"'
    return tag.replace("<img", `<img${attributes}`)
  })
}

let html = fs.readFileSync(htmlPath, "utf8")

html = replaceAll(html, '<html dir="ltr">', '<html lang="bn" dir="ltr">', "HTML language")

const gtmHeadPattern = /\s*<!-- Google Tag Manager -->\s*<script>[\s\S]*?GTM-MQZCVS[\s\S]*?<\/script>\s*<!-- End Google Tag Manager -->\s*/
const gtmHeadSnippet = html.match(gtmHeadPattern)?.[0].trim()
if (!gtmHeadSnippet) throw new Error("Could not find the Google Tag Manager head snippet")
html = html.replace(gtmHeadPattern, "")
html = replaceAll(
  html,
  '<meta charset="utf-8">',
  `<meta charset="utf-8">\n${gtmHeadSnippet}\n\t`,
  "Google Tag Manager head placement",
)

html = replaceAll(
  html,
  '<meta property="og:image" content="assets/framer/assets_FGocXRy6Tby4mYbgkOLvFbMa4HM.png">',
  '<meta property="og:image" content="https://ks.10minuteschool.com/assets/framer/assets_FGocXRy6Tby4mYbgkOLvFbMa4HM.png">',
  "Open Graph image",
)
html = replaceAll(
  html,
  '<meta name="twitter:image" content="assets/framer/assets_FGocXRy6Tby4mYbgkOLvFbMa4HM.png">',
  '<meta name="twitter:image" content="https://ks.10minuteschool.com/assets/framer/assets_FGocXRy6Tby4mYbgkOLvFbMa4HM.png">',
  "X image",
)

html = removePattern(
  html,
  /<!-- Microsoft Clarity -->\s*<script type="text\/javascript">[\s\S]*?8geropx18a[\s\S]*?<\/script>\s*<!-- End Microsoft Clarity -->\s*/,
  "direct Clarity snippet",
)
html = removePattern(
  html,
  /\s*<script>\s*document\.addEventListener\('click',[\s\S]*?u\.pathname === '\/form'[\s\S]*?<\/script>\s*(?=<!-- Start of bodyStart -->)/,
  "legacy form click interceptor",
)

html = replaceAll(
  html,
  'assets/framer/third-party-assets/framer/assets_fontshare_wf_TPY5PBRHOSXJ53WNSUYZQYX4FZUMAYNF_YHKM2QXXZHS7MS6DJUZXTGRXMIGWH7K5_PCXT6E5YCQO6SSVLT6UZPPGT7QKGXOUS.woff2',
  'assets/framer/third-party-assets_fontshare_wf_TPY5PBRHOSXJ53WNSUYZQYX4FZUMAYNF_YHKM2QXXZHS7MS6DJUZXTGRXMIGWH7K5_PCXT6E5YCQO6SSVLT6UZPPGT7QKGXOUS.woff2',
  "Anton font path",
)
html = replaceAll(
  html,
  '\t<link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>\n    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>',
  '\t<link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>',
  "duplicate font preconnect",
)
html = replaceAll(
  html,
  '<section class="framer-kpea5s" data-framer-name="Activity - Section" id="kpea5s">',
  '<section class="framer-kpea5s" data-framer-name="Activity - Section" id="activity">',
  "activity section anchor",
)
html = replaceAll(
  html,
  'src="assets/media/d7dRWNT02IpUqocuwdfGIjLj14.mp4" playsinline muted loop preload="metadata"',
  'src="assets/media/d7dRWNT02IpUqocuwdfGIjLj14.mp4" playsinline muted loop preload="none"',
  "reels video preload",
)
html = replaceAll(
  html,
  "HTMLMediaElement.prototype.play = function () {\n    if (!isInView(this)) {",
  "HTMLMediaElement.prototype.play = function () {\n    if (this instanceof HTMLAudioElement) return originalPlay.apply(this, arguments);\n    if (!isInView(this)) {",
  "audio viewport playback exclusion",
)
html = replaceAll(
  html,
  "document.querySelectorAll('video, audio').forEach(watch);",
  "document.querySelectorAll('video').forEach(watch);",
  "viewport-managed media selector",
)

html = html.replace(
  /<img(?![^>]*\bfetchpriority=)([^>]*images_5Z80avBUbdHDFL2jvdo93AsF9A\.webp[^>]*)>/g,
  '<img fetchpriority="high"$1>',
)
html = lazyLoadStaticImages(html)
html = normalizeStaticHeadings(html)

const headFixes = `
    <!-- KS site fixes: keep this block when refreshing the Framer export. -->
    <style id="ks-site-fixes">
      html { scroll-behavior: smooth; }

      #hero [data-framer-appear-id="1l4qcyd"],
      #hero [data-framer-appear-id="1nm0rp0"],
      #hero [data-framer-appear-id="n88v33"],
      #hero [data-framer-appear-id="1x95r0k"] {
        opacity: 1 !important;
        transform: none !important;
      }

      @media (max-width: 359px) and (max-height: 600px) {
        .framer-13uq4m6-container {
          transform: translateY(-24px) !important;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto; }
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          scroll-behavior: auto !important;
          transition-duration: 0.01ms !important;
        }
      }
    </style>
`

if (html.includes('id="ks-site-fixes"')) {
  html = html.replace(/<!-- KS site fixes:[\s\S]*?<\/style>/, headFixes.trim())
} else {
  html = html.replace("<!-- Start of headEnd -->", `${headFixes}<!-- Start of headEnd -->`)
}

const runtimeFixes = `
<script id="ks-runtime-fixes">
(function () {
  var TALLY_URL = "${tallyUrl}";

  function setAttribute(element, name, value) {
    if (element.getAttribute(name) !== value) element.setAttribute(name, value);
  }

  function scrollToActivitySection() {
    var section = document.querySelector(".framer-kpea5s");
    if (!section) return false;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  }

  function enhance() {
    document.documentElement.lang = "bn";

    document.querySelectorAll('[data-framer-name="Activity - Section"]').forEach(function (section) {
      setAttribute(section, "id", "activity");
    });

    document.querySelectorAll('a[href="' + TALLY_URL + '"], a[href="./form"], a[href="/form"]').forEach(function (link) {
      setAttribute(link, "href", TALLY_URL);
      setAttribute(link, "target", "_blank");
      setAttribute(link, "rel", "noopener noreferrer");
      setAttribute(link, "data-tally-cta", "1");
    });

    document.querySelectorAll('a[href$="#hero"]').forEach(function (link) {
      if (!link.textContent.trim()) setAttribute(link, "aria-label", "10 Minute School home");
    });

    document.querySelectorAll('input[type="range"]').forEach(function (input, index) {
      if (!input.hasAttribute("aria-label")) {
        setAttribute(input, "aria-label", index === 0 ? "অডিও প্লেব্যাক অবস্থান" : "মিডিয়া নিয়ন্ত্রণ");
      }
    });

    document.querySelectorAll("#faQ [tabindex='0']").forEach(function (item, index) {
      var isOpen = item.classList.contains("framer-v-nlk78u") || item.getAttribute("data-framer-name") === "Open";
      var question = item.querySelector(".framer-we85v7")?.textContent.trim();
      var answer = item.querySelector(".framer-14kd8rq");

      setAttribute(item, "role", "button");
      setAttribute(item, "aria-expanded", String(isOpen));
      if (question) setAttribute(item, "aria-label", question);

      if (answer) {
        if (!answer.id) answer.id = "faq-answer-" + (index + 1);
        setAttribute(item, "aria-controls", answer.id);
      }

    });

  }

  document.addEventListener("click", function (event) {
    var clickedLink = event.target.closest("a[href]");
    if (clickedLink) {
      try {
        var clickedUrl = new URL(clickedLink.getAttribute("href"), window.location.href);
        if (clickedUrl.origin === window.location.origin && clickedUrl.hash === "#activity") {
          event.preventDefault();
          event.stopImmediatePropagation();
          scrollToActivitySection();
          return;
        }
      } catch (error) {
        // Ignore malformed links and allow the browser to handle them normally.
      }
    }

    var link = event.target.closest("a[data-tally-cta]");
    if (!link) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "registration_cta_click",
      cta_text: link.textContent.trim().replace(/\\s+/g, " "),
      page_location: window.location.href
    });
  }, true);

  if (window.location.hash === "#activity") {
    var activityScrollAttempts = 0;
    var activityScrollTimer = window.setInterval(function () {
      activityScrollAttempts += 1;
      if (scrollToActivitySection() || activityScrollAttempts > 30) {
        window.clearInterval(activityScrollTimer);
      }
    }, 100);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key !== " " || !event.target.closest("#faQ [role='button']")) return;
    event.preventDefault();
  }, true);

  document.addEventListener("keyup", function (event) {
    if (event.key !== " ") return;
    var item = event.target.closest("#faQ [role='button']");
    if (!item) return;
    event.preventDefault();
    var question = item.getAttribute("aria-label");
    setTimeout(function () {
      var current = Array.from(document.querySelectorAll("#faQ [role='button']")).find(function (candidate) {
        return candidate.getAttribute("aria-label") === question;
      });
      if (!current) return;
      current.dispatchEvent(new KeyboardEvent("keydown", {
        key: "Enter", code: "Enter", bubbles: true, cancelable: true
      }));
      current.dispatchEvent(new KeyboardEvent("keyup", {
        key: "Enter", code: "Enter", bubbles: true, cancelable: true
      }));
    }, 0);
  }, true);

  function start() {
    enhance();
    var root = document.getElementById("main");
    if (!root) return;
    new MutationObserver(enhance).observe(root, {
      attributes: true,
      attributeFilter: ["class", "data-framer-name", "href"],
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
  document.addEventListener("framer:pageview", enhance);
})();
</script>
`

if (html.includes('id="ks-runtime-fixes"')) {
  html = html.replace(/<script id="ks-runtime-fixes">[\s\S]*?<\/script>/, runtimeFixes.trim())
} else {
  html = html.replace("<!-- Start of bodyEnd -->", `<!-- Start of bodyEnd -->${runtimeFixes}`)
}

html = html.replace(/[ \t]+$/gm, "")
fs.writeFileSync(htmlPath, html)

let pageBundle = fs.readFileSync(pageBundlePath, "utf8")
pageBundle = replaceAll(pageBundle, internalFormLink, `\`${tallyUrl}\``, "page CTA links")
pageBundle = replaceAll(pageBundle, "id:`kpea5s`", "id:`activity`", "activity section anchor")
pageBundle = replaceAll(pageBundle, "e5JaN0VBi:!1", "e5JaN0VBi:!0", "CTA new-tab setting")
pageBundle = replaceAll(pageBundle, "naCihBi2U:!1", "naCihBi2U:!0", "shader CTA new-tab setting")
pageBundle = replaceAll(
  pageBundle,
  "preload:n?`metadata`:`none`",
  "preload:`none`",
  "carousel video preload",
)
pageBundle = replaceAll(
  pageBundle,
  "c&&d(`img`,{src:a?.src,srcSet:a?.srcSet,alt:a?.alt||`Video thumbnail`,draggable:!1",
  "c&&d(`img`,{src:a?.src,srcSet:a?.srcSet,alt:a?.alt||`Video thumbnail`,loading:`lazy`,decoding:`async`,draggable:!1",
  "carousel thumbnail loading",
)
pageBundle = replaceFirstAvailable(
  pageBundle,
  [
    "let n=new i.Image;n.fetchPriority=`high`,n.src=t",
    "let n=new i.Image;n.src=t",
  ],
  "let n=i.setTimeout(()=>{if(i.navigator?.connection?.saveData)return;let e=new i.Image;e.fetchPriority=`low`,e.src=t},2500);return()=>i.clearTimeout(n)",
  "deferred slideshow image preload",
)
pageBundle = replaceAll(
  pageBundle,
  "d(`img`,{src:V,alt:``,style:",
  "d(`img`,{src:V,alt:``,fetchPriority:`high`,decoding:`async`,style:",
  "slideshow active image priority",
)
pageBundle = normalizeBundleHeadings(pageBundle)
fs.writeFileSync(pageBundlePath, pageBundle)

let videoBundle = fs.readFileSync(videoBundlePath, "utf8")
videoBundle = replaceAll(
  videoBundle,
  "preload:G.current?`auto`:I&&!v?`metadata`:R!==`on-mount`&&!B?`none`:`metadata`",
  "preload:G.current?`auto`:`none`",
  "offscreen video preload",
)
fs.writeFileSync(videoBundlePath, videoBundle)

let routerBundle = fs.readFileSync(routerBundlePath, "utf8")
routerBundle = replaceAll(routerBundle, internalFormLink, `\`${tallyUrl}\``, "navigation CTA links")
const editorBarPattern = /EditorBar:a===void 0\?void 0:\(\(\)=>\{[\s\S]*?\}\)\(\),adaptLayoutToTextDirection/
if (editorBarPattern.test(routerBundle)) {
  routerBundle = routerBundle.replace(
    editorBarPattern,
    "EditorBar:void 0,adaptLayoutToTextDirection",
  )
} else if (!routerBundle.includes("EditorBar:void 0,adaptLayoutToTextDirection")) {
  throw new Error("Could not disable the Framer editor bar")
}
fs.writeFileSync(routerBundlePath, routerBundle)

console.log("Patched the Framer export successfully.")
