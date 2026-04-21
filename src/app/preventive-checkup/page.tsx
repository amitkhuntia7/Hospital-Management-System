"use client";

import { useState } from "react";
import {
Shield,
CheckCircle,
Calendar,
Clock,
Heart,
Droplets,
Eye,
Stethoscope,
ArrowRight
} from "lucide-react";

const packages = [
{
id:1,
name:"Basic Health Checkup",
price:999,
originalPrice:1499,
tests:30,
duration:"2 hours",
popular:false,
description:"Essential screening for overall health",
includes:[
"Complete Blood Count",
"Blood Sugar",
"Lipid Profile",
"Liver Function",
"Kidney Function",
"Urine Analysis"
],
image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef"
},
{
id:2,
name:"Comprehensive Health Package",
price:2499,
originalPrice:3999,
tests:65,
duration:"3-4 hours",
popular:true,
description:"Complete body checkup with cardiac screening",
includes:[
"All Basic Tests",
"Thyroid Profile",
"Vitamin D & B12",
"HbA1c",
"Cardiac Risk Markers",
"Chest X-Ray",
"ECG"
],
image:"https://images.unsplash.com/photo-1581595219315-a187dd40c322"
},
{
id:3,
name:"Executive Health Screening",
price:4999,
originalPrice:7999,
tests:90,
duration:"4-5 hours",
popular:false,
description:"Premium full body diagnostics",
includes:[
"All Comprehensive Tests",
"MRI",
"Stress Test",
"Bone Density",
"Cancer Markers",
"Hormone Panel"
],
image:"https://images.unsplash.com/photo-1584515933487-779824d29309"
},
{
id:4,
name:"Senior Citizen Special",
price:3499,
originalPrice:5499,
tests:75,
duration:"4 hours",
popular:false,
description:"Special health package for age 60+",
includes:[
"Bone Density",
"Eye Checkup",
"Diabetes Panel",
"Arthritis Panel",
"Cardiac Screening"
],
image:"https://images.unsplash.com/photo-1584438784894-089d6a62b8fa"
}
];

const specialCheckups = [
{
name:"Cardiac Screening",
icon:Heart,
desc:"ECG, Echo, Stress Test",
price:1999
},
{
name:"Diabetes Screening",
icon:Droplets,
desc:"HbA1c, Sugar Test",
price:1299
},
{
name:"Eye Health Package",
icon:Eye,
desc:"Vision Test & Retina Scan",
price:1499
},
{
name:"Women's Wellness",
icon:Stethoscope,
desc:"Pap Smear & Mammogram",
price:2799
}
];

export default function PreventiveCheckupPage(){

const [booked,setBooked] = useState(false);

return(

<div
className="min-h-screen bg-cover bg-center"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1579684385127-1ef15d508118')"
}}
>

<div className="bg-white/90 backdrop-blur-sm min-h-screen">

{/* HERO HEADER */}

<section
className="h-[320px] bg-cover bg-center flex items-center justify-center text-white text-center"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1581595219315-a187dd40c322')"
}}
>

<div className="bg-black/60 p-8 rounded-xl">

<h1 className="text-4xl font-bold mb-2">
Preventive Health Checkup
</h1>

<p className="text-sm">
Regular screenings help detect diseases early
</p>

</div>

</section>

{/* FEATURES */}

<section className="py-10 border-b">

<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

{[
{icon:Shield,label:"Early Detection"},
{icon:Calendar,label:"Annual Plans"},
{icon:Clock,label:"Quick Results"},
{icon:CheckCircle,label:"Certified Labs"}
].map((f)=>(

<div key={f.label}>

<f.icon className="mx-auto text-blue-600 mb-2"/>

<p className="font-semibold text-sm">
{f.label}
</p>

</div>
))}

</div>

</section>

<section className="py-12">

<div className="max-w-7xl mx-auto px-4">

{booked && (

<div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center mb-8">

<CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-2"/>

<h3 className="text-xl font-bold">
Booking Successful
</h3>

<p className="text-green-600">
Appointment details sent via email
</p>

</div>

)}

<h2 className="text-2xl font-bold text-center mb-10">
Health Checkup Packages
</h2>

{/* PACKAGES */}

<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">

{packages.map((pkg)=>{

const discount =
Math.round((1 - pkg.price/pkg.originalPrice)*100);

return(

<div
key={pkg.id}
className={`bg-white rounded-xl shadow hover:shadow-lg overflow-hidden ${
pkg.popular ? "border-2 border-blue-600" : ""
}`}
>

<img
src={pkg.image}
className="h-40 w-full object-cover"
/>

<div className="p-6">

<h3 className="font-bold text-lg mb-1">
{pkg.name}
</h3>

<p className="text-sm text-gray-500 mb-3">
{pkg.description}
</p>

<div className="flex items-center gap-2 mb-1">

<span className="text-2xl font-bold">
₹{pkg.price}
</span>

<span className="line-through text-gray-400">
₹{pkg.originalPrice}
</span>

</div>

<p className="text-green-600 text-sm mb-3">
{discount}% off
</p>

<p className="text-xs text-gray-500 mb-3">
{pkg.tests} tests • {pkg.duration}
</p>

<ul className="text-sm space-y-1 mb-4">

{pkg.includes.map((i)=>(

<li key={i} className="flex gap-2">

<CheckCircle size={14} className="text-green-500"/>

{i}

</li>
))}

</ul>

<button
onClick={()=>setBooked(true)}
className="w-full py-2 bg-blue-600 text-white rounded"

>

Book Now

</button>

</div>

</div>

);

})}

</div>

{/* SPECIAL CHECKUPS */}

<h2 className="text-2xl font-bold text-center mb-8">
Specialized Screening
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

{specialCheckups.map((s)=>(

<div
key={s.name}
className="bg-white rounded-xl p-5 shadow hover:shadow-md"
>

<s.icon className="text-blue-600 mb-2"/>

<h3 className="font-semibold mb-1">
{s.name}
</h3>

<p className="text-sm text-gray-500 mb-3">
{s.desc}
</p>

<div className="flex justify-between items-center">

<span className="font-bold">
₹{s.price}
</span>

<button
onClick={()=>setBooked(true)}
className="flex items-center gap-1 text-blue-600 text-sm"

>

Book <ArrowRight size={14}/>

</button>

</div>

</div>
))}

</div>

</div>

</section>

</div>

</div>

);
}
