(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/MediVerse/src/app/signup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Signup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Signup() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        const res = await fetch("/api/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
        if (res.ok) {
            alert("Account Created Successfully");
            router.push("/login"); // redirect to login page
        } else {
            alert("Signup Failed");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\app\\signup\\page.tsx:38:0",
        "data-orchids-name": "div",
        className: "min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src\\app\\signup\\page.tsx:40:0",
            "data-orchids-name": "div",
            className: "grid md:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\app\\signup\\page.tsx:42:0",
                    "data-orchids-name": "div",
                    className: "hidden md:block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        "data-orchids-id": "src\\app\\signup\\page.tsx:43:0",
                        "data-orchids-name": "img",
                        src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
                        className: "h-full w-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/MediVerse/src/app/signup/page.tsx",
                        lineNumber: 43,
                        columnNumber: 1
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/MediVerse/src/app/signup/page.tsx",
                    lineNumber: 42,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    "data-orchids-id": "src\\app\\signup\\page.tsx:49:0@handleSubmit",
                    "data-orchids-name": "form",
                    onSubmit: handleSubmit,
                    className: "p-10 flex flex-col justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            "data-orchids-id": "src\\app\\signup\\page.tsx:51:0",
                            "data-orchids-name": "h1",
                            className: "text-3xl font-bold mb-2 text-primary",
                            children: "Create Account"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/MediVerse/src/app/signup/page.tsx",
                            lineNumber: 51,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src\\app\\signup\\page.tsx:55:0",
                            "data-orchids-name": "p",
                            className: "text-gray-500 mb-6",
                            children: "Join MediVerse smart healthcare platform"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/MediVerse/src/app/signup/page.tsx",
                            lineNumber: 55,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            "data-orchids-id": "src\\app\\signup\\page.tsx:59:0",
                            "data-orchids-name": "input",
                            required: true,
                            placeholder: "Full Name",
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            className: "border p-3 mb-4 rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/MediVerse/src/app/signup/page.tsx",
                            lineNumber: 59,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            "data-orchids-id": "src\\app\\signup\\page.tsx:67:0",
                            "data-orchids-name": "input",
                            type: "email",
                            required: true,
                            placeholder: "Email",
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            className: "border p-3 mb-4 rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/MediVerse/src/app/signup/page.tsx",
                            lineNumber: 67,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            "data-orchids-id": "src\\app\\signup\\page.tsx:76:0",
                            "data-orchids-name": "input",
                            type: "password",
                            required: true,
                            placeholder: "Password",
                            value: password,
                            onChange: (e)=>setPassword(e.target.value),
                            className: "border p-3 mb-4 rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/MediVerse/src/app/signup/page.tsx",
                            lineNumber: 76,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-orchids-id": "src\\app\\signup\\page.tsx:85:0",
                            "data-orchids-name": "button",
                            className: "bg-primary text-white p-3 rounded-lg hover:opacity-90 transition",
                            children: [
                                loading ? "Creating Account..." : "Signup",
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/MediVerse/src/app/signup/page.tsx",
                            lineNumber: 85,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src\\app\\signup\\page.tsx:92:0",
                            "data-orchids-name": "p",
                            className: "text-sm text-center mt-6",
                            children: [
                                "Already have an account?",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    "data-orchids-id": "src\\app\\signup\\page.tsx:94:0",
                                    "data-orchids-name": "Link",
                                    href: "/login",
                                    className: "text-primary font-semibold",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/MediVerse/src/app/signup/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/MediVerse/src/app/signup/page.tsx",
                            lineNumber: 92,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/MediVerse/src/app/signup/page.tsx",
                    lineNumber: 49,
                    columnNumber: 1
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/MediVerse/src/app/signup/page.tsx",
            lineNumber: 40,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/MediVerse/src/app/signup/page.tsx",
        lineNumber: 38,
        columnNumber: 1
    }, this);
}
_s(Signup, "5GipUFr4acsVgCsLfxJCVgIZlVY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Signup;
var _c;
__turbopack_context__.k.register(_c, "Signup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/MediVerse/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/MediVerse/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_MediVerse_724d636a._.js.map