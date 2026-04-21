"use client";

import { useState } from "react";
import {
Umbrella,
CheckCircle,
FileText,
Calculator,
Shield,
ArrowRight,
Star,
HelpCircle
} from "lucide-react";

export default function InsuranceAssistancePage(){

const [selectedPlan,setSelectedPlan] = useState<number | null>(null);
const [claimStarted,setClaimStarted] = useState(false);

const insurancePlans=[
{
id:1,
name:"HealthGuard Basic",
provider:"National Insurance",
coverage:"₹5 Lakh",
premium:"₹999/month",
rating:4.5,
features:["Hospitalization","Day Care","Ambulance Cover"],
popular:false
},
{
id:2,
name:"MediShield Plus",
provider:"Star Health",
coverage:"₹10 Lakh",
premium:"₹1,999/month",
rating:4.8,
features:["Maternity","Mental Health","Dental","Pre-existing"],
popular:true
},
{
id:3,
name:"Family Floater",
provider:"HDFC ERGO",
coverage:"₹20 Lakh",
premium:"₹2,999/month",
rating:4.7,
features:["Family Cover","International","Annual Checkup"],
popular:false
}
];

const claimSteps=[
{
step:"01",
title:"Submit Claim",
desc:"Upload hospital bills and documents"
},
{
step:"02",
title:"Verification",
desc:"Documents verified within 24 hours"
},
{
step:"03",
title:"Processing",
desc:"Insurance company reviews claim"
},
{
step:"04",
title:"Settlement",
desc:"Money credited within 7 days"
}
];

return(

<div className="min-h-screen bg-gray-50">

{/* HERO HEADER */}

<section
className="relative h-[280px] flex items-center justify-center text-white text-center"
style={{
backgroundImage:
"url('https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1600')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10">

<Umbrella size={40} className="mx-auto mb-3"/>

<h1 className="text-4xl font-bold">
Insurance Assistance
</h1>

<p className="text-sm mt-2">
Compare plans, file claims, and get expert guidance
</p>

</div>

</section>

{/* FEATURES */}

<section className="py-10">

<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">

{[
{icon:Calculator,label:"Compare Plans",desc:"Side-by-side comparison"},
{icon:FileText,label:"Easy Claims",desc:"Paperless filing"},
{icon:Shield,label:"Cashless Hospitals",desc:"Network coverage"},
{icon:HelpCircle,label:"Expert Guidance",desc:"Free consultation"}
].map((f)=>(

<div key={f.label} className="bg-white p-6 rounded-xl shadow text-center">

<f.icon className="mx-auto text-primary mb-2"/>

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

{/* PLANS */}

<section className="py-10">

<h2 className="text-2xl font-bold text-center mb-10">
Recommended Health Plans
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

{insurancePlans.map(plan=>(

<div
key={plan.id}
className={`bg-white p-6 rounded-xl shadow relative ${
plan.popular?"border-2 border-primary":""
}`}
>

{plan.popular && (

<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 text-xs rounded-full">
BEST VALUE
</div>
)}

<h3 className="font-bold text-lg mb-1">
{plan.name}
</h3>

<p className="text-xs text-gray-500 mb-2">
{plan.provider}
</p>

<div className="flex items-center gap-1 mb-3">

<Star className="text-yellow-400 fill-yellow-400" size={16}/>

<span className="text-sm">{plan.rating}</span>

</div>

<p className="text-2xl font-bold">
{plan.coverage}
</p>

<p className="text-primary font-medium mb-4">
{plan.premium}
</p>

<ul className="space-y-2 mb-5">

{plan.features.map(f=>(

<li key={f} className="flex gap-2 text-sm">

<CheckCircle className="text-green-500" size={16}/>

{f}

</li>
))}

</ul>

<button
onClick={()=>setSelectedPlan(plan.id)}
className={`w-full py-2 rounded ${
selectedPlan===plan.id
?"bg-green-600 text-white"
:"border"
}`}

>

{selectedPlan===plan.id?"Selected":"Get Quote"}

</button>

</div>

))}

</div>

</section>

{/* CLAIM PROCESS */}

<section className="py-10 bg-white">

<h2 className="text-2xl font-bold text-center mb-10">
Claim Process
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-4">

{claimSteps.map(step=>(

<div key={step.step} className="text-center">

<div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">

{step.step}

</div>

<h3 className="font-semibold mb-2">
{step.title}
</h3>

<p className="text-sm text-gray-500">
{step.desc}
</p>

</div>

))}

</div>

</section>

{/* CLAIM CTA */}

<section className="py-12">

<div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-xl shadow">

{claimStarted ? (

<>

<CheckCircle size={40} className="mx-auto text-green-500 mb-4"/>

<h3 className="text-xl font-bold mb-2">
Claim Submitted Successfully
</h3>

<p className="text-gray-500 mb-4">
Our team will contact you within 2 hours.
</p>

<button
onClick={()=>setClaimStarted(false)}
className="text-primary font-medium"

>

Submit Another Claim

</button>

</>

) : (

<>

<FileText size={40} className="mx-auto text-primary mb-4"/>

<h3 className="text-xl font-bold mb-2">
Need to File a Claim?
</h3>

<p className="text-gray-500 mb-6">
Our team will guide you through the process.
</p>

<button
onClick={()=>setClaimStarted(true)}
className="bg-primary text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto"

>

Start Claim <ArrowRight size={18}/>

</button>

</>

)}

</div>

</section>

</div>

);
}
