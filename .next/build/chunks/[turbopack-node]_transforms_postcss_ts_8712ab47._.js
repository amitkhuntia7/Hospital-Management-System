module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/DOCUMENT/Aaa/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/a7bbc_426a50f3._.js",
  "build/chunks/[root-of-the-server]__928390e7._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/DOCUMENT/Aaa/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];