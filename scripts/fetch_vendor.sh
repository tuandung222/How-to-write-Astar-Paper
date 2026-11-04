#!/usr/bin/env bash
# Tải Mermaid + MathJax về docs/javascripts/vendor để site/PDF không phụ thuộc CDN lúc render.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"
npm install --silent --no-save --no-package-lock --prefix "$TMP" mermaid@11.4.1 mathjax@3.2.2
mkdir -p "$ROOT/docs/javascripts/vendor"
cp "$TMP/node_modules/mermaid/dist/mermaid.min.js" "$ROOT/docs/javascripts/vendor/"
cp "$TMP/node_modules/mathjax/es5/tex-svg.js" "$ROOT/docs/javascripts/vendor/"
rm -rf "$TMP"
echo "vendor OK: $(ls "$ROOT/docs/javascripts/vendor")"
