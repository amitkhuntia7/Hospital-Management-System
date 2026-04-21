"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Login(){

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [loading,setLoading] = useState(false)

const handleSubmit = async(e:any)=>{
e.preventDefault()
setLoading(true)

const res = await fetch("/api/login",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({email,password})
})

const data = await res.json()

if(res.ok){
alert("Login Successful")
router.push("/")   // redirect to homepage
}else{
alert(data.error || "Login Failed")
}

setLoading(false)
}

return(
<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">

<div className="grid md:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl">

<div className="hidden md:block">
<img
src="https://images.unsplash.com/photo-1582750433449-648ed127bb54"
className="h-full w-full object-cover"
/>
</div>

<form onSubmit={handleSubmit} className="p-10 flex flex-col justify-center">

<h1 className="text-3xl font-bold mb-2 text-primary">
Welcome Back
</h1>

<p className="text-gray-500 mb-6">
Login to access MediVerse healthcare services
</p>

<input
type="email"
required
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="border p-3 mb-4 rounded-lg"
/>

<input
type="password"
required
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="border p-3 mb-4 rounded-lg"
/>

<button
className="bg-primary text-white p-3 rounded-lg hover:opacity-90 transition"

>

{loading ? "Logging in..." : "Login"} </button>

<p className="text-sm text-center mt-6">
Don't have an account?{" "}
<Link href="/signup" className="text-primary font-semibold">
Signup
</Link>
</p>

</form>

</div>

</div>

)

}
