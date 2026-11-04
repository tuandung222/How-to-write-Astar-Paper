window.MathJax = {
  tex: { inlineMath: [["\\(", "\\)"]], displayMath: [["\\[", "\\]"]], processEscapes: true, processEnvironments: true },
  options: { ignoreHtmlClass: ".*|", processHtmlClass: "arithmatex" }
};
document$.subscribe(() => {
  if (!window.MathJax || !MathJax.startup || !MathJax.startup.output) return;
  if (typeof MathJax.startup.output.clearCache === "function") MathJax.startup.output.clearCache();
  MathJax.typesetClear(); MathJax.texReset(); MathJax.typesetPromise();
});
