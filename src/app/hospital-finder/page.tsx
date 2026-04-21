"use client";

import { useState } from "react";
import {
MapPin,
Search,
Star,
Phone,
Clock,
Navigation,
Stethoscope,
Bed,
Filter
} from "lucide-react";

const hospitals = [
{
id:1,
name:"City General Hospital",
type:"Multi-Specialty",
distance:"1.2 km",
rating:4.8,
reviews:3240,
beds:450,
emergency:true,
specialties:["Cardiology","Neurology","Orthopedics"],
address:"123 Medical Ave",
phone:"+18001112222",
waitTime:"15 min",
image:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
},
{
id:2,
name:"Apollo Healthcare Center",
type:"Super Specialty",
distance:"2.5 km",
rating:4.9,
reviews:5670,
beds:800,
emergency:true,
specialties:["Oncology","Transplant","Cardiology"],
address:"456 Health Blvd",
phone:"+18002223333",
waitTime:"20 min",
image:"https://images.unsplash.com/photo-1538108149393-fbbd81895907"
},
{
id:3,
name:"MedLife Clinic",
type:"Clinic",
distance:"0.8 km",
rating:4.6,
reviews:1230,
beds:50,
emergency:false,
specialties:["General","Dental","Dermatology"],
address:"789 Care Street",
phone:"+18003334444",
waitTime:"10 min",
image:"https://images.unsplash.com/photo-1579684385127-1ef15d508118"
},
{
id:4,
name:"Children's Specialty Hospital",
type:"Pediatric",
distance:"3.1 km",
rating:4.9,
reviews:2890,
beds:200,
emergency:true,
specialties:["Pediatrics","Neonatal","Surgery"],
address:"321 Kids Lane",
phone:"+18004445555",
waitTime:"25 min",
image:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
}
];

const filterTypes = [
"All",
"Multi-Specialty",
"Super Specialty",
"Clinic",
"Pediatric"
];

export default function HospitalFinderPage(){

const [searchQuery,setSearchQuery] = useState("");
const [filterType,setFilterType] = useState("All");
const [emergencyOnly,setEmergencyOnly] = useState(false);

const filtered = hospitals.filter((h)=>{

const matchesSearch =
h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
h.specialties.some((s)=>
s.toLowerCase().includes(searchQuery.toLowerCase())
);

const matchesType =
filterType==="All" || h.type===filterType;

const matchesEmergency =
!emergencyOnly || h.emergency;

return matchesSearch && matchesType && matchesEmergency;

});

return(

<div
className="min-h-screen bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3')"
}}
>

<div className="bg-white/90 backdrop-blur-sm min-h-screen">

{/* HERO HEADER */}

<section
className="h-[300px] bg-cover bg-center flex items-center justify-center text-white text-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1538108149393-fbbd81895907')"
}}
>

<div className="bg-black/60 p-8 rounded-xl">

<h1 className="text-4xl font-bold mb-2">
Hospital Finder
</h1>

<p className="text-sm">
Find nearby hospitals and get instant directions
</p>

</div>

</section>

<section className="py-10">

<div className="max-w-7xl mx-auto px-4">

{/* SEARCH */}

<div className="flex flex-col sm:flex-row gap-4 mb-6">

<div className="relative flex-1">

<Search className="absolute left-3 top-3 text-gray-400"/>

<input
type="text"
placeholder="Search hospitals or specialties..."
className="w-full pl-10 py-2 border rounded-xl"
value={searchQuery}
onChange={(e)=>setSearchQuery(e.target.value)}
/>

</div>

<button
onClick={()=>setEmergencyOnly(!emergencyOnly)}
className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
emergencyOnly
?"bg-red-500 text-white"
:"bg-gray-200"
}`}

>

<Filter size={16}/>

Emergency Only

</button>

</div>

{/* FILTER TYPES */}

<div className="flex flex-wrap gap-2 mb-8">

{filterTypes.map((t)=>(
<button
key={t}
onClick={()=>setFilterType(t)}
className={`px-4 py-2 rounded-full ${
filterType===t
?"bg-blue-600 text-white"
:"bg-gray-200"
}`}

>

{t} </button>
))}

</div>

{/* HOSPITAL LIST */}

<div className="space-y-6">

{filtered.map((h)=>(

<div
key={h.id}
className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
>

<div className="grid md:grid-cols-3">

<img
src={h.image}
className="h-48 w-full object-cover"
/>

<div className="p-6 md:col-span-2">

<div className="flex justify-between items-start mb-2">

<h3 className="text-lg font-bold">
{h.name}
</h3>

{h.emergency && (

<span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
Emergency
</span>

)}

</div>

<div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">

<span className="flex items-center gap-1">
<Stethoscope size={14}/> {h.type}
</span>

<span className="flex items-center gap-1">
<Navigation size={14}/> {h.distance}
</span>

<span className="flex items-center gap-1">
<Bed size={14}/> {h.beds} beds
</span>

<span className="flex items-center gap-1">
<Clock size={14}/> Wait {h.waitTime}
</span>

</div>

<div className="flex flex-wrap gap-2 mb-3">

{h.specialties.map((s)=>(
<span
key={s}
className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"

>

{s} </span>
))}

</div>

<div className="flex items-center gap-2 mb-4">

<Star className="text-yellow-400 fill-yellow-400" size={16}/>

<span className="font-semibold">
{h.rating}
</span>

<span className="text-gray-500 text-sm">
({h.reviews})
</span>

</div>

<p className="text-sm text-gray-500 mb-4 flex items-center gap-1">

<MapPin size={14}/> {h.address}

</p>

<div className="flex gap-3">

<a
href={`tel:${h.phone}`}
className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded"

>

<Phone size={16}/> Call

</a>

<a
href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.name)}`}
target="_blank"
className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded"

>

<Navigation size={16}/> Directions

</a>

</div>

</div>

</div>

</div>

))}

</div>

{filtered.length===0 && (

<div className="text-center py-16 text-gray-500">
No hospitals found
</div>

)}

</div>

</section>

</div>

</div>

);
}
