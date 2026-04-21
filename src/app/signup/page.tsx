"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Signup(){

const router = useRouter()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [loading,setLoading] = useState(false)

const handleSubmit = async(e:any)=>{
e.preventDefault()
setLoading(true)

const res = await fetch("/api/signup",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({name,email,password})
})

if(res.ok){
alert("Account Created Successfully")
router.push("/login")   // redirect to login page
}else{
alert("Signup Failed")
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
Create Account
</h1>

<p className="text-gray-500 mb-6">
Join MediVerse smart healthcare platform
</p>

<input
required
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="border p-3 mb-4 rounded-lg"
/>

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

{loading ? "Creating Account..." : "Signup"} </button>

<p className="text-sm text-center mt-6">
Already have an account?{" "}
<Link href="/login" className="text-primary font-semibold">
Login
</Link>
</p>

</form>

</div>

</div>

)

}
