"use client";

import { useState, useEffect } from "react";
import {
Phone,
Clock,
Globe,
MessageSquare,
Video,
Mail,
Headphones,
CheckCircle,
ArrowRight,
Users
} from "lucide-react";

export default function CallCenterPage(){

const [expandedFaq,setExpandedFaq] = useState<number | null>(null);
const [callStatus,setCallStatus] = useState<"idle"|"connecting"|"connected">("idle");
const [seconds,setSeconds] = useState(0);

useEffect(()=>{

let timer:NodeJS.Timeout;

if(callStatus==="connected"){
timer=setInterval(()=>{
setSeconds(prev=>prev+1);
},1000);
}

return ()=>clearInterval(timer);

},[callStatus]);

const handleCall=()=>{
setCallStatus("connecting");

setTimeout(()=>{
setCallStatus("connected");
setSeconds(0);
},2000);
};

const endCall=()=>{
setCallStatus("idle");
setSeconds(0);
};

const formatTime=(s:number)=>{
const m=Math.floor(s/60);
const sec=s%60;
return `${m}:${sec<10?"0":""}${sec}`;
};

const supportOptions=[
{
icon:Phone,
label:"Voice Call",
desc:"Speak directly with healthcare support",
waitTime:"~2 min",
action:()=>window.open("tel:1800110001")
},
{
icon:Video,
label:"Video Call",
desc:"Face-to-face support via video",
waitTime:"~5 min",
action:()=>alert("Starting video support...")
},
{
icon:MessageSquare,
label:"Live Chat",
desc:"Instant text-based support",
waitTime:"~1 min",
action:()=>alert("Opening live chat...")
},
{
icon:Mail,
label:"Email Support",
desc:"Detailed response within 24h",
waitTime:"<24h",
action:()=>window.location.href="mailto:support@mediverse.com"
}
];

const faqs=[
{
q:"How do I book a video consultation?",
a:"Go to the Video Consultation page, choose a doctor, and click Video Call."
},
{
q:"How quickly can I get an ambulance?",
a:"Our ambulance response time is under 8 minutes using the SOS feature."
},
{
q:"Are my health records secure?",
a:"Yes, all records are encrypted and securely stored."
},
{
q:"How does medicine delivery work?",
a:"Search medicines, add to cart, upload prescription if required, and checkout."
}
];

return(

<div className="min-h-screen bg-gray-50">

{/* HEADER WITH IMAGE */}

<section
className="relative h-[300px] flex items-center justify-center text-center text-white"
style={{
backgroundImage:
"url('https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=1600')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10">

<Phone size={40} className="mx-auto mb-4"/>

<h1 className="text-4xl font-bold">
24/7 Call Center
</h1>

<p className="text-sm mt-2">
Our healthcare support team is available round the clock
</p>

</div>

</section>

{/* FEATURES */}

<section className="py-10">

<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">

{[
{icon:Clock,label:"24/7 Available",desc:"Always here for you"},
{icon:Globe,label:"10+ Languages",desc:"Multilingual support"},
{icon:Headphones,label:"Expert Team",desc:"Trained professionals"},
{icon:Users,label:"5000+ Calls/Day",desc:"Trusted by millions"}
].map((f)=>(

<div key={f.label} className="bg-white p-6 rounded-xl shadow text-center">

<f.icon className="mx-auto mb-2 text-primary"/>

<p className="font-semibold text-sm">
{f.label}
</p>

<p className="text-xs text-gray-500">
{f.desc}
</p>

</div>
))}

</div>

</section>

{/* CALL SECTION */}

<section className="py-10">

<div className="max-w-4xl mx-auto px-4">

<div className="bg-white rounded-xl shadow p-8 text-center mb-10">

{callStatus==="idle" && (

<>

<Phone size={40} className="mx-auto mb-4 text-primary"/>

<h2 className="text-xl font-bold mb-3">
Need Help? Call Us
</h2>

<button
onClick={handleCall}
className="bg-primary text-white px-8 py-3 rounded-full"

>

Call 1800-1100-01

</button>

</>

)}

{callStatus==="connecting" && (

<>

<Phone size={40} className="mx-auto mb-4 animate-pulse text-primary"/>

<p>Connecting to support agent...</p>

</>

)}

{callStatus==="connected" && (

<>

<CheckCircle size={40} className="mx-auto mb-4 text-green-500"/>

<p className="font-semibold mb-2">
Connected with Agent Sarah
</p>

<p className="text-sm text-gray-500 mb-4">
Call Time: {formatTime(seconds)}
</p>

<button
onClick={endCall}
className="bg-red-500 text-white px-6 py-2 rounded"

>

End Call

</button>

</>

)}

</div>

{/* SUPPORT OPTIONS */}

<h2 className="text-xl font-bold mb-4">
Other Support Options
</h2>

<div className="grid sm:grid-cols-2 gap-4 mb-10">

{supportOptions.map((s)=>(

<div key={s.label} className="bg-white rounded-xl shadow p-5">

<div className="flex items-center gap-3 mb-3">

<s.icon className="text-primary"/>

<div>

<h3 className="font-semibold text-sm">
{s.label}
</h3>

<p className="text-xs text-gray-500">
{s.desc}
</p>

</div>

</div>

<div className="flex justify-between items-center">

<span className="text-xs text-gray-500">
Wait: {s.waitTime}
</span>

<button
onClick={s.action}
className="text-primary flex items-center gap-1 text-sm"

>

Start <ArrowRight size={16}/>

</button>

</div>

</div>
))}

</div>

{/* FAQ */}

<h2 className="text-xl font-bold mb-4">
Frequently Asked Questions
</h2>

<div className="space-y-3">

{faqs.map((faq,i)=>(

<div key={i} className="bg-white rounded-xl shadow">

<button
onClick={()=>setExpandedFaq(expandedFaq===i?null:i)}
className="w-full p-4 flex justify-between text-left"

>

<span className="text-sm font-medium">
{faq.q}
</span>

<span>
{expandedFaq===i?"▲":"▼"}
</span>

</button>

{expandedFaq===i && (

<p className="px-4 pb-4 text-sm text-gray-600">
{faq.a}
</p>
)}

</div>
))}

</div>

</div>

</section>

</div>

);
}
