(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/MediVerse/src/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MediVerse/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\nconst res = await fetch("/api/login",{\n  method:"POST",\n  headers:{ "Content-Type":"application/json" },\n  body: JSON.stringify({ email, password })\n});\n\nconst data = await res.json();\n\nif(data.message){\n  alert("Login successful");\n} else {\n  alert(data.error);\n}\n'
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        ""
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n<div className="min-h-screen flex items-center justify-center bg-gray-100">\n\n  <div className="grid md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden max-w-5xl">\n\n    <div className="hidden md:block">\n      <img\n        src="https://images.unsplash.com/photo-1582750433449-648ed127bb54"\n        alt="Doctor"\n        className="h-full w-full object-cover"\n      />\n    </div>\n\n    <div className="p-10 flex flex-col justify-center">\n\n      <h2 className="text-3xl font-bold mb-2 text-primary">\n        Welcome Back\n      </h2>\n\n      <p className="text-gray-500 mb-6">\n        Login to access MediVerse healthcare services\n      </p>\n\n      <form onSubmit={handleLogin} className="space-y-4">\n\n        <input\n          type="email"\n          placeholder="Email"\n          required\n          className="w-full border p-3 rounded-lg"\n          onChange={(e)=>setEmail(e.target.value)}\n        />\n\n        <input\n          type="password"\n          placeholder="Password"\n          required\n          className="w-full border p-3 rounded-lg"\n          onChange={(e)=>setPassword(e.target.value)}\n        />\n\n        <button\n          className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90"\n        >\n          Login\n        </button>\n\n      </form>\n\n      <p className="text-sm mt-6 text-center">\n        Don\'t have an account?{" "}\n        <Link href="/signup" className="text-primary font-semibold">\n          Signup\n        </Link>\n      </p>\n\n    </div>\n\n  </div>\n\n</div>\n'
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        ""
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
var _s = __turbopack_context__.k.signature();
"use client";
;
function LoginPage() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MediVerse$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleLogin = async (e)=>{
        e.preventDefault();
        ""(_templateObject())(_templateObject1());
    };
    return ""(_templateObject2())(_templateObject3());
}
_s(LoginPage, "Y7bHT9hHeaSkUMaY2QMcNWLqvG0=");
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/MediVerse/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_tagged_template_literal
]);
function _tagged_template_literal(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
;
}),
]);

//# sourceMappingURL=Desktop_MediVerse_a539c3cc._.js.map