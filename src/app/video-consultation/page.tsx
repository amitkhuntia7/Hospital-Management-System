"use client";

import { useState } from "react";
import {
Video,
Star,
Clock,
Shield,
Search,
Calendar,
MessageSquare,
CheckCircle
} from "lucide-react";

const specialties = [
"General Physician",
"Cardiologist",
"Dermatologist",
"Pediatrician",
"Orthopedic",
"Gynecologist",
"Neurologist",
"Psychiatrist",
"ENT Specialist",
"Ophthalmologist",
"Dentist",
"Urologist",
];

const doctors = [
{
name: "Dr. Pragnya Paramita Nayak",
specialty: "Neurologist",
exp: "15 years",
rating: 4.8,
reviews: 1280,
fee: 850,
image: "/doctors/Dr.Pragnya.jpg",
available: true,
nextSlot: "Today, 2:30 PM",
},
{
name: "Dr. Amit Khuntia",
specialty: "Cardiologist",
exp: "17 years",
rating: 4.9,
reviews: 2100,
fee: 900,
image: "/doctors/Dr. Amit.jpg",
available: true,
nextSlot: "Today, 3:00 PM",
},
{
name: "Dr. Aditya Kumar Nayak",
specialty: "Dermatologist",
exp: "10 years",
rating: 4.9,
reviews: 890,
fee: 700,
image: "/doctors/Dr. Aditya.jpg",
available: true,
nextSlot: "Today, 4:15 PM",
},
{
name: "Dr. Nirmala Behera",
specialty: "Pediatrician",
exp: "18 years",
rating: 4.7,
reviews: 1560,
fee: 800,
image: "/doctors/Dr. Nirmala.jpg",
available: false,
nextSlot: "Tomorrow, 10:00 AM",
},
{
name: "Dr. Subhajeet Khadanga",
specialty: "Dermatologist",
exp: "18 years",
rating: 4.7,
reviews: 1060,
fee: 600,
image: "/doctors/Dr. Subhrajeet.jpg",
available: false,
nextSlot: "Tomorrow, 10:00 AM",
},
];

export default function VideoConsultationPage() {

const [selectedSpecialty,setSelectedSpecialty] = useState("All");
const [searchQuery,setSearchQuery] = useState("");
const [showBooking,setShowBooking] = useState<string | null>(null);

const filtered = doctors.filter((d)=>{
const matchesSpecialty =
selectedSpecialty==="All" || d.specialty===selectedSpecialty;

const matchesSearch =
d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
d.specialty.toLowerCase().includes(searchQuery.toLowerCase());

return matchesSpecialty && matchesSearch;
});

return (

<div
className="min-h-screen bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1579684385127-1ef15d508118')"
}}
>

<div className="bg-white/90 backdrop-blur-sm min-h-screen">

<section
className="h-[320px] flex items-center justify-center text-center text-white bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1584982751601-97dcc096659c')"
}}
>

<div className="bg-black/50 p-8 rounded-xl max-w-xl">

<h1 className="text-3xl font-bold mb-3">
Video Consultation
</h1>

<p className="text-sm">
Connect with verified doctors from the comfort of your home and get
medical advice via secure HD video calls.
</p>

</div>

</section>

{/* FEATURES */}

<section className="py-12 border-b">

<div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">

{[
{icon:Clock,label:"Instant Connect",desc:"Wait time < 3 min"},
{icon:Shield,label:"100% Private",desc:"Encrypted calls"},
{icon:Star,label:"Top Doctors",desc:"4.8+ avg rating"},
{icon:MessageSquare,label:"Chat + Video",desc:"Multiple modes"},
].map((f)=>(

<div key={f.label} className="text-center p-4">

<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
<f.icon className="h-6 w-6 text-primary"/>
</div>

<p className="font-semibold text-sm">{f.label}</p>
<p className="text-xs text-gray-500">{f.desc}</p>

</div>
))}

</div>

</section>

{/* SEARCH */}

<section className="py-10">

<div className="max-w-7xl mx-auto px-4">

<div className="relative mb-6">

<Search className="absolute left-3 top-3 h-5 w-5 text-gray-400"/>

<input
type="text"
placeholder="Search doctors..."
className="w-full pl-10 pr-4 py-3 rounded-xl border"
value={searchQuery}
onChange={(e)=>setSearchQuery(e.target.value)}
/>

</div>

{/* SPECIALTIES */}

<div className="flex flex-wrap gap-2 mb-8">

<button
onClick={()=>setSelectedSpecialty("All")}
className={`px-4 py-2 rounded-full text-sm ${
selectedSpecialty==="All"
?"bg-primary text-white"
:"bg-gray-200"
}`}

>

All </button>

{specialties.map((s)=>(
<button
key={s}
onClick={()=>setSelectedSpecialty(s)}
className={`px-4 py-2 rounded-full text-sm ${
selectedSpecialty===s
?"bg-primary text-white"
:"bg-gray-200"
}`}

>

{s} </button>
))}

</div>

{/* DOCTORS */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{filtered.map((doc)=>(

<div
key={doc.name}
className="bg-white rounded-2xl shadow-lg p-6"
>

<div className="flex items-center gap-4 mb-4">

<img
src={doc.image}
className="w-14 h-14 rounded-full object-cover"
/>

<div>
<h3 className="font-semibold">{doc.name}</h3>
<p className="text-primary text-sm">{doc.specialty}</p>
<p className="text-xs text-gray-500">{doc.exp}</p>
</div>

</div>

<div className="flex items-center gap-2 mb-3">

<Star className="h-4 w-4 text-yellow-400 fill-yellow-400"/>

<span className="text-sm">{doc.rating}</span>

<span className="text-xs text-gray-500">
({doc.reviews})
</span>

</div>

<div className="flex justify-between mb-4">

<div>
<p className="text-xs text-gray-500">
Consultation Fee
</p>

<p className="font-bold text-lg">
₹{doc.fee}
</p>

</div>

<div className="text-right">

<p className="text-xs text-gray-500">
Next Available
</p>

<p className="text-sm text-primary">
{doc.nextSlot}
</p>

</div>

</div>

{showBooking===doc.name ? (

<div className="bg-green-50 border border-green-200 p-3 rounded-xl text-green-700 text-sm">

<div className="flex items-center gap-2">

<CheckCircle className="h-5 w-5"/>

Booking Confirmed!

</div>

</div>

):(

<div className="grid grid-cols-2 gap-3">

<button
onClick={()=>setShowBooking(doc.name)}
className="flex items-center justify-center gap-2 py-2 bg-primary text-white rounded-xl text-sm"

>

<Video className="h-4 w-4"/>

Video Call

</button>

<button className="flex items-center justify-center gap-2 py-2 border rounded-xl text-sm">

<Calendar className="h-4 w-4"/>

Schedule

</button>

</div>

)}

</div>

))}

</div>

</div>

</section>

</div>

</div>

);
}