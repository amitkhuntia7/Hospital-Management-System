"use client";

import { useState } from "react";
import {
Brain,
Heart,
MessageSquare,
Phone,
Calendar,
BookOpen,
Users,
Smile,
Frown,
Meh,
AlertTriangle,
CheckCircle,
ArrowRight
} from "lucide-react";

const therapists = [
{
name:"Dr. Pragnya Paramita Nayak",
specialty:"Clinical Psychologist",
focus:"Anxiety & Depression",
exp:"12 years",
rating:4.9,
available:true,
fee:800,
image:"/doctors/Dr.Pragnya.jpg"
},
{
name:"Dr. Amit Khuntia",
specialty:"Psychiatrist",
focus:"PTSD & Trauma",
exp:"15 years",
rating:4.8,
available:true,
fee:1200,
image:"/doctors/Dr. Amit.jpg"
},
{
name:"Dr. Aditya Nayak",
specialty:"Counselor",
focus:"Relationship Therapy",
exp:"8 years",
rating:4.7,
available:false,
fee:600,
image:"/doctors/Dr. Aditya.jpg"
},
{
name:"Dr. Nirmala Behera",
specialty:"Behavioral Therapist",
focus:"Addiction Recovery",
exp:"10 years",
rating:4.8,
available:true,
fee:900,
image:"/doctors/Dr. Nirmala.jpg"
}
];

const resources = [
{
title:"Managing Anxiety",
desc:"Learn techniques to manage daily anxiety",
category:"Self Help",
readTime:"5 min"
},
{
title:"Mindfulness Meditation",
desc:"Guided meditation exercises",
category:"Meditation",
readTime:"10 min"
},
{
title:"Sleep Hygiene Guide",
desc:"Improve sleep quality",
category:"Sleep",
readTime:"7 min"
},
{
title:"Stress Management",
desc:"Workplace stress strategies",
category:"Wellness",
readTime:"6 min"
}
];

const moods = [
{icon:Smile,label:"Great",color:"bg-green-100 text-green-600"},
{icon:Smile,label:"Good",color:"bg-blue-100 text-blue-600"},
{icon:Meh,label:"Okay",color:"bg-yellow-100 text-yellow-600"},
{icon:Frown,label:"Low",color:"bg-orange-100 text-orange-600"},
{icon:Frown,label:"Bad",color:"bg-red-100 text-red-600"}
];

export default function MentalHealthPage(){

const [selectedMood,setSelectedMood] = useState<string | null>(null);
const [moodLogged,setMoodLogged] = useState(false);
const [sessionBooked,setSessionBooked] = useState(false);

const handleMoodLog=(mood:string)=>{
setSelectedMood(mood);
setMoodLogged(true);

setTimeout(()=>{
setMoodLogged(false);
},3000);
};

const bookSession=()=>{
setSessionBooked(true);

setTimeout(()=>{
setSessionBooked(false);
},3000);
};

return(

<div
className="min-h-screen bg-cover bg-center"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1493836512294-502baa1986e2')"
}}
>

<div className="bg-white/90 backdrop-blur-sm min-h-screen">

{/* HERO HEADER */}

<section
className="h-[320px] bg-cover bg-center flex items-center justify-center text-white text-center"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1506126613408-eca07ce68773')"
}}
>

<div className="bg-black/60 p-8 rounded-xl">

<h1 className="text-4xl font-bold mb-2">
Mental Health Support
</h1>

<p className="text-sm">
Access therapy, wellness tools and emotional support
</p>

</div>

</section>

{/* CRISIS BANNER */}

<section className="py-4 bg-red-50 border-b">

<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">

<div className="flex items-center gap-2">

<AlertTriangle className="text-red-500"/>

<p className="text-sm text-red-800">
If you are in crisis please seek help immediately
</p>

</div>

<a
href="tel:988"
className="bg-red-500 text-white px-4 py-2 rounded-full text-sm"

>

Crisis Helpline 988

</a>

</div>

</section>

<section className="py-10">

<div className="max-w-7xl mx-auto px-4">

{/* MOOD TRACKER */}

<div className="bg-white rounded-xl shadow p-6 mb-10">

<h2 className="text-lg font-semibold mb-2">
How are you feeling today?
</h2>

{moodLogged ? (

<div className="flex items-center gap-2 text-green-600">

<CheckCircle/>

Mood Logged Successfully

</div>

) : (

<div className="flex flex-wrap gap-3">

{moods.map((m)=>(
<button
key={m.label}
onClick={()=>handleMoodLog(m.label)}
className={`flex items-center gap-2 px-4 py-2 rounded-xl ${m.color}`}

>

<m.icon/>

{m.label}

</button>
))}

</div>

)}

</div>

{/* SERVICES */}

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

{[
{icon:MessageSquare,label:"Chat Therapy"},
{icon:Phone,label:"Talk Therapy"},
{icon:Users,label:"Group Support"},
{icon:BookOpen,label:"Self Help Tools"}
].map((s)=>(

<div key={s.label} className="bg-white rounded-xl p-6 shadow">

<s.icon className="text-purple-600 mb-2"/>

<h3 className="font-semibold">
{s.label}
</h3>

</div>
))}

</div>

{/* THERAPISTS */}

<h2 className="text-2xl font-bold mb-6">
Our Therapists
</h2>

<div className="grid md:grid-cols-2 gap-6 mb-10">

{therapists.map((t)=>(

<div key={t.name} className="bg-white rounded-xl shadow p-6">

<div className="flex gap-4">

<img
src={t.image}
className="w-14 h-14 rounded-full object-cover"
/>

<div className="flex-1">

<h3 className="font-semibold">
{t.name}
</h3>

<p className="text-sm text-blue-600">
{t.specialty}
</p>

<p className="text-xs text-gray-500">
{t.focus} • {t.exp}
</p>

<div className="flex justify-between items-center mt-3">

<span className="font-bold">
₹{t.fee}/session
</span>

<button
onClick={bookSession}
className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded"

>

<Calendar size={14}/> Book

</button>

</div>

</div>

</div>

</div>
))}

</div>

{sessionBooked && (

<div className="bg-green-100 border border-green-300 p-4 rounded mb-6 text-green-700">

Session booked successfully

</div>

)}

{/* RESOURCES */}

<h2 className="text-2xl font-bold mb-6">
Wellness Resources
</h2>

<div className="grid sm:grid-cols-2 gap-4">

{resources.map((r)=>(

<div
key={r.title}
className="bg-white rounded-xl p-5 shadow hover:shadow-md"
>

<div className="flex gap-2 mb-2">

<span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
{r.category}
</span>

<span className="text-xs text-gray-500">
{r.readTime}
</span>

</div>

<h3 className="font-semibold mb-1">
{r.title}
</h3>

<p className="text-sm text-gray-500">
{r.desc}
</p>

</div>
))}

</div>

</div>

</section>

</div>

</div>

);
}
