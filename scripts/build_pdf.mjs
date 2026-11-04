// Render trang print_page/ của site đã build thành một PDF A4 chỉn chu.
// Dùng: node scripts/build_pdf.mjs [siteDir=site] [out=site/pdf/viet-paper-astar.pdf]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const siteDir = path.resolve(process.argv[2] || "site");
const outFile = path.resolve(process.argv[3] || path.join(siteDir, "pdf", "viet-paper-astar.pdf"));

const MIME = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".json": "application/json",
  ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf" };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p.startsWith(prefix)) p = "/" + p.slice(prefix.length);
  let f = path.join(siteDir, p);
  if (!f.startsWith(siteDir)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, "index.html");
  if (!fs.existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "application/octet-stream" });
  fs.createReadStream(f).pipe(res);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
// site_url có sub-path (/How-to-write-Astar-Paper/) → phục vụ site dưới đúng prefix
const prefix = new URL(process.env.SITE_URL || "https://x/How-to-write-Astar-Paper/").pathname;
const base = `http://127.0.0.1:${server.address().port}${prefix.replace(/\/$/, "")}`;

const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
// Không cần widget GitHub (sao/forks) trong PDF
await page.route("https://api.github.com/**", (r) => r.abort());

await page.emulateMedia({ media: "print", colorScheme: "light" });
await page.goto(`${base}/print_page/`, { waitUntil: "networkidle", timeout: 120000 });

// Chờ Mermaid render xong mọi sơ đồ (Material đặt SVG trong shadow DOM)
await page.waitForFunction(() => {
  const blocks = [...document.querySelectorAll("div.mermaid")];
  // Material render vào shadow DOM đóng và xoá text gốc → rendered = không còn text
  return blocks.every((d) => d.textContent.trim() === "" && d.getBoundingClientRect().height > 0);
}, null, { timeout: 60000 }).catch(() => console.warn("⚠ Mermaid: một số sơ đồ chưa render"));

// Chờ MathJax
await page.evaluate(async () => { if (window.MathJax?.typesetPromise) await window.MathJax.typesetPromise(); });
// Mở mọi <details>
await page.evaluate(() => document.querySelectorAll("details").forEach((d) => (d.open = true)));
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(1000);

fs.mkdirSync(path.dirname(outFile), { recursive: true });
await page.pdf({
  path: outFile,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  displayHeaderFooter: false, // header/footer do @page trong print.css đảm nhận
  outline: true,
  tagged: true,
});

await browser.close();
server.close();
const kb = (fs.statSync(outFile).size / 1024).toFixed(0);
console.log(`PDF: ${outFile} (${kb} KB)`);
if (errors.length) { console.error("Lỗi JS trên trang:", errors); process.exit(1); }
