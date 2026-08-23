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

const tallyUrl = "https://tally.so/r/81Y9Jo"
const tallyUrlVip = "https://tally.so/r/rj8k8l"
const internalFormLink = "{href:{webPageId:`cTKxDEEsL`},implicitPathVariables:void 0}"
const eligibilityCopyFrom = "SSC 2026 এ A+ প্রাপ্ত শিক্ষার্থীরা অংশ নিতে পারবে।"
const eligibilityCopyHtml =
  '1. SSC 2026-এ GPA 5.00 পেতে হবে।<br class="framer-text">2. ক্লাস ৫ অথবা ক্লাস ৮-এ সরকারি বৃত্তিপ্রাপ্ত হতে হবে।'
const eligibilityCopyBundle = `1. SSC 2026-এ GPA 5.00 পেতে হবে।
2. ক্লাস ৫ অথবা ক্লাস ৮-এ সরকারি বৃত্তিপ্রাপ্ত হতে হবে।`
const registrationCopyFrom =
  "রেজিস্ট্রেশন করে কনফার্মেশন পাওয়া ছাড়া ভেন্যুতে প্রবেশ করা যাবে না।"
const registrationCopyTo =
  "রেজিস্ট্রেশন করে কনফার্মেশন SMS/Call পাওয়া ছাড়া ভেন্যুতে প্রবেশ করা যাবে না।"
const faqDateCopyFrom =
  "SSC 2026 কৃতী শিক্ষার্থী সংবর্ধনা অনুষ্ঠানের তারিখ শীঘ্রই জানানো হবে।"
const faqDateCopyTo =
  "কৃতি শিক্ষার্থী সংবর্ধনা অনুষ্ঠানটির তারিখ নির্বাচিত শিক্ষার্থীদের জানিয়ে দেওয়া হবে।"
const faqRegistrationCopyFrom = `প্রথমে রেজিস্ট্রেশনের সুযোগ থাকবে আমাদের Paid Batch-এর যেসব শিক্ষার্থী GPA 5 পাবে তাদের জন্য।
পেইড কোর্সগুলো হলো - 
ক. HSC 28 অনলাইন ব্যাচ (যেকোনো বিষয়) এর শিক্ষার্থীরা 
খ. ১০ম শ্রেণি - অনলাইন ব্যাচ ২০২৬ (SSC 2026) এর শিক্ষার্থীরা  
গ. SSC 26 শেষ মুহূর্তের প্রস্তুতি কোর্সের (যেকোনো বিভাগ) শিক্ষার্থীরা 
ঘ. After SSC English 2026 (অনলাইন/অফলাইন) এর শিক্ষার্থীরা 

এর পরে আসন খালি থাকা সাপেক্ষে ও স্পেশাল WILD CARD ENTRY হিসাবে আমরা আরও কয়েকজন স্টুডেন্টকে সিলেক্ট করতে চাই 🥹 

 HSC 28 Super Students | 10MS ফেইসবুক গ্রুপ এর মেম্বাররা যারা A+ পাবে ❤️`
const faqRegistrationCopyTo = `SSC 26 Batch-এর ক্ষেত্রে:
প্রথমে রেজিস্ট্রেশনের সুযোগ থাকবে আমাদের Paid Batch-এর যেসব শিক্ষার্থী GPA 5 পাবে তাদের জন্য।
পেইড কোর্সগুলো হলো - 
1. HSC 28 অনলাইন ব্যাচ (যেকোনো বিষয়) এর শিক্ষার্থীরা 
2. ১০ম শ্রেণি - অনলাইন ব্যাচ ২০২৬ (SSC 2026) এর শিক্ষার্থীরা 
3. SSC 26 শেষ মুহূর্তের প্রস্তুতি কোর্সের (যেকোনো বিভাগ) শিক্ষার্থীরা 
4. After SSC English 2026 (অনলাইন/অফলাইন) এর শিক্ষার্থীরা 
5. HSC 28 Super Students | 10MS ফেইবুক গ্রুপ এর মেম্বাররা 

ক্লাস ৫ ও ৮-এর ক্ষেত্রে:
1. ক্লাস ৬ Online Batch-এর শিক্ষার্থীরা
2. ক্লাস ৯ Online Batch-এর শিক্ষার্থীরা
3. Super Students Group-এর ফেসবুক গ্রুপ এর মেম্বাররা`
const heroSubtitleCopyFrom =
  "দেশজুড়ে ক্লাস ৫, ক্লাস ৮-এ বৃত্তিপ্রাপ্ত এবং SSC 26-এ A+ প্রাপ্ত কৃতিদের নিয়ে বিশেষ সংবর্ধনা। ২০২৪ ও ২০২৫-এর ধারাবাহিকতায় এবার ২০২৬ সালে আবারও আসছি সারাজীবন মনে রাখার মতন কিছু মুহূর্ত নিয়ে।"
const heroSubtitleCopyHtml =
  'দেশজুড়ে ক্লাস ৫ ও ৮-এ বৃত্তিপ্রাপ্ত এবং SSC 26-এ A+ প্রাপ্ত কৃতী শিক্ষার্থীদের নিয়ে আবারও চলে আসলো টেন মিনিট স্কুলের বিশেষ সংবর্ধনা অনুষ্ঠান।<br class="framer-text"><br class="framer-text">২০২৪ ও ২০২৫-এর ধারাবাহিকতায় এবার ২০২৬ সালে আবারও আমরা নিয়ে আসছি সারাজীবন মনে রাখার মতন মুহূর্তপূর্ণ অনুষ্ঠান নিয়ে। নিচের বাটনে ক্লিক করে রেজিস্ট্রেশন করে ফেলো! রেজিস্ট্রেশন এর পরে সিলেক্টেড হলে তোমাকে কল বা SMS এর মাধ্যমে জানানো হবে!'
const heroSubtitleCopyBundle = `দেশজুড়ে ক্লাস ৫ ও ৮-এ বৃত্তিপ্রাপ্ত এবং SSC 26-এ A+ প্রাপ্ত কৃতী শিক্ষার্থীদের নিয়ে আবারও চলে আসলো টেন মিনিট স্কুলের বিশেষ সংবর্ধনা অনুষ্ঠান।

২০২৪ ও ২০২৫-এর ধারাবাহিকতায় এবার ২০২৬ সালে আবারও আমরা নিয়ে আসছি সারাজীবন মনে রাখার মতন মুহূর্তপূর্ণ অনুষ্ঠান নিয়ে। নিচের বাটনে ক্লিক করে রেজিস্ট্রেশন করে ফেলো! রেজিস্ট্রেশন এর পরে সিলেক্টেড হলে তোমাকে কল বা SMS এর মাধ্যমে জানানো হবে!`
const registrationDeadlineCopyFrom = "২৫ আগস্ট"
const registrationDeadlineCopyTo = "১০ই সেপ্টেম্বর"
const countdownTargetFrom = "2026-08-25T17:59:00.000Z"
const countdownTargetTo = "2026-09-10T17:59:00.000Z"
const whoForSectionOpen =
  '<section class="framer-1ssvkvo" data-framer-name="Who For - Section" id="who-for">'
const activitySectionOpen =
  '<section class="framer-kpea5s" data-framer-name="Activity - Section" id="activity">'
const eventNoiseUrl =
  "https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256"
const eventDashUrl =
  "https://framerusercontent.com/images/FSCAo2OFtbfifk4kH784Wz6cc.png?width=1776&height=8"
const eventSeatSvg = `<svg class="framer-CXbwz framer-1rgsh1p" role="presentation" viewBox="0 0 24 24" width="20" height="20"><path d="M 20 8 L 20 12 C 20 13.105 19.105 14 18 14 M 0 8 L 0 12 C 0 13.105 0.895 14 2 14 M 2 14 L 2 12 C 2 10.895 2.895 10 4 10 M 2 14 L 10 14 M 18 14 L 18 12 C 18 10.895 17.105 10 16 10 M 18 14 L 10 14 M 16 10 L 16 2 C 16 0.895 15.105 0 14 0 L 6 0 C 4.895 0 4 0.895 4 2 L 4 10 M 16 10 L 4 10 M 10 14 L 10 17 M 10 17 L 10 20 M 10 17 C 14 17 15 20 15 20 M 10 17 C 6 17 5 20 5 20 M 16 4 L 4 4" fill="transparent" stroke="#adadad" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(2 2)"></path></svg>`
const eventShaderBtnFallback =
  "https://framerusercontent.com/images/IkdrSmat9hsY1Hff3y1diQ8jJc.png?scale-down-to=208&width=415&height=104"
const eventShaderSscFallback = "assets/framer/ks-ssc-shader.png"
const eventShaderVipFallback = "assets/framer/ks-vip-shader.png"
function eventShaderCanvas(kind, width, height) {
  if (kind === "btn") {
    return `<div data-framer-component-type="Shader" data-ks-shader="${kind}" data-ks-aspect="250/52" style="display:block;flex:0 0 auto;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;overflow-x:hidden;overflow-y:hidden;transform:none"><div style="position:absolute;inset:0;width:100%;height:100%;opacity:1"><canvas draggable="false" style="display:block;width:100%;height:100%"></canvas></div></div>`
  }
  return `<div data-framer-component-type="Shader" data-ks-shader="${kind}" style="display:block;flex:0 0 auto;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;overflow:hidden;transform:none"><div style="position:absolute;inset:0;width:100%;height:100%;opacity:1"><canvas draggable="false" width="${width}" height="${height}" style="display:block;width:100%;height:100%"></canvas></div></div>`
}
function eventCtaHtml(url) {
  return `<a class="framer-eiX3Z framer-1c0sc8x framer-v-1c0sc8x framer-1gvfrdv" data-border="true" data-framer-name="Large" href="${url}" target="_blank" rel="noopener noreferrer" data-tally-cta="1" tabindex="0" style="--1drfzzl: 0px 16px 0px 16px; --border-bottom-width: 2px; --border-color: rgba(255, 255, 255, 0.24); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; background-color: rgb(0, 0, 0); border-radius: 48px;"><div class="framer-1utrmkw-container" data-framer-name="Shader" style="border-radius: 100px;">${eventShaderCanvas("btn", 250, 52)}</div><div class="framer-518ran" data-framer-name="Border Glow" style="background-color: rgba(10, 18, 2, 0.02); border-radius: 100px; box-shadow: inset 0px 0px 16px 0px rgba(250, 157, 157, 0.64); opacity: 1;"></div><div class="framer-8iecn6"><div class="framer-1k0asc" data-framer-component-type="RichTextContainer" style="transform: none;"><p dir="auto" class="framer-text" style="--font-selector: R0Y7QW5layBCYW5nbGEtNjAw; --framer-font-family: &quot;Anek Bangla&quot;, sans-serif; --framer-font-size: 13px; --framer-font-weight: 600; --framer-line-height: 1.4em; --framer-text-color: rgb(255, 255, 255);">রেজিস্ট্রেশন করো</p></div></div></a>`
}
const upcomingEventHtml = `<section class="framer-fs50vx ks-upcoming--v19" data-framer-name="Reels - Section" id="event">
  <div class="framer-qc1zhy" data-framer-name="Content Stack">
    <div class="framer-1y54iqh" data-framer-name="Header Text">
      <div class="framer-mp9yxt" data-framer-name="The Group" data-framer-component-type="RichTextContainer">
        <p dir="auto" class="framer-text" style="--font-selector: SW50ZXItTWVkaXVt; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-text-alignment: center; --framer-text-color: rgb(255, 8, 49); --framer-text-transform: capitalize;"><span data-text-fill="true" class="framer-text" style="background-image: linear-gradient(95deg, rgb(255, 33, 33) 0%, rgba(217, 0, 90, 0.89) 100%);">আপকামিং ইভেন্ট</span></p>
      </div>
      <div class="framer-u4zqs7" data-framer-name="Text">
        <div class="framer-2slmp1" data-framer-component-type="RichTextContainer">
          <h1 dir="auto" class="framer-text" style="--font-selector: R0Y7QW5layBCYW5nbGEtODAw; --framer-font-family: &quot;Anek Bangla&quot;, sans-serif; --framer-font-size: 60px; --framer-font-weight: 800; --framer-line-height: 120%; --framer-text-alignment: center; --framer-text-color: rgb(255, 255, 255);">তুমি কোন শ্রেণীর অনুষ্ঠানে অংশগ্রহণ করতে চাচ্ছো?</h1>
        </div>
      </div>
    </div>
    <div class="framer-3g7cv5" data-framer-name="Pricing Cards">
      <div class="framer-1588qfo" data-framer-name="General Pricing">
        <div class="framer-5rml7c" data-framer-name="Noise Gradient"><div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0; background-image: url(&quot;${eventNoiseUrl}&quot;); background-repeat: repeat; background-position: left top; background-size: 160px;"></div></div>
        <div class="framer-167xlz" data-framer-name="Header Text">
          <div class="framer-1asjckd-container">${eventShaderCanvas("ssc", 300, 25)}</div>
          <div class="framer-1fwi94k" data-framer-name="Text">
            <div class="framer-k1mhjj" data-framer-component-type="RichTextContainer"><h3 dir="auto" class="framer-text" style="--font-selector: RlM7QW50b24tcmVndWxhcg==; --framer-font-family: Anton, sans-serif; --framer-font-size: 30px; --framer-line-height: 1.3em; --framer-text-alignment: left; --framer-text-color: rgb(255, 255, 255); --framer-text-transform: uppercase;">GPA 5.00</h3></div>
            <div class="framer-y14fyo" data-framer-component-type="RichTextContainer"><h2 dir="auto" class="framer-text" style="--font-selector: RlM7QW50b24tcmVndWxhcg==; --framer-font-family: Anton, sans-serif; --framer-font-size: 50px; --framer-text-alignment: left; --framer-text-color: rgb(255, 255, 255); --framer-text-transform: uppercase;">SSC 2026</h2></div>
          </div>
          <div class="framer-1kqq0e1" data-framer-name="Dashed Border"><div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0; background-image: url(&quot;${eventDashUrl}&quot;); background-repeat: repeat; background-position: left top; background-size: 311px;"></div></div>
          <div class="framer-tvprqq" data-framer-name="Left Cut"></div>
          <div class="framer-7g3vkh" data-framer-name="Right Cut"></div>
        </div>
        <div class="framer-1k1jbr2" data-framer-name="Text &amp; CTA">
          <div class="framer-1qnc9a0" data-framer-name="Includes Text">
            <div class="framer-1oghco0" data-framer-component-type="RichTextContainer"><p dir="auto" class="framer-text" style="--font-selector: SW50ZXItU2VtaUJvbGQ=; --framer-font-size: 14px; --framer-font-weight: 600; --framer-letter-spacing: -0.04em; --framer-line-height: 1em; --framer-text-alignment: left; --framer-text-color: rgb(255, 255, 255);">যে শিক্ষার্থীরা সিলেকশনে অগ্রাধিকার পাবে:</p></div>
            <div class="framer-1n4n0zr" data-framer-name="Text">
              <div class="framer-1jdlmn4" data-framer-name="Item 1"><div class="framer-s1YEx framer-q0y9vk"></div><div class="framer-j9z6qk" data-framer-component-type="RichTextContainer"><p dir="auto" class="framer-text" style="--font-selector: SW50ZXItTWVkaXVt; --framer-font-size: 14px; --framer-font-weight: 500; --framer-line-height: 1.5em; --framer-text-color: rgb(173, 173, 173);">HSC 28 Online Batch</p></div></div>
              <div class="framer-i4xin8" data-framer-name="Item 2"><div class="framer-s1YEx framer-1jqyfn5"></div><div class="framer-12klrd5" data-framer-component-type="RichTextContainer"><p dir="auto" class="framer-text" style="--font-selector: SW50ZXItTWVkaXVt; --framer-font-size: 14px; --framer-font-weight: 500; --framer-line-height: 1.5em; --framer-text-color: rgb(173, 173, 173);">১০ম শ্রেণী অনলাইন ব্যাচ ২০২৫</p></div></div>
              <div class="framer-10zra3y" data-framer-name="Item 2"><div class="framer-s1YEx framer-n149ft"></div><div class="framer-8wj1nu" data-framer-component-type="RichTextContainer"><p dir="auto" class="framer-text" style="--font-selector: SW50ZXItTWVkaXVt; --framer-font-size: 14px; --framer-font-weight: 500; --framer-line-height: 1.5em; --framer-text-color: rgb(173, 173, 173);">SSC 26 শেষ মুহূর্তের প্রস্তুতি কোর্স</p></div></div>
              <div class="framer-i7m1rr" data-framer-name="Item 2"><div class="framer-s1YEx framer-11h10mq"></div><div class="framer-ayi8fi" data-framer-component-type="RichTextContainer"><p dir="auto" class="framer-text" style="--font-selector: SW50ZXItTWVkaXVt; --framer-font-size: 14px; --framer-font-weight: 500; --framer-line-height: 1.5em; --framer-text-color: rgb(173, 173, 173);">After SSC English Programme</p></div></div>
              <div class="framer-ks5item" data-framer-name="Item 5"><div class="framer-s1YEx framer-ks5check"></div><div class="framer-ks5text" data-framer-component-type="RichTextContainer"><p dir="auto" class="framer-text" style="--font-selector: SW50ZXItTWVkaXVt; --framer-font-size: 14px; --framer-font-weight: 500; --framer-line-height: 1.5em; --framer-text-color: rgb(173, 173, 173);">HSC 28 Star Students | 10MS ফ্রি ফেসবুক গ্রুপের মেম্বার</p></div></div>
            </div>
          </div>
          <div class="framer-1x2kuon" data-framer-name="Left Cut"></div>
          <div class="framer-f8nz5e" data-framer-name="Right Cut"></div>
          <div class="framer-1pq30az-container">${eventCtaHtml(tallyUrl)}</div>
        </div>
        <div class="framer-1tg6xbq" data-framer-name="Barcode &amp; Text">
          <div class="framer-obxqa" data-framer-name="Dashed Border"><div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0; background-image: url(&quot;${eventDashUrl}&quot;); background-repeat: repeat; background-position: left top; background-size: 311px;"></div></div>
          <div class="framer-hk5q5a">${eventSeatSvg}<div class="framer-o897lv" data-framer-component-type="RichTextContainer"><h4 dir="auto" class="framer-text" style="--font-selector: R0Y7QW5layBCYW5nbGEtNTAw; --framer-font-family: &quot;Anek Bangla&quot;, sans-serif; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-text-alignment: left; --framer-text-color: rgb(173, 173, 173);">আসনসংখ্যা: সীমিত</h4></div></div>
        </div>
      </div>
      <div class="framer-bqife7" data-framer-name="VIP Pricing">
        <div class="framer-6cd35h" data-framer-name="Noise Gradient"><div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0; background-image: url(&quot;${eventNoiseUrl}&quot;); background-repeat: repeat; background-position: left top; background-size: 160px;"></div></div>
        <div class="framer-lobrrd" data-framer-name="Header Text">
          <div class="framer-1xcbk56-container">${eventShaderCanvas("vip", 300, 25)}</div>
          <div class="framer-hp1em7" data-framer-name="Text">
            <div class="framer-6i2yxr" data-framer-component-type="RichTextContainer"><h3 dir="auto" class="framer-text" style="--font-selector: R0Y7QW5layBCYW5nbGEtNzAw; --framer-font-family: &quot;Anek Bangla&quot;, sans-serif; --framer-font-size: 30px; --framer-font-weight: 700; --framer-line-height: 1.3em; --framer-text-alignment: left; --framer-text-color: rgb(255, 255, 255); --framer-text-transform: uppercase;">বৃত্তিপ্রাপ্ত</h3></div>
            <div class="framer-vfhi5f" data-framer-component-type="RichTextContainer"><h2 dir="auto" class="framer-text" style="--font-selector: RlM7QW50b24tcmVndWxhcg==; --framer-font-family: Anton, sans-serif; --framer-font-size: 50px; --framer-text-alignment: left; --framer-text-color: rgb(255, 255, 255); --framer-text-transform: uppercase;">Class 5 &amp; 8</h2></div>
          </div>
          <div class="framer-48jnlu" data-framer-name="Dashed Border"><div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0; background-image: url(&quot;${eventDashUrl}&quot;); background-repeat: repeat; background-position: left top; background-size: 311px;"></div></div>
          <div class="framer-sf050h" data-framer-name="Left Cut"></div>
          <div class="framer-611rxr" data-framer-name="Right Cut"></div>
        </div>
        <div class="framer-qoggvv" data-framer-name="Text &amp; CTA">
          <div class="framer-18afalt" data-framer-name="Includes Text">
            <div class="framer-948026" data-framer-component-type="RichTextContainer"><p dir="auto" class="framer-text" style="--font-selector: SW50ZXItU2VtaUJvbGQ=; --framer-font-size: 14px; --framer-font-weight: 600; --framer-letter-spacing: -0.04em; --framer-line-height: 1em; --framer-text-alignment: left; --framer-text-color: rgb(255, 255, 255);">যে শিক্ষার্থীরা সিলেকশনে অগ্রাধিকার পাবে:</p></div>
            <div class="framer-s2mlp8" data-framer-name="Text">
              <div class="framer-1wmc4cz" data-framer-name="Item 3"><div class="framer-s1YEx framer-1c6ga9a"></div><div class="framer-okhchb" data-framer-component-type="RichTextContainer"><p dir="auto" class="framer-text" style="--font-selector: SW50ZXItTWVkaXVt; --framer-font-size: 14px; --framer-font-weight: 500; --framer-line-height: 1.5em; --framer-text-color: rgb(173, 173, 173);">Class 6 Online Batch 2026</p></div></div>
              <div class="framer-2c7v86" data-framer-name="Item 4"><div class="framer-s1YEx framer-vqqsx"></div><div class="framer-1n4ok1w" data-framer-component-type="RichTextContainer"><p dir="auto" class="framer-text" style="--font-selector: SW50ZXItTWVkaXVt; --framer-font-size: 14px; --framer-font-weight: 500; --framer-line-height: 1.5em; --framer-text-color: rgb(173, 173, 173);">Class 9 Online Batch 2026</p></div></div>
              <div class="framer-1v5o852" data-framer-name="Item 5"><div class="framer-s1YEx framer-1f1w09y"></div><div class="framer-61yh9r" data-framer-component-type="RichTextContainer"><p dir="auto" class="framer-text" style="--font-selector: SW50ZXItTWVkaXVt; --framer-font-size: 14px; --framer-font-weight: 500; --framer-line-height: 1.5em; --framer-text-color: rgb(173, 173, 173);">Class 6 Super Students | মেম্বার</p></div></div>
              <div class="framer-fzj6hr" data-framer-name="Item 8"><div class="framer-s1YEx framer-4taub8"></div><div class="framer-zalu1j" data-framer-component-type="RichTextContainer"><p dir="auto" class="framer-text" style="--font-selector: SW50ZXItTWVkaXVt; --framer-font-size: 14px; --framer-font-weight: 500; --framer-line-height: 1.5em; --framer-text-color: rgb(173, 173, 173);">SSC 28 Super Students | মেম্বার</p></div></div>
              <div class="framer-ks5vip" data-framer-name="Item 9"><div class="framer-s1YEx framer-ks5vipcheck"></div><div class="framer-ks5viptext" data-framer-component-type="RichTextContainer"><p dir="auto" class="framer-text" style="--font-selector: SW50ZXItTWVkaXVt; --framer-font-size: 14px; --framer-font-weight: 500; --framer-line-height: 1.5em; --framer-text-color: rgb(173, 173, 173);">Class 6-10 Super Students | 10MS ফ্রি ফেসবুক গ্রুপের মেম্বার</p></div></div>
            </div>
          </div>
          <div class="framer-1adk072" data-framer-name="Left Cut"></div>
          <div class="framer-eetxcn" data-framer-name="Right Cut"></div>
          <div class="framer-18n35ow-container">${eventCtaHtml(tallyUrlVip)}</div>
        </div>
        <div class="framer-uzqjlk" data-framer-name="Barcode &amp; Text">
          <div class="framer-1rybq03" data-framer-name="Dashed Border"><div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0; background-image: url(&quot;${eventDashUrl}&quot;); background-repeat: repeat; background-position: left top; background-size: 311px;"></div></div>
          <div class="framer-1ixdcts">${eventSeatSvg.replace("framer-1rgsh1p", "framer-1gpc41f")}<div class="framer-1dnb5yu" data-framer-component-type="RichTextContainer"><h4 dir="auto" class="framer-text" style="--font-selector: R0Y7QW5layBCYW5nbGEtNTAw; --framer-font-family: &quot;Anek Bangla&quot;, sans-serif; --framer-font-weight: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-text-alignment: left; --framer-text-color: rgb(173, 173, 173);">আসনসংখ্যা: সীমিত</h4></div></div>
        </div>
      </div>
    </div>
  </div>
</section>`
const successImgSizes =
  "max(max((min(100vw - 100px, 1100px) - 60px) / 2, 1px) - 118px, 1px)"
function successSrcset(id, width, height) {
  const steps = [512, 1024, 2048, 4096, width].filter((step, index, all) => step <= width && all.indexOf(step) === index)
  return steps
    .map((step) => {
      const scaled = step < width ? `?scale-down-to=${step}&width=${width}&height=${height}` : `?width=${width}&height=${height}`
      return `https://framerusercontent.com/images/${id}.webp${scaled} ${step}w`
    })
    .join(",")
}
function successImageHtml(className, id, width, height) {
  const src = `https://framerusercontent.com/images/${id}.webp?width=${width}&height=${height}`
  return `<div class="${className}" data-framer-name="Image"><div data-framer-background-image-wrapper="true" style="position: absolute; border-radius: inherit; inset: 0;"><img decoding="auto" loading="lazy" width="${width}" height="${height}" sizes="${successImgSizes}" srcset="${successSrcset(id, width, height)}" src="${src}" alt="" style="display: block; width: 100%; height: 100%; border-radius: inherit; object-position: center center; object-fit: cover;"></div></div>`
}
function successStatHtml(value, label) {
  return `<div class="ks-success-stat" data-framer-name="Text"><div class="ks-success-count" data-ks-count="${value}">0</div><div data-framer-component-type="RichTextContainer"><p dir="auto" class="framer-text">${label}</p></div></div>`
}
function successCardHtml({ cardClass, imageClass, imageId, width, height, title, statsHtml, imageFirst = false }) {
  const copy = `<div class="ks-success-card-copy">
          <div data-framer-component-type="RichTextContainer"><h3 dir="auto" class="framer-text">${title}</h3></div>
          <div class="ks-success-stats" data-framer-name="Statistics Text">${statsHtml}</div>
        </div>`
  const image = successImageHtml(imageClass, imageId, width, height)
  return `<div class="${cardClass} ks-success-card" data-border="true" data-framer-name="Feature Stack">
        ${imageFirst ? `${image}${copy}` : `${copy}${image}`}
      </div>`
}
const successGlimpseHtml = `<section class="framer-17gup5u ks-success--v4" data-framer-name="Privelege | Section" id="success">
  <div class="framer-c7ay2j" data-framer-name="Content Stack">
    <div class="framer-1ckbbiw" data-framer-name="Header Text">
      <div class="framer-bwcfqd" data-framer-name="Text">
        <div class="framer-tdoplj" data-framer-component-type="RichTextContainer">
          <h2 dir="auto" class="framer-text">আমাদের শিক্ষার্থীদের সাফল্যের ঝলক</h2>
        </div>
      </div>
      <div class="framer-1h79oq9" data-framer-component-type="RichTextContainer">
        <p dir="auto" class="framer-text">প্রাথমিক ও জুনিয়র বৃত্তি পরীক্ষা ২০২৫ ও SSC ২০২৬-এ আমাদের ফলাফল</p>
      </div>
    </div>
    <div class="framer-1jsmtve">
      <div class="framer-iv3o0t" data-framer-name="Feature Stack">
        <div class="framer-y5suno" data-framer-name="Progress Bar">
          <div class="framer-1eau4zc" data-framer-name="Fill"></div>
        </div>
      </div>
      <div class="framer-ubbpp8">
        ${successCardHtml({
          cardClass: "framer-zje4k2",
          imageClass: "framer-u7ab79",
          imageId: "QQ9kis86heHLmvhxGNgWoH8LXI",
          width: 2236,
          height: 1486,
          title: "ক্লাস ৫ প্রাথমিক বৃত্তি পরীক্ষা",
          statsHtml:
            successStatHtml(2952, "মোট বৃত্তি প্রাপ্ত") +
            successStatHtml(1045, "মেধা বৃত্তি") +
            successStatHtml(1908, "সাধারণ বৃত্তি"),
        })}
        ${successCardHtml({
          cardClass: "framer-sx4q23",
          imageClass: "framer-p3pwea",
          imageId: "ELzOXv7Yk7o0ndJXyjBS8Ik6c0",
          width: 2262,
          height: 1510,
          imageFirst: true,
          title: "ক্লাস ৮ জুনিয়র বৃত্তি পরীক্ষা",
          statsHtml:
            successStatHtml(2097, "মোট বৃত্তি প্রাপ্ত") +
            successStatHtml(959, "মেধা বৃত্তি") +
            successStatHtml(1138, "সাধারণ বৃত্তি"),
        })}
        ${successCardHtml({
          cardClass: "framer-dukk2w",
          imageClass: "framer-8b23z1",
          imageId: "Jm8qWANF1tHeHOMvKLOazPZlZsE",
          width: 5241,
          height: 3494,
          imageFirst: true,
          title: "এসএসসি পরীক্ষা ২০২৬",
          statsHtml: successStatHtml(8352, "মোট GPA - 5"),
        })}
      </div>
    </div>
  </div>
</section>`

function replaceAll(source, from, to, label) {
  if (!source.includes(from)) {
    if (source.includes(to)) return source
    throw new Error(`Could not find ${label}`)
  }
  return source.split(from).join(to)
}

function removePattern(source, pattern, label) {
  if (!pattern.test(source)) return source
  return source.replace(pattern, "")
}

function normalizeStaticHeadings(source) {
  source = source.replace(/<h1\b([^>]*)>([\s\S]*?)<\/h1>/g, (match, attributes, body) => {
    return `<h2${attributes}>${body}</h2>`
  })
  return source
    .replaceAll("<h5", "<h3")
    .replaceAll("</h5>", "</h3>")
    .replaceAll("<h4", "<p")
    .replaceAll("</h4>", "</p>")
}

function normalizeBundleHeadings(source) {
  return source
    .replaceAll("d(`h1`,", "d(`h2`,")
    .replaceAll("g(`h1`,", "g(`h2`,")
    .replaceAll("d(`h4`,", "d(`p`,")
    .replaceAll("g(`h4`,", "g(`p`,")
    .replaceAll("d(b.h5,", "d(b.h3,")
}

function removeHeroSscTitleFromHtml(source) {
  return source.replace(
    /<div class="ssr-variant[^"]*">\s*<div class="framer-1nm0rp0"[\s\S]*?<h1[^>]*>\s*SSC 2026\s*<\/h1>\s*<\/div>\s*<\/div>\s*/g,
    "",
  )
}

function removeHeroSscTitleFromBundle(source) {
  const marker = "className:`framer-1nm0rp0`"
  const blockStartNeedle = "d(K,{breakpoint:x,overrides:{FSmZsFKSr:"
  const blockEnd = "withExternalLayout:!0})}),"

  let cursor = 0
  while ((cursor = source.indexOf(marker, cursor)) !== -1) {
    const blockStart = source.lastIndexOf(blockStartNeedle, cursor)
    if (blockStart === -1) {
      cursor += marker.length
      continue
    }

    const blockEndIndex = source.indexOf(blockEnd, cursor)
    if (blockEndIndex === -1) {
      cursor += marker.length
      continue
    }

    source = source.slice(0, blockStart) + source.slice(blockEndIndex + blockEnd.length)
  }

  return source
}

function removeHeroSeatCountFromHtml(source) {
  return source.replace(
    /<div class="framer-y56tpn[^"]*">[\s\S]*?<\/div>/g,
    "",
  )
}

function fixHeroPlaceDateHtml(source) {
  source = source.replace(
    /(<div class="framer-1raer9f"[^>]*>[\s\S]*?<div class="framer-wwut7a">[\s\S]*?<\/div>)\s*<\/div>\s*(<div class="framer-1hu0nud">[\s\S]*?<\/div>)/g,
    "$1$2</div>",
  )
  source = source.replace(
    /(<div class="framer-1raer9f"[^>]*?) style="opacity:0\.001;transform:translateY\([^"]*\)"/g,
    '$1 style="opacity:1;transform:none"',
  )
  source = source.replace(
    /(<div class="framer-1raer9f"[^>]*?) data-framer-appear-id="1raer9f"/g,
    "$1",
  )
  return source
}

function removeHeroSeatCountFromBundle(source) {
  const marker = "className:`framer-y56tpn hidden-1xknwpq hidden-16npib8`"
  const blockStartNeedle = "M()&&g(`div`,{"
  const blockEnd = "withExternalLayout:!0})]}),"

  const markerIndex = source.indexOf(marker)
  if (markerIndex === -1) return source

  const blockStart = source.lastIndexOf(blockStartNeedle, markerIndex)
  if (blockStart === -1) return source

  const blockEndIndex = source.indexOf(blockEnd, markerIndex)
  if (blockEndIndex === -1) return source

  return source.slice(0, blockStart) + source.slice(blockEndIndex + blockEnd.length)
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
  '<meta property="og:image" content="assets/framer/og-image.jpg">',
  '<meta property="og:image" content="https://ks.10minuteschool.com/assets/framer/og-image.jpg">',
  "Open Graph image",
)
html = replaceAll(
  html,
  '<meta name="twitter:image" content="assets/framer/og-image.jpg">',
  '<meta name="twitter:image" content="https://ks.10minuteschool.com/assets/framer/og-image.jpg">',
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
if (html.includes("HTMLMediaElement.prototype.play = function () {\n    if (!isInView(this)) {")) {
  html = replaceAll(
    html,
    "HTMLMediaElement.prototype.play = function () {\n    if (!isInView(this)) {",
    "HTMLMediaElement.prototype.play = function () {\n    if (this instanceof HTMLAudioElement) return originalPlay.apply(this, arguments);\n    if (!isInView(this)) {",
    "audio viewport playback exclusion",
  )
}
if (
  html.includes(
    "HTMLMediaElement.prototype.play = function () {\n    if (this instanceof HTMLAudioElement) return originalPlay.apply(this, arguments);\n    if (!isInView(this)) {",
  )
) {
  html = replaceAll(
    html,
    "HTMLMediaElement.prototype.play = function () {\n    if (this instanceof HTMLAudioElement) return originalPlay.apply(this, arguments);\n    if (!isInView(this)) {",
    "HTMLMediaElement.prototype.play = function () {\n    if (this instanceof HTMLAudioElement) {\n      if (/^(localhost|127\\.0\\.0\\.1|\\[::1\\])$/.test(window.location.hostname)) {\n        this.muted = true;\n        this.volume = 0;\n        return Promise.resolve();\n      }\n      return originalPlay.apply(this, arguments);\n    }\n    if (!isInView(this)) {",
    "local dev background audio mute",
  )
}
html = replaceAll(
  html,
  "document.querySelectorAll('video, audio').forEach(watch);",
  "document.querySelectorAll('video').forEach(watch);",
  "viewport-managed media selector",
)

html = html.replace(
  /<img(?![^>]*\bloading=)([^>]*\balt="Video thumbnail"[^>]*)>/g,
  '<img loading="lazy" decoding="async"$1>',
)
html = html.replace(
  /<img(?![^>]*\bfetchpriority=)([^>]*images_5Z80avBUbdHDFL2jvdo93AsF9A\.webp[^>]*)>/g,
  '<img fetchpriority="high"$1>',
)
html = removeHeroSscTitleFromHtml(html)
html = removeHeroSeatCountFromHtml(html)
html = fixHeroPlaceDateHtml(html)
html = replaceAll(html, eligibilityCopyFrom, eligibilityCopyHtml, "eligibility card copy")
html = replaceAll(html, registrationCopyFrom, registrationCopyTo, "registration card copy")
html = replaceAll(html, heroSubtitleCopyFrom, heroSubtitleCopyHtml, "hero subtitle copy")
html = replaceAll(
  html,
  registrationDeadlineCopyFrom,
  registrationDeadlineCopyTo,
  "registration deadline copy",
)
if (/<section[^>]*id="event"/.test(html)) {
  html = html.replace(/<section[^>]*id="event"[^>]*>[\s\S]*?<\/section>/, upcomingEventHtml)
} else {
  html = replaceAll(
    html,
    whoForSectionOpen,
    upcomingEventHtml + whoForSectionOpen,
    "upcoming event section",
  )
}
if (/<section[^>]*id="success"/.test(html)) {
  html = html.replace(/<section[^>]*id="success"[^>]*>[\s\S]*?<\/section>/, successGlimpseHtml)
} else {
  html = replaceAll(
    html,
    activitySectionOpen,
    successGlimpseHtml + activitySectionOpen,
    "success glimpse section",
  )
}
html = normalizeStaticHeadings(html)

const headFixes = `
    <!-- KS site fixes: keep this block when refreshing the Framer export. -->
    <style id="ks-site-fixes">
      html { scroll-behavior: smooth; }

      /* Hero: keep Bengali title fully visible after removing SSC 2026 */
      .framer-2iAM9 .framer-1iuk30,
      .framer-2iAM9 .framer-n88v33,
      .framer-2iAM9 .framer-1nzqsv-container,
      .framer-2iAM9 .framer-1ih07p8-container {
        overflow: visible !important;
      }

      /* Hero: show date + venue together on first paint */
      .framer-2iAM9 .framer-1raer9f,
      .framer-2iAM9 .framer-1raer9f .framer-wwut7a,
      .framer-2iAM9 .framer-1raer9f .framer-1hu0nud {
        opacity: 1 !important;
        transform: none !important;
        visibility: visible !important;
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

      /* Framer hydration can append duplicate page sections outside #main */
      body > section[data-framer-name],
      body > footer[data-framer-name],
      body > div.framer-1yz6564-container,
      body > div.framer-1qgzf0t,
      body > div.framer-1tup7jo {
        display: none !important;
      }

      @font-face {
        font-family: Anton;
        src: url("https://framerusercontent.com/third-party-assets/fontshare/wf/TPY5PBRHOSXJ53WNSUYZQYX4FZUMAYNF/YHKM2QXXZHS7MS6DJUZXTGRXMIGWH7K5/PCXT6E5YCQO6SSVLT6UZPPGT7QKGXOUS.woff2");
        font-display: swap;
        font-style: normal;
        font-weight: 400;
      }
      #event, #event * { box-sizing: border-box; }
      #event {
        z-index: 2;
        background-color: #000;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 60px;
        width: 100%;
        padding: 100px 50px 101px;
        position: relative;
      }
      #event .framer-qc1zhy {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 60px;
        width: 100%;
        max-width: 1100px;
      }
      #event .framer-1y54iqh {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 22px;
        width: 100%;
        max-width: 700px;
      }
      #event [data-framer-component-type="RichTextContainer"] {
        position: relative;
        height: auto;
        flex: 0 0 auto;
      }
      #event .framer-mp9yxt,
      #event .framer-o897lv,
      #event .framer-1dnb5yu { white-space: pre; }
      #event .framer-u4zqs7 {
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 100%;
      }
      #event .framer-2slmp1,
      #event .framer-1oghco0,
      #event .framer-948026 { width: 100%; }
      #event [data-text-fill="true"] {
        display: inline-block;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      #event .framer-3g7cv5 {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: flex-start;
        gap: 40px;
        width: 100%;
      }
      #event .framer-1588qfo,
      #event .framer-bqife7 {
        position: relative;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        width: 300px;
        max-width: 300px;
        overflow: clip;
        border-radius: 12px;
      }
      #event .framer-1588qfo { background: linear-gradient(#0d0d0d, #0d0d0d); }
      #event .framer-bqife7 { background: linear-gradient(#141414, #0d0d0d); }
      #event .framer-5rml7c,
      #event .framer-6cd35h {
        position: absolute;
        inset: 0;
        z-index: 2;
        opacity: 0.15;
        overflow: clip;
        pointer-events: none;
        mask: linear-gradient(#000 0%, transparent 100%);
      }
      #event .framer-167xlz,
      #event .framer-lobrrd {
        position: relative;
        z-index: 2;
        display: flex;
        flex-flow: column;
        width: 100%;
      }
      #event .framer-1asjckd-container,
      #event .framer-1xcbk56-container {
        width: 100%;
        height: 25px;
        position: relative;
      }
      #event .framer-1asjckd-container {
        box-shadow: rgba(0, 0, 0, 0.25) 0 3px 15px 2px, rgba(28, 32, 255, 0.5) 0 2px 50px, rgba(0, 0, 0, 0.25) 0 4px 8px;
      }
      #event .framer-1xcbk56-container {
        box-shadow: rgba(0, 0, 0, 0.25) 0 3px 15px 2px, rgba(255, 28, 28, 0.5) 0 2px 50px, rgba(0, 0, 0, 0.25) 0 4px 8px;
      }
      #event .framer-1asjckd-container [data-framer-component-type="Shader"],
      #event .framer-1xcbk56-container [data-framer-component-type="Shader"],
      #event .framer-1utrmkw-container [data-framer-component-type="Shader"] {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        overflow: hidden;
      }
      #event .framer-1asjckd-container [data-framer-component-type="Shader"] {
        background: url("${eventShaderSscFallback}") center / cover no-repeat;
        animation: ks-shader-drift 7s ease-in-out infinite alternate;
      }
      #event .framer-1asjckd-container [data-ks-webgl="1"] {
        background: none !important;
        animation: none !important;
      }
      #event .framer-1asjckd-container [data-ks-shader="ssc"] canvas {
        opacity: 1;
      }
      #event .framer-1xcbk56-container [data-framer-component-type="Shader"] {
        background: url("${eventShaderVipFallback}") center / cover no-repeat;
        animation: ks-shader-drift 7s ease-in-out infinite alternate;
      }
      #event .framer-1xcbk56-container [data-ks-webgl="1"] {
        background: none !important;
        animation: none !important;
      }
      #event .framer-1xcbk56-container [data-ks-shader="vip"] canvas {
        opacity: 1;
      }
      @keyframes ks-shader-drift {
        from { background-position: 8% 50%; }
        to { background-position: 92% 50%; }
      }
      #event .framer-1fwi94k,
      #event .framer-hp1em7 {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        gap: 8px;
        width: 100%;
        padding: 25px;
        position: relative;
        flex: 0 0 auto;
      }
      #event .framer-k1mhjj,
      #event .framer-6i2yxr { width: 100%; opacity: 0.5; position: relative; }
      #event .framer-y14fyo,
      #event .framer-vfhi5f { width: 100%; position: relative; }
      #event .framer-1kqq0e1,
      #event .framer-48jnlu {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        height: 1px;
        overflow: clip;
        filter: invert(0.19);
      }
      #event .framer-tvprqq,
      #event .framer-sf050h,
      #event .framer-1x2kuon,
      #event .framer-1adk072,
      #event .framer-7g3vkh,
      #event .framer-611rxr,
      #event .framer-f8nz5e,
      #event .framer-eetxcn {
        position: absolute;
        z-index: 3;
        width: 30px;
        height: 30px;
        border-radius: 99px;
        background-color: #020003;
      }
      #event .framer-tvprqq,
      #event .framer-sf050h,
      #event .framer-1x2kuon,
      #event .framer-1adk072 { bottom: -15px; left: -20px; }
      #event .framer-7g3vkh,
      #event .framer-611rxr,
      #event .framer-f8nz5e,
      #event .framer-eetxcn { bottom: -15px; right: -20px; }
      #event .framer-1k1jbr2,
      #event .framer-qoggvv {
        position: relative;
        z-index: 3;
        display: flex;
        flex-flow: column;
        align-items: flex-end;
        gap: 24px;
        width: 100%;
        padding: 25px;
      }
      #event .framer-1qnc9a0,
      #event .framer-18afalt {
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 12px;
        width: 100%;
      }
      #event .framer-1n4n0zr,
      #event .framer-s2mlp8 {
        display: flex;
        flex-flow: column;
        gap: 8px;
        width: 100%;
      }
      #event .framer-1jdlmn4,
      #event .framer-i4xin8,
      #event .framer-10zra3y,
      #event .framer-i7m1rr,
      #event .framer-ks5item,
      #event .framer-1wmc4cz,
      #event .framer-2c7v86,
      #event .framer-1v5o852,
      #event .framer-fzj6hr,
      #event .framer-ks5vip {
        display: flex;
        flex-flow: row;
        align-items: center;
        gap: 12px;
        width: 100%;
      }
      #event .framer-s1YEx {
        --1f4m3y2: #fff9;
        flex: none;
        width: 14px;
        height: 14px;
        aspect-ratio: 1;
        background-color: var(--1f4m3y2);
        -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cpath d='M 0 10.5 L 10.667 21 L 32 0' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' transform='translate(4 10)'/%3E%3C/svg%3E") center / contain no-repeat;
        mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cpath d='M 0 10.5 L 10.667 21 L 32 0' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' transform='translate(4 10)'/%3E%3C/svg%3E") center / contain no-repeat;
      }
      #event .framer-j9z6qk,
      #event .framer-12klrd5,
      #event .framer-8wj1nu,
      #event .framer-ayi8fi,
      #event .framer-ks5text,
      #event .framer-okhchb,
      #event .framer-1n4ok1w,
      #event .framer-61yh9r,
      #event .framer-zalu1j,
      #event .framer-ks5viptext { flex: 1 1 auto; }
      #event .framer-1pq30az-container,
      #event .framer-18n35ow-container { width: 100%; }
      #event a.framer-eiX3Z.framer-1c0sc8x {
        position: relative;
        overflow: visible;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        gap: 8px 4px;
        width: 100%;
        max-width: 100%;
        height: 52px;
        min-height: 52px;
        aspect-ratio: 250 / 52;
        padding: var(--1drfzzl);
        text-decoration: none;
        cursor: pointer;
        box-shadow: 0 0 16px rgba(230, 53, 53, 0.35);
        transition: transform 0.28s ease, filter 0.28s ease, box-shadow 0.28s ease;
      }
      #event a.framer-eiX3Z.framer-1c0sc8x:hover {
        transform: scale(1.03);
        filter: brightness(1.08);
        box-shadow: 0 0 22px rgba(230, 53, 53, 0.55);
      }
      #event a.framer-eiX3Z[data-border="true"]::after {
        content: "";
        pointer-events: none;
        position: absolute;
        inset: 0;
        border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0);
        border-color: var(--border-color, transparent);
        border-style: var(--border-style, solid);
        border-radius: inherit;
      }
      #event a.framer-eiX3Z .framer-1utrmkw-container {
        position: absolute;
        inset: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        overflow: hidden;
      }
      #event a.framer-eiX3Z .framer-1utrmkw-container [data-framer-component-type="Shader"] {
        background: url("${eventShaderBtnFallback}") center / cover no-repeat;
        animation: ks-shader-drift 6s ease-in-out infinite alternate;
      }
      #event a.framer-eiX3Z [data-ks-webgl="1"] {
        background: none !important;
        animation: none !important;
      }
      #event a.framer-eiX3Z [data-ks-shader] canvas {
        opacity: 1;
      }
      @keyframes ks-border-glow {
        from { box-shadow: inset 0 0 12px rgba(250, 157, 157, 0.52); }
        to { box-shadow: inset 0 0 20px rgba(250, 157, 157, 0.78); }
      }
      #event .framer-518ran {
        position: absolute;
        inset: 0;
        left: 0;
        height: 100%;
        z-index: 0;
        border-radius: inherit;
        mix-blend-mode: hard-light;
        overflow: clip;
        opacity: 1;
        will-change: transform, box-shadow;
        animation: ks-border-glow 3.2s ease-in-out infinite alternate;
        pointer-events: none;
      }
      #event .framer-8iecn6 {
        z-index: 1;
        display: flex;
        flex-flow: column;
        place-content: center;
        align-items: center;
        gap: 10px;
        width: min-content;
        height: min-content;
        padding: 0;
        position: relative;
        overflow: visible;
      }
      #event .framer-8iecn6,
      #event .framer-1k0asc { position: relative; z-index: 1; }
      #event .framer-1tg6xbq,
      #event .framer-uzqjlk {
        position: relative;
        z-index: 2;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 16px;
        width: 100%;
        padding: 25px;
      }
      #event .framer-obxqa,
      #event .framer-1rybq03 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        overflow: clip;
        filter: invert(0.19);
      }
      #event .framer-hk5q5a,
      #event .framer-1ixdcts {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
      }
      #event .framer-CXbwz { width: 20px; height: 20px; display: block; }
      @media (min-width: 680px) and (max-width: 1199.98px) {
        #event { padding: 80px 50px; }
        #event .framer-3g7cv5 { gap: 20px; }
      }
      @media (prefers-reduced-motion: reduce) {
        #event [data-ks-shader] { animation: none !important; }
        #event .framer-518ran { animation: none !important; }
      }
      @media (max-width: 679.98px) {
        #event { padding: 50px 20px; }
        #event .framer-qc1zhy { gap: 30px; }
        #event .framer-1y54iqh { gap: 10px; }
        #event .framer-3g7cv5 { flex-direction: column; align-items: center; gap: 24px; }
        #event .framer-1588qfo,
        #event .framer-bqife7 { width: 100%; max-width: 300px; }
        #event .framer-CXbwz { width: 18px; height: 18px; }
        #event .framer-2slmp1 .framer-text { font-size: 36px !important; }
      }

      #success, #success * { box-sizing: border-box; }
      #success {
        background-color: #020003;
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 60px;
        padding: 100px 50px;
        position: relative;
        overflow: clip;
      }
      #success .framer-c7ay2j {
        width: 100%;
        max-width: 1100px;
        display: flex;
        flex-flow: row;
        align-items: flex-start;
        justify-content: center;
        gap: 60px;
      }
      #success .framer-1ckbbiw {
        z-index: 1;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 16px;
        flex: 1 0 0;
        width: 1px;
        max-width: 450px;
        position: sticky;
        top: 90px;
      }
      #success [data-framer-component-type="RichTextContainer"] { position: relative; }
      #success .framer-tdoplj { width: 100%; }
      #success .framer-tdoplj .framer-text {
        font-family: "Anek Bangla", sans-serif;
        font-size: 60px;
        font-weight: 800;
        line-height: 120%;
        color: #fff;
        margin: 0;
      }
      #success .framer-1h79oq9 { width: 100%; }
      #success .framer-1h79oq9 .framer-text {
        font-family: "Anek Bangla", sans-serif;
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        color: #919191;
        margin: 0;
      }
      #success .framer-1jsmtve {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: flex-start;
        gap: 60px;
        flex: 1 0 0;
        width: 1px;
      }
      #success .framer-iv3o0t {
        align-self: stretch;
        display: flex;
        flex-flow: column;
        align-items: center;
        width: auto;
        padding: 5px 0 0;
        overflow: clip;
      }
      #success .framer-y5suno {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 99px;
        width: 5px;
        flex: 1 0 0;
        position: relative;
        overflow: hidden;
      }
      #success .framer-1eau4zc {
        background: #ff0831;
        border-radius: 99px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 36%;
      }
      #success .framer-ubbpp8 {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
        flex: 1 0 0;
        width: 1px;
      }
      #success .ks-success-card {
        --border-color: rgba(255, 255, 255, 0.05);
        position: relative;
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        gap: 60px;
        padding: 32px;
        border-radius: 24px;
        overflow: clip;
      }
      #success .ks-success-card[data-border="true"]::after {
        content: "";
        pointer-events: none;
        position: absolute;
        inset: 0;
        border: 1px solid var(--border-color);
        border-radius: inherit;
      }
      #success .framer-u7ab79,
      #success .framer-p3pwea,
      #success .framer-8b23z1,
      #success [data-framer-name="Image"] {
        position: absolute;
        inset: 0;
        z-index: 1;
        opacity: 0.3;
        overflow: visible;
        pointer-events: none;
      }
      #success [data-framer-background-image-wrapper] {
        position: absolute;
        inset: 0;
        border-radius: inherit;
      }
      #success [data-framer-name="Image"] img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        border-radius: inherit;
      }
      #success .ks-success-card-copy {
        position: relative;
        z-index: 2;
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 38px;
      }
      #success .ks-success-card-copy h3.framer-text {
        font-family: "Anek Bangla", sans-serif;
        font-size: 28px;
        font-weight: 600;
        letter-spacing: -0.02em;
        line-height: 160%;
        text-align: center;
        color: #fff;
        margin: 0;
      }
      #success .ks-success-stats {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        gap: 40px 100px;
        width: min-content;
      }
      #success .ks-success-stat {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        width: min-content;
      }
      #success .ks-success-count {
        font-family: Anton, sans-serif;
        font-size: 60px;
        font-weight: 400;
        line-height: 1em;
        color: #fff;
        letter-spacing: 0;
        white-space: nowrap;
      }
      #success .ks-success-stat .framer-text {
        font-family: "Anek Bangla", sans-serif;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -0.02em;
        line-height: 1.5em;
        text-align: left;
        color: #fff;
        margin: 0;
        white-space: nowrap;
      }
      @media (min-width: 680px) and (max-width: 1199.98px) {
        #success .framer-c7ay2j { flex-direction: column; }
        #success .framer-1ckbbiw {
          max-width: none;
          top: auto;
          flex: 0 0 auto;
          width: 100%;
          position: relative;
        }
        #success .framer-1jsmtve { flex: 0 0 auto; gap: 30px; width: 100%; }
      }
      @media (max-width: 679.98px) {
        #success { padding: 50px 20px; }
        #success .framer-c7ay2j { flex-direction: column; gap: 30px; }
        #success .framer-1ckbbiw {
          top: auto;
          flex: 0 0 auto;
          width: 100%;
          position: relative;
        }
        #success .framer-tdoplj .framer-text { font-size: 36px; }
        #success .framer-1h79oq9 .framer-text { font-size: 18px; line-height: 28px; }
        #success .framer-1jsmtve {
          flex: 0 0 auto;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
        }
        #success .framer-ubbpp8 { gap: 20px; }
        #success .ks-success-card { gap: 32px; }
        #success .ks-success-card-copy h3.framer-text { font-size: 22px; }
        #success .ks-success-count { font-size: 44px; }
        #success .ks-success-stat .framer-text { font-size: 16px; }
      }
    </style>
`

if (html.includes('id="ks-site-fixes"')) {
  html = html.replace(/<style id="ks-site-fixes">[\s\S]*?<\/style>/, headFixes.trim())
} else {
  html = html.replace("<!-- Start of headEnd -->", `${headFixes}<!-- Start of headEnd -->`)
}

const runtimeFixes = `
<script id="ks-runtime-fixes">
(function () {
  var TALLY_URL = "${tallyUrl}";
  var TALLY_URL_VIP = "${tallyUrlVip}";
  var EVENT_HASH = "#event";
  var isLocalDev = /^(localhost|127\\.0\\.0\\.1|\\[::1\\])$/.test(window.location.hostname);

  function setAttribute(element, name, value) {
    if (element.getAttribute(name) !== value) element.setAttribute(name, value);
  }

  function muteSiteMedia() {
    if (!isLocalDev) return;
    document.querySelectorAll("audio, video").forEach(function (element) {
      element.muted = true;
      element.volume = 0;
      if (element instanceof HTMLAudioElement) {
        element.pause();
        element.removeAttribute("autoplay");
      }
    });
  }

  function scrollToActivitySection() {
    var section = document.querySelector(".framer-kpea5s");
    if (!section) return false;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  }

  function scrollToEventSection() {
    var section = document.getElementById("event");
    if (!section) return false;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  }

  function trackRegistrationClick(link) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "registration_cta_click",
      cta_text: link.textContent.trim().replace(/\\s+/g, " "),
      page_location: window.location.href
    });
  }

  function rewriteRegistrationLinks() {
    var selectors = [
      'a[href="' + TALLY_URL + '"]',
      'a[href="' + TALLY_URL_VIP + '"]',
      'a[href="./form"]',
      'a[href="/form"]',
      'a[data-tally-cta]',
      'a[data-ks-event-cta]'
    ].join(", ");
    document.querySelectorAll(selectors).forEach(function (link) {
      if (link.closest("#event")) {
        if (link.getAttribute("href") === "./form" || link.getAttribute("href") === "/form") {
          setAttribute(link, "href", TALLY_URL);
        }
        setAttribute(link, "target", "_blank");
        setAttribute(link, "rel", "noopener noreferrer");
        setAttribute(link, "data-tally-cta", "1");
        return;
      }
      setAttribute(link, "href", EVENT_HASH);
      if (link.hasAttribute("target")) link.removeAttribute("target");
      if (link.hasAttribute("rel")) link.removeAttribute("rel");
      if (link.hasAttribute("data-tally-cta")) link.removeAttribute("data-tally-cta");
      setAttribute(link, "data-ks-event-cta", "1");
    });
  }

function paintOfficialCtaShaders(root) {
    var canvases = root.querySelectorAll('[data-ks-shader="btn"] canvas, [data-ks-shader="ssc"] canvas, [data-ks-shader="vip"] canvas');
    if (!canvases.length) return false;
    var vertSrc = "#version 300 es\\nprecision highp float;\\nin vec2 a_position;\\nout vec2 v_uv;\\nvoid main() {\\n  v_uv = a_position * 0.5 + 0.5;\\n  gl_Position = vec4(a_position, 0.0, 1.0);\\n}";
    var fragSrc = "#version 300 es\\nprecision highp float;\\n\\nin vec2 v_uv;\\nout vec4 fragColor;\\n\\n#define NUM_COLORS 8\\n\\nuniform vec4 u_colors[NUM_COLORS];\\nuniform int u_colors_length;\\nuniform float u_seed;\\nuniform float u_speed;\\nuniform float u_loop;\\nuniform float u_scale;\\nuniform float u_turbAmp;\\nuniform float u_turbFreq;\\nuniform float u_turbIter;\\nuniform float u_waveFreq;\\nuniform float u_distBias;\\nuniform float u_jellify;\\nuniform float u_ditherMode;\\nuniform float u_dither;\\nuniform float u_exposure;\\nuniform float u_contrast;\\nuniform float u_saturation;\\nuniform float u_designAspect;\\n\\nuniform float u_time;\\nuniform vec2 u_resolution;\\nuniform float u_deltaTime;\\nuniform float u_pixelRatio;\\nuniform vec4 u_mousePosition;\\nuniform float u_mousePointerDown;\\nuniform float u_mouseHover;\\n\\nconst float GOLDEN_ANGLE = 2.3999632;\\nconst float TAU = 6.28318530;\\n\\nuvec3 hash3(uvec3 v) {\\n    v = v * 1664525u + 1013904223u;\\n    v.x += v.y * v.z;\\n    v.y += v.z * v.x;\\n    v.z += v.x * v.y;\\n    v ^= v >> 16u;\\n    v.x += v.y * v.z;\\n    v.y += v.z * v.x;\\n    v.z += v.x * v.y;\\n    return v;\\n}\\n\\nvec3 seedRandom(float seedVal) {\\n    uvec3 s = uvec3(\\n        floatBitsToUint(seedVal),\\n        floatBitsToUint(seedVal * 1.5 + 7.31),\\n        floatBitsToUint(seedVal * 2.7 + 13.37)\\n    );\\n    s = hash3(s);\\n    return vec3(s) / float(0xFFFFFFFFu);\\n}\\n\\nvec3 toLinear(vec3 c) { return pow(c, vec3(2.2)); }\\nvec3 toSrgb(vec3 c) { return pow(clamp(c, 0.0, 1.0), vec3(0.4545)); }\\n\\nvec3 linearToOklab(vec3 c) {\\n    float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;\\n    float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;\\n    float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;\\n    l = pow(max(l, 0.0), 1.0/3.0);\\n    m = pow(max(m, 0.0), 1.0/3.0);\\n    s = pow(max(s, 0.0), 1.0/3.0);\\n    return vec3(\\n        0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,\\n        1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,\\n        0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s\\n    );\\n}\\n\\nvec3 oklabToLinear(vec3 c) {\\n    float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;\\n    float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;\\n    float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;\\n    l = l * l * l;\\n    m = m * m * m;\\n    s = s * s * s;\\n    return vec3(\\n        +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,\\n        -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,\\n        -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s\\n    );\\n}\\n\\nvec3 oklabToLch(vec3 lab) { return vec3(lab.x, length(lab.yz), atan(lab.z, lab.y)); }\\nvec3 lchToOklab(vec3 lch) { return vec3(lch.x, lch.y * cos(lch.z), lch.y * sin(lch.z)); }\\n\\nvec3 mixLch(vec3 lab0, vec3 lab1, float t) {\\n    vec3 lch0 = oklabToLch(lab0);\\n    vec3 lch1 = oklabToLch(lab1);\\n    if (lch0.y < 0.05) lch0.z = lch1.z;\\n    if (lch1.y < 0.05) lch1.z = lch0.z;\\n    float dh = lch1.z - lch0.z;\\n    if (dh > 3.14159265) dh -= 6.28318530;\\n    if (dh < -3.14159265) dh += 6.28318530;\\n    return lchToOklab(vec3(mix(lch0.x, lch1.x, t), mix(lch0.y, lch1.y, t), lch0.z + dh * t));\\n}\\n\\nvec3 getColor(int idx) {\\n    if (u_colors_length < 1) return vec3(0.0);\\n    int safeIdx = clamp(idx, 0, u_colors_length - 1);\\n    return u_colors[safeIdx].rgb;\\n}\\n\\nvec3 paletteN(float t, int count) {\\n    if (count < 1) return vec3(0.0);\\n    if (count < 2) return toLinear(getColor(0));\\n    float segmentSize = 1.0 / float(count - 1);\\n    t = clamp(t, 0.0, 1.0);\\n    int idx = min(int(floor(t / segmentSize)), count - 2);\\n    float localT = clamp((t - float(idx) * segmentSize) / segmentSize, 0.0, 1.0);\\n    vec3 lab0 = linearToOklab(toLinear(getColor(idx)));\\n    vec3 lab1 = linearToOklab(toLinear(getColor(idx + 1)));\\n    return oklabToLinear(mixLch(lab0, lab1, localT));\\n}\\n\\nfloat IGN(vec2 uv) { return fract(52.9829189 * fract(dot(uv, vec2(0.06711056, 0.00583715)))); }\\nfloat quickNoise(vec2 I) { return fract(sin(dot(I, vec2(12.9898, 78.233))) * 43758.5453); }\\nfloat getDither(vec2 I, float mode) {\\n    if (mode < 0.5) return 0.5;\\n    if (mode < 1.5) return IGN(I);\\n    return quickNoise(I);\\n}\\n\\nvec3 softGamutMap(vec3 linearRgb) {\\n    float maxC = max(linearRgb.r, max(linearRgb.g, linearRgb.b));\\n    float minC = min(linearRgb.r, min(linearRgb.g, linearRgb.b));\\n    if (minC >= 0.0 && maxC <= 1.0) return linearRgb;\\n    vec3 lab = linearToOklab(max(linearRgb, 0.0));\\n    float L = clamp(lab.x, 0.0, 1.0);\\n    float C = length(lab.yz);\\n    float h = atan(lab.z, lab.y);\\n    float maxChroma = 0.4 * (1.0 - pow(abs(2.0 * L - 1.0), 2.0));\\n    if (C > maxChroma * 0.7) {\\n        float knee = maxChroma * 0.7;\\n        C = knee + (maxChroma - knee) * tanh((C - knee) / (maxChroma - knee + 0.001));\\n    }\\n    return clamp(oklabToLinear(vec3(L, C * cos(h), C * sin(h))), 0.0, 1.0);\\n}\\n\\nvec3 applyContrastSaturation(vec3 linearRgb, float contrast, float saturation) {\\n    vec3 lab = linearToOklab(linearRgb);\\n    float C = length(lab.yz);\\n    float h = atan(lab.z, lab.y);\\n    lab.x = clamp((lab.x - 0.5) * contrast + 0.5, 0.0, 1.0);\\n    C *= saturation;\\n    lab.y = C * cos(h);\\n    lab.z = C * sin(h);\\n    return oklabToLinear(lab);\\n}\\n\\nvoid main() {\\n    vec2 fragCoord = v_uv * u_resolution;\\n    vec2 r = u_resolution;\\n    vec2 p = (fragCoord * 2.0 - r) / r.y;\\n    p.x *= u_designAspect * r.y / max(r.x, 1.0);\\n    int colorCount = u_colors_length;\\n    if (colorCount < 1) {\\n        fragColor = vec4(0.0, 0.0, 0.0, 1.0);\\n        return;\\n    }\\n    float t = u_time * 0.3;\\n    float looping = step(0.5, u_loop);\\n    float phase = TAU * u_time / max(u_loop, 0.01);\\n    float radius = u_loop * u_speed * 0.3 / TAU;\\n    float tA = sin(phase) * radius;\\n    float tB = (1.0 - cos(phase)) * radius;\\n    vec3 seedOffset = seedRandom(u_seed);\\n    vec3 seedOffset2 = seedRandom(u_seed + 100.0);\\n    float seedAngle = u_seed * GOLDEN_ANGLE;\\n    vec2 seedPhase = (seedOffset2.xy - 0.5) * TAU;\\n    float cs = cos(seedAngle);\\n    float sn = sin(seedAngle);\\n    p = mat2(cs, -sn, sn, cs) * p;\\n    float dither = getDither(floor(fragCoord / u_pixelRatio), u_ditherMode);\\n    float totalVal = 0.0;\\n    float totalWeight = 0.0;\\n    int turbIter = int(u_turbIter);\\n    float freq = 1.0 / max(u_turbFreq, 0.01);\\n    for (float i = 0.0; i < 4.0; i++) {\\n        float eph = i / 4.0;\\n        vec2 q = p * u_scale;\\n        float sq = eph * eph;\\n        if (u_jellify > 0.5) {\\n            q.yx *= mix(1.0, 0.5, 1.0 - exp(-sq));\\n        }\\n        float a = seedPhase.x;\\n        float d = seedPhase.y;\\n        for (int j = 2; j < 13; j++) {\\n            if (j >= turbIter) break;\\n            float fj = float(j);\\n            float t1 = mix(t * u_speed, tA, looping);\\n            float t2 = mix(t * u_speed, tB, looping);\\n            q += u_turbAmp * sin(q.yx / freq * fj + t1 + vec2(a, d) + seedOffset.xy * fj) / fj;\\n            a += cos(fj + d * 1.2 + q.x * 2.0 - t1 + seedOffset2.z + t2 * 0.3 * looping);\\n            d += sin(fj * q.y + a + seedOffset.z + t1 + seedOffset2.y + t2 * 0.3 * looping);\\n        }\\n        float v = 0.5 + 0.5 * sin(length(q.yx + vec2(a, d) * 0.2) * u_waveFreq + i * i + seedOffset.x);\\n        float weight = smoothstep(0.0, 0.5, eph) * smoothstep(1.0, 0.5, eph);\\n        totalVal += v * weight;\\n        totalWeight += weight;\\n    }\\n    float val = totalVal / totalWeight;\\n    val = clamp((val - 0.3) / 0.4, 0.0, 1.0);\\n    val = pow(val, exp(-u_distBias));\\n    val = clamp(val + (dither - 0.5) * u_dither, 0.0, 1.0);\\n    vec3 col = paletteN(val, colorCount);\\n    col *= u_exposure;\\n    col = applyContrastSaturation(col, u_contrast, u_saturation);\\n    col = softGamutMap(col);\\n    col = toSrgb(col);\\n    fragColor = vec4(col, 1.0);\\n}";
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var started = false;

    function compile(gl, type, src) {
      var shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;
      return shader;
    }

    function bindCta(canvas) {
      var kind = canvas.closest("[data-ks-shader]")?.getAttribute("data-ks-shader") || "btn";
      var gl = canvas.getContext("webgl2", { alpha: false, antialias: false, premultipliedAlpha: false });
      if (!gl) return null;
      var vs = compile(gl, gl.VERTEX_SHADER, vertSrc);
      var fs = compile(gl, gl.FRAGMENT_SHADER, fragSrc);
      if (!vs || !fs) return null;
      var program = gl.createProgram();
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.bindAttribLocation(program, 0, "a_position");
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
      gl.useProgram(program);
      var buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      var loc = {};
      [
        "u_colors", "u_colors_length", "u_seed", "u_speed", "u_loop", "u_scale", "u_turbAmp",
        "u_turbFreq", "u_turbIter", "u_waveFreq", "u_distBias", "u_jellify", "u_ditherMode",
        "u_dither", "u_exposure", "u_contrast", "u_saturation", "u_designAspect", "u_time", "u_resolution",
        "u_deltaTime", "u_pixelRatio", "u_mousePosition", "u_mousePointerDown", "u_mouseHover"
      ].forEach(function (name) { loc[name] = gl.getUniformLocation(program, name); });
      var palette = kind === "ssc"
        ? [13, 43, 214, 255, 0, 0, 0, 255]
        : kind === "vip"
          ? [17, 0, 26, 255, 66, 2, 2, 255, 199, 0, 0, 255]
          : [18, 2, 2, 255, 46, 5, 5, 255, 163, 13, 13, 255, 230, 53, 53, 255];
      var colorCount = kind === "ssc" ? 2 : kind === "vip" ? 3 : 4;
      var colors = new Float32Array(32);
      for (var i = 0; i < colorCount; i++) {
        colors[i * 4] = palette[i * 4] / 255;
        colors[i * 4 + 1] = palette[i * 4 + 1] / 255;
        colors[i * 4 + 2] = palette[i * 4 + 2] / 255;
        colors[i * 4 + 3] = 1;
      }
      gl.uniform4fv(loc.u_colors, colors);
      gl.uniform1i(loc.u_colors_length, colorCount);
      gl.uniform1f(loc.u_seed, kind === "btn" ? 32 : 355);
      gl.uniform1f(loc.u_speed, kind === "btn" ? 1.6 : 2);
      gl.uniform1f(loc.u_loop, 0);
      gl.uniform1f(loc.u_scale, kind === "ssc" ? 0.3 : kind === "vip" ? 0.29 : 0.4);
      gl.uniform1f(loc.u_turbAmp, 0.6);
      gl.uniform1f(loc.u_turbFreq, 0.1);
      gl.uniform1f(loc.u_turbIter, kind === "btn" ? 4 : 7);
      gl.uniform1f(loc.u_waveFreq, kind === "btn" ? 2.4 : 3.8);
      gl.uniform1f(loc.u_distBias, 0);
      gl.uniform1f(loc.u_jellify, 0);
      gl.uniform1f(loc.u_ditherMode, 1);
      gl.uniform1f(loc.u_dither, 0.2);
      gl.uniform1f(loc.u_exposure, 1.1);
      gl.uniform1f(loc.u_contrast, 1.1);
      gl.uniform1f(loc.u_saturation, 1);
      var designAspect = kind === "btn" ? 250 / 52 : 300 / 25;
      var aspectAttr = canvas.closest("[data-ks-aspect]")?.getAttribute("data-ks-aspect");
      if (kind === "btn" && aspectAttr && aspectAttr.includes("/")) {
        var parts = aspectAttr.split("/").map(Number);
        if (parts.length === 2 && parts[0] > 0 && parts[1] > 0) designAspect = parts[0] / parts[1];
      }
      gl.uniform1f(loc.u_designAspect, designAspect);
      var mouse = [0, 0, 0, 0];
      var hover = 0;
      if (kind === "btn") {
        var host = canvas.closest("a") || canvas;
        host.addEventListener("pointermove", function (event) {
          var rect = canvas.getBoundingClientRect();
          mouse[2] = mouse[0];
          mouse[3] = mouse[1];
          mouse[0] = event.clientX - rect.left;
          mouse[1] = rect.height - (event.clientY - rect.top);
          hover = 1;
        });
        host.addEventListener("pointerenter", function () { hover = 1; });
        host.addEventListener("pointerleave", function () { hover = 0; });
      }
      var wrap = canvas.closest("[data-ks-shader]");
      if (wrap) wrap.setAttribute("data-ks-webgl", "1");
      return { canvas: canvas, gl: gl, loc: loc, mouse: mouse, hover: function () { return hover; }, last: 0 };
    }

    var layers = [];
    canvases.forEach(function (canvas) {
      var layer = bindCta(canvas);
      if (layer) layers.push(layer);
    });
    if (!layers.length) return false;

    function resize(layer) {
      var canvas = layer.canvas;
      var parent = canvas.parentElement;
      var ratio = 1;
      var cssW = Math.max(1, Math.round(parent.getBoundingClientRect().width));
      var cssH = Math.max(1, Math.round(parent.getBoundingClientRect().height));
      var w = Math.max(2, Math.round(cssW * ratio));
      var h = Math.max(2, Math.round(cssH * ratio));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      layer.gl.viewport(0, 0, w, h);
      layer.gl.uniform2f(layer.loc.u_resolution, w, h);
      layer.gl.uniform1f(layer.loc.u_pixelRatio, ratio);
    }

    function draw(layer, now) {
      resize(layer);
      var dt = layer.last ? Math.min(0.05, (now - layer.last) / 1000) : 0.016;
      layer.last = now;
      layer.gl.uniform1f(layer.loc.u_time, now / 1000);
      layer.gl.uniform1f(layer.loc.u_deltaTime, dt);
      layer.gl.uniform4f(layer.loc.u_mousePosition, layer.mouse[0], layer.mouse[1], layer.mouse[2], layer.mouse[3]);
      layer.gl.uniform1f(layer.loc.u_mousePointerDown, 0);
      layer.gl.uniform1f(layer.loc.u_mouseHover, layer.hover());
      layer.gl.drawArrays(layer.gl.TRIANGLE_STRIP, 0, 4);
    }

    function tick(now) {
      layers.forEach(function (layer) { draw(layer, now); });
      if (!reduceMotion) requestAnimationFrame(tick);
    }

    layers.forEach(function (layer) { draw(layer, 0); });
    if (!reduceMotion) requestAnimationFrame(tick);
    started = true;
    return started;
  }

    function paintEventShaders() {
    var root = document.querySelector("#main #event");
    if (!root || root.dataset.ksShaders === "1") return;
    root.dataset.ksShaders = "1";

    var specs = {
      ssc: { colors: [[13, 43, 214], [0, 0, 0]], seed: 355, speed: 2, scale: 0.3, turbAmp: 0.6, turbFreq: 0.1, turbIter: 7, waveFreq: 3.8 },
      vip: { colors: [[17, 0, 26], [66, 2, 2], [199, 0, 0]], seed: 355, speed: 2, scale: 0.29, turbAmp: 0.6, turbFreq: 0.1, turbIter: 7, waveFreq: 3.8 }
    };
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var layers = [];

    paintOfficialCtaShaders(root);

    root.querySelectorAll("[data-ks-shader] canvas").forEach(function (canvas) {
      var kind = canvas.closest("[data-ks-shader]").getAttribute("data-ks-shader");
      if (kind === "btn") return;
      if (kind === "ssc") return;
      if (kind === "vip") return;
      var spec = specs[kind];
      if (!spec) return;
      var ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) return;
      layers.push({ canvas: canvas, ctx: ctx, spec: spec });
    });
    if (!layers.length) return;

    function mixColor(colors, t) {
      var scaled = Math.max(0, Math.min(0.999, t)) * (colors.length - 1);
      var i = Math.floor(scaled);
      var f = scaled - i;
      var a = colors[i];
      var b = colors[Math.min(i + 1, colors.length - 1)];
      return [
        a[0] + (b[0] - a[0]) * f,
        a[1] + (b[1] - a[1]) * f,
        a[2] + (b[2] - a[2]) * f
      ];
    }

    function drawLayer(layer, time) {
      var spec = layer.spec;
      var canvas = layer.canvas;
      var parent = canvas.parentElement;
      var cssW = Math.max(1, Math.round(parent.getBoundingClientRect().width));
      var cssH = Math.max(1, Math.round(parent.getBoundingClientRect().height));
      var scale = cssW > 200 ? 0.5 : 1;
      var w = Math.max(2, Math.round(cssW * scale));
      var h = Math.max(2, Math.round(cssH * scale));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      var image = layer.ctx.createImageData(w, h);
      var data = image.data;
      var t = time * spec.speed;
      var seed = spec.seed * 0.01;
      for (let y = 0; y < h; y++) {
        var v = y / h;
        for (let x = 0; x < w; x++) {
          var u = x / w;
          var px = (u - 0.5) / spec.scale;
          var py = (v - 0.5) / spec.scale;
          var iter = spec.turbIter;
          for (let i = 0; i < iter; i++) {
            var freq = spec.turbFreq * (i + 1) * 18;
            var amp = spec.turbAmp / (i + 1);
            var nx = px + amp * Math.sin(py * freq + t * 0.7 + seed);
            var ny = py + amp * Math.cos(px * freq - t * 0.55 + seed * 1.7);
            px = nx;
            py = ny;
          }
          var field = Math.sin((px + py) * spec.waveFreq + t + seed);
          field = field * 0.5 + 0.5;
          var color = mixColor(spec.colors, field);
          var idx = (y * w + x) * 4;
          data[idx] = color[0] * 1.1;
          data[idx + 1] = color[1] * 1.1;
          data[idx + 2] = color[2] * 1.1;
          data[idx + 3] = 255;
        }
      }
      layer.ctx.putImageData(image, 0, 0);
    }

    function tick(now) {
      var time = now / 1000;
      layers.forEach(function (layer) {
        drawLayer(layer, time);
      });
      if (!reduceMotion) requestAnimationFrame(tick);
    }

    drawLayer(layers[0], 0);
    layers.forEach(function (layer) { drawLayer(layer, 0); });
    if (!reduceMotion) requestAnimationFrame(tick);
  }

  function insertUpcomingEventSection() {
    var host = document.querySelector("#main .framer-2iAM9") || document.getElementById("main");
    if (!host) return;
    var rules = host.querySelector("#who-for") || host.querySelector('[data-framer-name="Who For - Section"]');
    if (!rules) return;
    var existing = host.querySelector("#event") || document.getElementById("event");
    if (existing) {
      if (!existing.classList.contains("ks-upcoming--v19")) {
        var next = document.createElement("div");
        next.innerHTML = ${JSON.stringify(upcomingEventHtml)};
        var replacement = next.firstElementChild;
        if (replacement) {
          replacement.classList.add("ks-upcoming--v19");
          existing.replaceWith(replacement);
          existing = replacement;
        }
      }
      if (existing.nextElementSibling !== rules) rules.parentNode.insertBefore(existing, rules);
      return;
    }
    var wrap = document.createElement("div");
    wrap.innerHTML = ${JSON.stringify(upcomingEventHtml)};
    var section = wrap.firstElementChild;
    if (!section) return;
    rules.parentNode.insertBefore(section, rules);
  }

  function insertSuccessGlimpseSection() {
    var host = document.querySelector("#main .framer-2iAM9") || document.getElementById("main");
    if (!host) return;
    var activity = host.querySelector("#activity") || host.querySelector('[data-framer-name="Activity - Section"]');
    if (!activity) return;
    var existing = document.getElementById("success");
    if (existing) {
      if (!existing.classList.contains("ks-success--v4")) {
        var next = document.createElement("div");
        next.innerHTML = ${JSON.stringify(successGlimpseHtml)};
        var replacement = next.firstElementChild;
        if (replacement) {
          replacement.classList.add("ks-success--v4");
          existing.replaceWith(replacement);
          existing = replacement;
        }
      }
      if (existing.nextElementSibling !== activity) activity.parentNode.insertBefore(existing, activity);
      return;
    }
    var wrap = document.createElement("div");
    wrap.innerHTML = ${JSON.stringify(successGlimpseHtml)};
    var section = wrap.firstElementChild;
    if (!section) return;
    activity.parentNode.insertBefore(section, activity);
  }

  function formatSuccessCount(value) {
    return String(value).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
  }

  function animateSuccessCounts(root) {
    if (!root || root.dataset.ksCountsReady === "1") return;
    var nodes = root.querySelectorAll("[data-ks-count]");
    if (!nodes.length) return;
    root.dataset.ksCountsReady = "1";
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function run(node) {
      if (node.dataset.ksCounted === "1") return;
      node.dataset.ksCounted = "1";
      var target = Number(node.getAttribute("data-ks-count") || "0");
      if (!Number.isFinite(target)) return;
      if (reduceMotion) {
        node.textContent = formatSuccessCount(target);
        return;
      }
      var started = 0;
      var duration = 1400;
      function tick(now) {
        if (!started) started = now;
        var progress = Math.min(1, (now - started) / duration);
        var eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = formatSuccessCount(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(run);
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.2 });
    nodes.forEach(function (node) {
      var rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        run(node);
        return;
      }
      observer.observe(node);
    });
  }

  function bindSuccessProgress(root) {
    if (!root || root.dataset.ksProgressReady === "1") return;
    var fill = root.querySelector(".framer-1eau4zc");
    var cards = root.querySelector(".framer-ubbpp8");
    if (!fill || !cards) return;
    root.dataset.ksProgressReady = "1";
    function update() {
      var rect = cards.getBoundingClientRect();
      var view = window.innerHeight || 1;
      var start = view * 0.2;
      var end = view * 0.75;
      var traveled = start - rect.top;
      var span = rect.height - (end - start);
      var progress = span <= 0 ? 1 : traveled / span;
      fill.style.height = Math.max(18, Math.min(100, progress * 100)) + "%";
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function removeHydrationDuplicates() {
    document
      .querySelectorAll("body > section[data-framer-name], body > footer[data-framer-name]")
      .forEach(function (node) {
        node.remove();
      });

    ["framer-1yz6564-container", "framer-1qgzf0t", "framer-1tup7jo"].forEach(function (className) {
      document.querySelectorAll("body > div." + className).forEach(function (node) {
        node.remove();
      });
    });
  }

  function revealHeroPlaceDate() {
    document.querySelectorAll('.framer-1raer9f[data-framer-name="Place & Date"]').forEach(function (row) {
      row.style.setProperty("opacity", "1", "important");
      row.style.setProperty("transform", "none", "important");
      row.style.willChange = "auto";
    });
  }

  function enhance() {
    removeHydrationDuplicates();
    revealHeroPlaceDate();
    insertUpcomingEventSection();
    insertSuccessGlimpseSection();
    paintEventShaders();
    var success = document.getElementById("success");
    animateSuccessCounts(success);
    bindSuccessProgress(success);
    document.documentElement.lang = "bn";

    document.querySelectorAll('[data-framer-name="Activity - Section"]').forEach(function (section) {
      setAttribute(section, "id", "activity");
    });

    rewriteRegistrationLinks();

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
        if (clickedUrl.origin === window.location.origin && clickedUrl.hash === "#event") {
          event.preventDefault();
          event.stopImmediatePropagation();
          trackRegistrationClick(clickedLink);
          scrollToEventSection();
          return;
        }
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
    trackRegistrationClick(link);
  }, true);

  if (window.location.hash === "#success") {
    var successScrollAttempts = 0;
    var successScrollTimer = window.setInterval(function () {
      successScrollAttempts += 1;
      var section = document.getElementById("success");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
      if (section || successScrollAttempts > 30) window.clearInterval(successScrollTimer);
    }, 100);
  }

  if (window.location.hash === "#event") {
    var eventScrollAttempts = 0;
    var eventScrollTimer = window.setInterval(function () {
      eventScrollAttempts += 1;
      var section = document.getElementById("event");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
      if (section || eventScrollAttempts > 30) window.clearInterval(eventScrollTimer);
    }, 100);
  }

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
    muteSiteMedia();
    enhance();
    var root = document.getElementById("main");
    if (!root) return;
    new MutationObserver(function () {
      muteSiteMedia();
      enhance();
    }).observe(root, {
      attributes: true,
      attributeFilter: ["class", "data-framer-name", "href"],
      childList: true,
      subtree: true
    });
    new MutationObserver(function () {
      removeHydrationDuplicates();
    }).observe(document.body, {
      childList: true
    });
  }

  if (isLocalDev) {
    muteSiteMedia();
    document.addEventListener("DOMContentLoaded", muteSiteMedia, { once: true });
    new MutationObserver(muteSiteMedia).observe(document.documentElement, {
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
pageBundle = replaceAll(
  pageBundle,
  "let n=new i.Image;n.src=t",
  "let n=new i.Image;n.fetchPriority=`high`,n.src=t",
  "slideshow image preload priority",
)
pageBundle = replaceAll(
  pageBundle,
  "d(`img`,{src:V,alt:``,style:",
  "d(`img`,{src:V,alt:``,fetchPriority:`high`,decoding:`async`,style:",
  "slideshow active image priority",
)
pageBundle = removeHeroSscTitleFromBundle(pageBundle)
pageBundle = removeHeroSeatCountFromBundle(pageBundle)
pageBundle = replaceAll(
  pageBundle,
  eligibilityCopyFrom,
  eligibilityCopyBundle,
  "eligibility card copy",
)
pageBundle = replaceAll(
  pageBundle,
  registrationCopyFrom,
  registrationCopyTo,
  "registration card copy",
)
pageBundle = replaceAll(
  pageBundle,
  heroSubtitleCopyFrom,
  heroSubtitleCopyBundle,
  "hero subtitle copy",
)
pageBundle = replaceAll(
  pageBundle,
  registrationDeadlineCopyFrom,
  registrationDeadlineCopyTo,
  "registration deadline copy",
)
pageBundle = replaceAll(
  pageBundle,
  countdownTargetFrom,
  countdownTargetTo,
  "registration countdown target date",
)
pageBundle = replaceAll(pageBundle, faqDateCopyFrom, faqDateCopyTo, "FAQ date answer copy")
pageBundle = replaceAll(
  pageBundle,
  faqRegistrationCopyFrom,
  faqRegistrationCopyTo,
  "FAQ registration answer copy",
)
pageBundle = normalizeBundleHeadings(pageBundle)
fs.writeFileSync(pageBundlePath, pageBundle)

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
