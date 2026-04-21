"use client";

import { useState } from "react";
import {
Ambulance,
MapPin,
Phone,
Clock,
CheckCircle,
Navigation,
Users,
Siren
} from "lucide-react";

export default function EmergencyAmbulancePage() {

const [stage,setStage] = useState<"initial" | "booking" | "tracking" | "arrived">("initial");
const [emergencyType,setEmergencyType] = useState("");

const emergencyTypes = [
{label:"Cardiac Emergency",desc:"Heart attack, chest pain",color:"border-red-300 bg-red-50"},
{label:"Accident / Trauma",desc:"Road accident or injury",color:"border-orange-300 bg-orange-50"},
{label:"Breathing Difficulty",desc:"Asthma attack",color:"border-blue-300 bg-blue-50"},
{label:"Stroke Symptoms",desc:"Numbness, confusion",color:"border-purple-300 bg-purple-50"},
{label:"Pregnancy Emergency",desc:"Labor complications",color:"border-pink-300 bg-pink-50"},
{label:"Other Emergency",desc:"Any medical emergency",color:"border-gray-300 bg-gray-50"},
];

const handleBook = ()=>{
setStage("booking");

setTimeout(()=>{
setStage("tracking");
},2000);

setTimeout(()=>{
setStage("arrived");
},8000);
};

return(

<div className="min-h-screen bg-gray-50">

{/* HERO HEADER */}

<section
className="h-[320px] bg-cover bg-center flex items-center justify-center text-center text-white"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1587745416684-47953f16f02f')"
}}
>

<div className="bg-black/60 p-10 rounded-xl">

<Ambulance className="h-12 w-12 mx-auto mb-3 text-red-400"/>

<h1 className="text-4xl font-bold mb-2">
Emergency Ambulance
</h1>

<p className="text-sm">
One-tap ambulance booking with real-time GPS tracking
</p>

</div>

</section>

{/* FEATURES */}

<section className="py-8 border-b bg-red-50">

<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

{[
{icon:Clock,label:"< 8 min",desc:"Avg response"},
{icon:Navigation,label:"GPS Tracking",desc:"Live location"},
{icon:Users,label:"Trained EMTs",desc:"Certified"},
{icon:Siren,label:"24/7 Service",desc:"Always ready"}
].map((f)=>(

<div key={f.label}>

<f.icon className="mx-auto text-red-500 mb-2"/>

<p className="font-semibold text-sm">{f.label}</p>

<p className="text-xs text-gray-500">{f.desc}</p>

</div>
))}

</div>

</section>

<section className="py-10">

<div className="max-w-3xl mx-auto px-4">

{/* INITIAL */}

{stage==="initial" && (

<div>

{/* SOS IMAGE */}

<img
src="https://images.unsplash.com/photo-1603398938378-e54eab446dde"
className="mx-auto mb-6 h-32 rounded-xl object-cover"
/>

{/* SOS BUTTON */}

<div className="text-center mb-10">

<button
onClick={handleBook}
className="w-40 h-40 rounded-full bg-red-500 text-white shadow-xl hover:bg-red-600 flex flex-col items-center justify-center mx-auto"

>

<Ambulance className="h-12 w-12 mb-2"/>

<span className="text-xl font-bold">
SOS
</span>

<span className="text-xs">
Tap for Help
</span>

</button>

<p className="text-sm text-gray-500 mt-4">
Press SOS for immediate ambulance dispatch
</p>

</div>

{/* EMERGENCY TYPES */}

<h3 className="font-semibold mb-4">
Select Emergency Type
</h3>

<div className="grid sm:grid-cols-2 gap-3 mb-8">

{emergencyTypes.map((e)=>(
<button
key={e.label}
onClick={()=>setEmergencyType(e.label)}
className={`p-4 rounded-xl border-2 text-left ${
emergencyType===e.label
?`ring-2 ring-red-500 ${e.color}`
:"border-gray-200"
}`}

>

<p className="font-semibold text-sm">
{e.label}
</p>

<p className="text-xs text-gray-500">
{e.desc}
</p>

</button>
))}

</div>

{/* CONTACTS */}

<div className="bg-white rounded-xl p-6 shadow">

<h3 className="font-semibold mb-4">
Emergency Contacts
</h3>

{[
{label:"National Emergency",number:"112"},
{label:"Ambulance",number:"108"},
{label:"MediVerse Helpline",number:"1800110001"},
].map((c)=>(

<div
key={c.number}
className="flex justify-between items-center p-3 bg-gray-50 rounded mb-2"
>

<p>{c.label}</p>

<a
href={`tel:${c.number}`}
className="bg-red-500 text-white px-4 py-1 rounded"

>

{c.number} </a>

</div>
))}

</div>

</div>

)}

{/* BOOKING */}

{stage==="booking" && (

<div className="text-center py-16">

<div className="animate-pulse">

<Ambulance className="h-16 w-16 mx-auto text-red-500 mb-4"/>

<h2 className="text-xl font-bold">
Finding Nearest Ambulance...
</h2>

<p className="text-gray-500">
Dispatching unit
</p>

</div>

</div>

)}

{/* TRACKING */}

{stage==="tracking" && (

<div>

<div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-6">

<div className="flex items-center gap-3 mb-4">

<CheckCircle className="text-green-500"/>

<div>

<h3 className="font-bold text-green-800">
Ambulance Dispatched
</h3>

<p className="text-sm text-green-600">
Unit #AMB-2847
</p>

</div>

</div>

<div className="grid grid-cols-3 gap-4 mb-4 text-center">

<div>
<p className="text-xl font-bold">6</p>
<p className="text-xs">Minutes</p>
</div>

<div>
<p className="text-xl font-bold">2.4</p>
<p className="text-xs">km</p>
</div>

<div>
<p className="text-xl font-bold">ALS</p>
<p className="text-xs">Unit</p>
</div>

</div>

{/* AMBULANCE IMAGE */}

<img
src="https://images.unsplash.com/photo-1587745416684-47953f16f02f"
className="rounded-xl"
/>

</div>

{/* PARAMEDIC */}

<div className="bg-white p-6 rounded-xl shadow">

<h3 className="font-semibold mb-3">
Paramedic Team
</h3>

<div className="flex items-center gap-4">

<img
src="https://randomuser.me/api/portraits/men/45.jpg"
className="w-12 h-12 rounded-full"
/>

<div className="flex-1">

<p className="font-medium">
EMT John Parker
</p>

<p className="text-sm text-gray-500">
Advanced Life Support
</p>

</div>

<a
href="tel:108"
className="bg-green-500 text-white p-2 rounded-full"

>

<Phone className="h-5 w-5"/>

</a>

</div>

</div>

</div>

)}

{/* ARRIVED */}

{stage==="arrived" && (

<div className="text-center py-16">

<CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4"/>

<h2 className="text-2xl font-bold mb-2">
Ambulance Arrived
</h2>

<p className="text-gray-500 mb-6">
Paramedics are at your location
</p>

<button
onClick={()=>setStage("initial")}
className="px-6 py-2 bg-blue-600 text-white rounded"

>

Back Home

</button>

</div>

)}

</div>

</section>

</div>

);
}
