"use client";

import { useState } from "react";
import {
Activity,
Heart,
Droplets,
Thermometer,
Scale,
TrendingUp,
TrendingDown,
Minus,
Target,
Footprints,
Moon,
Flame
} from "lucide-react";

const vitalData = [
{ label: "Heart Rate", value: 72, unit: "bpm", icon: Heart, trend: "stable", color: "text-rose-500", history: [68, 71, 75, 72, 70, 73, 72] },
{ label: "Blood Pressure", value: "120/80", unit: "mmHg", icon: Activity, trend: "stable", color: "text-blue-500", history: [118, 122, 119, 120, 121, 120, 120] },
{ label: "Blood Oxygen", value: 98, unit: "%", icon: Droplets, trend: "up", color: "text-cyan-500", history: [97, 97, 98, 98, 99, 98, 98] },
{ label: "Temperature", value: 98.4, unit: "°F", icon: Thermometer, trend: "stable", color: "text-orange-500", history: [98.2, 98.5, 98.3, 98.6, 98.4, 98.5, 98.4] },
{ label: "Weight", value: 165, unit: "lbs", icon: Scale, trend: "down", color: "text-violet-500", history: [168, 167, 166, 166, 165, 165, 165] },
{ label: "BMI", value: 23.5, unit: "kg/m²", icon: Target, trend: "stable", color: "text-emerald-500", history: [24.0, 23.9, 23.7, 23.7, 23.6, 23.5, 23.5] },
];

const dailyGoals = [
{ label: "Steps", current: 7842, goal: 10000, unit: "steps", icon: Footprints, color: "bg-blue-500" },
{ label: "Calories Burned", current: 1650, goal: 2200, unit: "kcal", icon: Flame, color: "bg-orange-500" },
{ label: "Sleep", current: 7.2, goal: 8, unit: "hours", icon: Moon, color: "bg-violet-500" },
{ label: "Water Intake", current: 6, goal: 8, unit: "glasses", icon: Droplets, color: "bg-cyan-500" },
];

const weekDays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

export default function HealthMonitoringPage() {

const [activeVital,setActiveVital] = useState(0);

const TrendIcon = ({trend}:{trend:string})=>{
if(trend==="up") return <TrendingUp className="h-4 w-4 text-green-500"/>;
if(trend==="down") return <TrendingDown className="h-4 w-4 text-blue-500"/>;
return <Minus className="h-4 w-4 text-gray-400"/>;
};

return(

<div
className="min-h-screen bg-cover bg-center"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1579684385127-1ef15d508118')"
}}
>

<div className="bg-white/90 backdrop-blur-sm min-h-screen">

{/* HEADER WITH IMAGE */}

<section
className="h-[300px] bg-cover bg-center flex items-center justify-center text-center text-white"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1576091160550-2173dba999ef')"
}}
>

<div className="bg-black/50 p-8 rounded-xl">

<h1 className="text-4xl font-bold mb-2">
Health Monitoring
</h1>

<p className="text-sm">
Track your vitals, fitness goals, and health metrics in real time
</p>

</div>

</section>

{/* VITALS */}

<section className="py-10">

<div className="max-w-7xl mx-auto px-4">

<h2 className="text-lg font-semibold mb-6">
Vital Signs
</h2>

<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">

{vitalData.map((v,i)=>(
<button
key={v.label}
onClick={()=>setActiveVital(i)}
className={`bg-white rounded-xl p-5 shadow hover:shadow-md ${
activeVital===i?"ring-2 ring-primary":""
}`}

>

<div className="flex justify-between mb-3">

<div className="flex items-center gap-2">
<v.icon className={`h-5 w-5 ${v.color}`}/>
<span className="text-xs text-gray-500">
{v.label}
</span>
</div>

<TrendIcon trend={v.trend}/>

</div>

<div className="flex items-baseline gap-1">

<span className="text-2xl font-bold">
{v.value}
</span>

<span className="text-xs text-gray-500">
{v.unit}
</span>

</div>

</button>
))}

</div>

{/* CHART */}

<div className="bg-white rounded-xl p-6 shadow mb-10">

<h3 className="font-semibold mb-4">
{vitalData[activeVital].label} Weekly Trend
</h3>

<div className="flex items-end gap-3 h-40">

{vitalData[activeVital].history.map((val,i)=>{

const max=Math.max(...vitalData[activeVital].history);
const min=Math.min(...vitalData[activeVital].history);
const range=max-min||1;

const height=20+((val-min)/range)*80;

return(

<div key={i} className="flex-1 flex flex-col items-center">

<span className="text-xs">
{val}
</span>

<div
className="w-full bg-primary rounded-t"
style={{height:`${height}%`}}
/>

<span className="text-xs text-gray-500">
{weekDays[i]}
</span>

</div>

);

})}

</div>

</div>

{/* DAILY GOALS */}

<h2 className="text-lg font-semibold mb-6">
Daily Goals
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

{dailyGoals.map((g)=>{

const pct=Math.min(100,(g.current/g.goal)*100);

return(

<div key={g.label} className="bg-white rounded-xl p-5 shadow">

<div className="flex items-center gap-2 mb-3">

<g.icon className="h-5 w-5"/>

<span className="text-sm font-medium">
{g.label}
</span>

</div>

<div className="text-2xl font-bold">
{g.current}
<span className="text-sm text-gray-500">
 / {g.goal}
</span>
</div>

<div className="w-full h-2 bg-gray-200 rounded mt-3">

<div
className={`${g.color} h-2 rounded`}
style={{width:`${pct}%`}}
/>

</div>

<p className="text-xs text-gray-500 mt-2">
{Math.round(pct)}% completed
</p>

</div>

);

})}

</div>

</div>

</section>

</div>

</div>

);

}
