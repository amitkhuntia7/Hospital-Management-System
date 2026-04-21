(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PharmaUpdatesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-client] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PharmaUpdatesPage() {
    _s();
    const [news, setNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchNews = async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://newsapi.org/v2/everything?q=pharmaceutical OR medicine OR drug approval&language=en&sortBy=publishedAt&pageSize=20&apiKey=".concat(("TURBOPACK compile-time value", "e7e37d831d074496900fed5ee3b06843")));
            setNews(res.data.articles);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PharmaUpdatesPage.useEffect": ()=>{
            fetchNews();
            const interval = setInterval({
                "PharmaUpdatesPage.useEffect.interval": ()=>{
                    fetchNews();
                }
            }["PharmaUpdatesPage.useEffect.interval"], 300000);
            return ({
                "PharmaUpdatesPage.useEffect": ()=>clearInterval(interval)
            })["PharmaUpdatesPage.useEffect"];
        }
    }["PharmaUpdatesPage.useEffect"], []);
    const filteredNews = news.filter((n)=>n.title.toLowerCase().includes(search.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:60:0",
        "data-orchids-name": "div",
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:64:0",
                "data-orchids-name": "section",
                className: "relative h-[300px] flex items-center justify-center text-white text-center",
                style: {
                    backgroundImage: "url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:73:0",
                        "data-orchids-name": "div",
                        className: "absolute inset-0 bg-black/60"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                        lineNumber: 73,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:75:0",
                        "data-orchids-name": "div",
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"], {
                                "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:77:0",
                                "data-orchids-name": "Newspaper",
                                size: 40,
                                className: "mx-auto mb-3"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                lineNumber: 77,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:79:0",
                                "data-orchids-name": "h1",
                                className: "text-4xl font-bold",
                                children: "Pharma Updates"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                lineNumber: 79,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:83:0",
                                "data-orchids-name": "p",
                                className: "text-sm mt-2",
                                children: "Real-time pharmaceutical news & research"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                lineNumber: 83,
                                columnNumber: 1
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                        lineNumber: 75,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                lineNumber: 64,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:93:0",
                "data-orchids-name": "section",
                className: "py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:95:0",
                    "data-orchids-name": "div",
                    className: "max-w-6xl mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:97:0",
                            "data-orchids-name": "div",
                            className: "flex items-center gap-3 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:99:0",
                                    "data-orchids-name": "div",
                                    className: "relative flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:101:0",
                                            "data-orchids-name": "Search",
                                            className: "absolute left-3 top-3 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:103:0",
                                            "data-orchids-name": "input",
                                            type: "text",
                                            placeholder: "Search pharma news...",
                                            value: search,
                                            onChange: (e)=>setSearch(e.target.value),
                                            className: "w-full pl-10 pr-4 py-3 border rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:113:0@fetchNews",
                                    "data-orchids-name": "button",
                                    onClick: fetchNews,
                                    className: "bg-primary text-white px-5 py-3 rounded-xl",
                                    children: "Refresh"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                            lineNumber: 97,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:127:0",
                            "data-orchids-name": "div",
                            className: "flex items-center gap-2 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:129:0",
                                    "data-orchids-name": "TrendingUp",
                                    className: "text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:131:0",
                                    "data-orchids-name": "h2",
                                    className: "text-xl font-bold",
                                    children: "Trending Pharma News"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                            lineNumber: 127,
                            columnNumber: 1
                        }, this),
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:139:0",
                            "data-orchids-name": "p",
                            className: "text-gray-500",
                            children: "Loading pharma news..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                            lineNumber: 139,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:145:0",
                            "data-orchids-name": "div",
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: filteredNews.slice(0, 12).map((article, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:149:0",
                                    "data-orchids-name": "a",
                                    href: article.url,
                                    target: "_blank",
                                    className: "bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden",
                                    children: [
                                        article.urlToImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:159:0",
                                            "data-orchids-name": "img",
                                            src: article.urlToImage,
                                            className: "h-44 w-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:166:0",
                                            "data-orchids-name": "div",
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:168:0",
                                                    "data-orchids-name": "p",
                                                    className: "text-xs text-gray-400 mb-1",
                                                    children: article.source.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 1
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:172:0",
                                                    "data-orchids-name": "h3",
                                                    className: "font-semibold mb-2 line-clamp-2",
                                                    children: article.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 1
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:176:0",
                                                    "data-orchids-name": "p",
                                                    className: "text-sm text-gray-500 mb-3 line-clamp-3",
                                                    children: article.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 1
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:180:0",
                                                    "data-orchids-name": "div",
                                                    className: "flex justify-between text-xs text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:182:0",
                                                            "data-orchids-name": "span",
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:184:0",
                                                                    "data-orchids-name": "Clock",
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                                                    lineNumber: 184,
                                                                    columnNumber: 1
                                                                }, this),
                                                                new Date(article.publishedAt).toLocaleDateString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 1
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:190:0",
                                                            "data-orchids-name": "span",
                                                            className: "flex items-center gap-1 text-primary",
                                                            children: [
                                                                "Read",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    "data-orchids-id": "src\\app\\pharma-updates\\page.tsx:194:0",
                                                                    "data-orchids-name": "ArrowRight",
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 1
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 1
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 1
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 1
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                            lineNumber: 145,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                    lineNumber: 95,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
                lineNumber: 93,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/MediVerse/src/app/pharma-updates/page.tsx",
        lineNumber: 60,
        columnNumber: 1
    }, this);
}
_s(PharmaUpdatesPage, "H00+2E4STM2tNgeti1wXNKWuWvk=");
_c = PharmaUpdatesPage;
var _c;
__turbopack_context__.k.register(_c, "PharmaUpdatesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_MediVerse_src_app_pharma-updates_page_tsx_b8b7ab92._.js.map