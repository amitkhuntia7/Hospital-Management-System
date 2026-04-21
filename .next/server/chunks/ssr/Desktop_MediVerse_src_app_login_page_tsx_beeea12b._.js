module.exports = [
"[project]/Desktop/MediVerse/src/app/login/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Login() {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await fetch("/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        alert("Login successful");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\app\\login\\page.tsx:24:0",
        "data-orchids-name": "div",
        className: "flex justify-center items-center h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            "data-orchids-id": "src\\app\\login\\page.tsx:26:0@handleSubmit",
            "data-orchids-name": "form",
            onSubmit: handleSubmit,
            className: "bg-white p-6 rounded shadow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    "data-orchids-id": "src\\app\\login\\page.tsx:28:0",
                    "data-orchids-name": "h1",
                    className: "text-2xl mb-4",
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/Desktop/MediVerse/src/app/login/page.tsx",
                    lineNumber: 28,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    "data-orchids-id": "src\\app\\login\\page.tsx:30:0",
                    "data-orchids-name": "input",
                    placeholder: "Email",
                    onChange: (e)=>setEmail(e.target.value),
                    className: "border p-2 mb-2 w-full"
                }, void 0, false, {
                    fileName: "[project]/Desktop/MediVerse/src/app/login/page.tsx",
                    lineNumber: 30,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    "data-orchids-id": "src\\app\\login\\page.tsx:32:0",
                    "data-orchids-name": "input",
                    type: "password",
                    placeholder: "Password",
                    onChange: (e)=>setPassword(e.target.value),
                    className: "border p-2 mb-2 w-full"
                }, void 0, false, {
                    fileName: "[project]/Desktop/MediVerse/src/app/login/page.tsx",
                    lineNumber: 32,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    "data-orchids-id": "src\\app\\login\\page.tsx:34:0",
                    "data-orchids-name": "button",
                    className: "bg-green-500 text-white p-2 w-full",
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/Desktop/MediVerse/src/app/login/page.tsx",
                    lineNumber: 34,
                    columnNumber: 1
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/MediVerse/src/app/login/page.tsx",
            lineNumber: 26,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/MediVerse/src/app/login/page.tsx",
        lineNumber: 24,
        columnNumber: 1
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_MediVerse_src_app_login_page_tsx_beeea12b._.js.map