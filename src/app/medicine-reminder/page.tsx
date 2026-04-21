"use client";

import { useState } from "react";
import {
Bell,
Plus,
Clock,
Trash2,
CheckCircle,
X,
Sun,
Sunrise,
Sunset,
Moon
} from "lucide-react";

interface Reminder {
id:number;
medicine:string;
dosage:string;
time:string;
frequency:string;
taken:boolean;
period:"morning"|"afternoon"|"evening"|"night";
}

const periodIcons={
morning:Sunrise,
afternoon:Sun,
evening:Sunset,
night:Moon
};

export default function MedicineReminderPage(){

const [reminders,setReminders]=useState<Reminder[]>([
{
id:1,
medicine:"Metformin 500mg",
dosage:"1 tablet",
time:"08:00 AM",
frequency:"Daily",
taken:false,
period:"morning"
},
{
id:2,
medicine:"Vitamin D3",
dosage:"1 capsule",
time:"12:00 PM",
frequency:"Daily",
taken:false,
period:"afternoon"
},
{
id:3,
medicine:"Atorvastatin 20mg",
dosage:"1 tablet",
time:"09:00 PM",
frequency:"Daily",
taken:false,
period:"night"
}
]);

const [showAdd,setShowAdd]=useState(false);

const [newMed,setNewMed]=useState({
medicine:"",
dosage:"",
time:"08:00",
period:"morning" as const
});

const toggleTaken=(id:number)=>{
setReminders(prev =>
prev.map(r =>
r.id===id ? {...r,taken:!r.taken}:r
)
);
};

const deleteReminder=(id:number)=>{
setReminders(prev=>prev.filter(r=>r.id!==id));
};

const addReminder=()=>{

if(!newMed.medicine) return;

const newReminder:Reminder={
id:Date.now(),
medicine:newMed.medicine,
dosage:newMed.dosage,
time:newMed.time,
frequency:"Daily",
taken:false,
period:newMed.period
};

setReminders(prev=>[...prev,newReminder]);

setNewMed({
medicine:"",
dosage:"",
time:"08:00",
period:"morning"
});

setShowAdd(false);
};

const takenCount=reminders.filter(r=>r.taken).length;

const adherence=Math.round(
(takenCount/reminders.length)*100 || 0
);

const grouped={
morning:reminders.filter(r=>r.period==="morning"),
afternoon:reminders.filter(r=>r.period==="afternoon"),
evening:reminders.filter(r=>r.period==="evening"),
night:reminders.filter(r=>r.period==="night")
};

return(

<div className="min-h-screen bg-gray-50">

{/* HERO HEADER */}

<section
className="relative h-[280px] flex items-center justify-center text-white text-center"
style={{
backgroundImage:"url('https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=1600')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10">

<Bell size={40} className="mx-auto mb-3"/>

<h1 className="text-4xl font-bold">
Medicine Reminder
</h1>

<p className="text-sm mt-2">
Never miss a dose with smart reminders
</p>

</div>

</section>

{/* CONTENT */}

<div className="max-w-4xl mx-auto px-4 py-10">

{/* STATS */}

<div className="grid grid-cols-3 gap-4 mb-8">

<div className="bg-white p-5 rounded-xl shadow text-center">

<p className="text-2xl font-bold text-primary">
{takenCount}/{reminders.length}
</p>

<p className="text-xs text-gray-500">
Doses Taken
</p>

</div>

<div className="bg-white p-5 rounded-xl shadow text-center">

<p className="text-2xl font-bold text-green-600">
{adherence}%
</p>

<p className="text-xs text-gray-500">
Adherence
</p>

</div>

<div className="bg-white p-5 rounded-xl shadow text-center">

<p className="text-2xl font-bold text-orange-500">
{reminders.length-takenCount}
</p>

<p className="text-xs text-gray-500">
Remaining
</p>

</div>

</div>

{/* ADD BUTTON */}

<div className="flex justify-between mb-6">

<h2 className="font-semibold text-lg">
Today's Schedule
</h2>

<button
onClick={()=>setShowAdd(!showAdd)}
className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded"

>

{showAdd ? <X size={16}/> : <Plus size={16}/>}

{showAdd?"Cancel":"Add Reminder"}

</button>

</div>

{/* ADD FORM */}

{showAdd && (

<div className="bg-white p-6 rounded-xl shadow mb-6">

<div className="grid md:grid-cols-2 gap-4 mb-4">

<input
placeholder="Medicine Name"
value={newMed.medicine}
onChange={e=>setNewMed({...newMed,medicine:e.target.value})}
className="border p-2 rounded"
/>

<input
placeholder="Dosage"
value={newMed.dosage}
onChange={e=>setNewMed({...newMed,dosage:e.target.value})}
className="border p-2 rounded"
/>

<input
type="time"
value={newMed.time}
onChange={e=>setNewMed({...newMed,time:e.target.value})}
className="border p-2 rounded"
/>

<select
value={newMed.period}
onChange={e=>setNewMed({...newMed,period:e.target.value as any})}
className="border p-2 rounded"

>

<option value="morning">Morning</option>
<option value="afternoon">Afternoon</option>
<option value="evening">Evening</option>
<option value="night">Night</option>

</select>

</div>

<button
onClick={addReminder}
className="bg-primary text-white px-6 py-2 rounded"

>

Save Reminder

</button>

</div>

)}

{/* REMINDERS */}

{Object.entries(grouped).map(([period,items])=>{

if(items.length===0) return null;

const Icon=periodIcons[period as keyof typeof periodIcons];

return(

<div key={period} className="mb-6">

<div className="flex items-center gap-2 mb-3 text-gray-600 capitalize">

<Icon size={16}/>

{period}

</div>

<div className="space-y-2">

{items.map(r=>(

<div
key={r.id}
className={`flex items-center justify-between p-4 rounded-xl border ${
r.taken ? "bg-green-50 border-green-200":"bg-white"
}`}
>

<div className="flex items-center gap-3">

<button
onClick={()=>toggleTaken(r.id)}
className={`w-6 h-6 rounded-full border flex items-center justify-center ${
r.taken?"bg-green-500 border-green-500":"border-gray-400"
}`}

>

{r.taken && <CheckCircle size={14} className="text-white"/>}

</button>

<div>

<p className={`font-medium ${r.taken?"line-through text-gray-400":""}`}>
{r.medicine}
</p>

<p className="text-xs text-gray-500">
{r.dosage}
</p>

</div>

</div>

<div className="flex items-center gap-3">

<span className="text-sm text-gray-500 flex items-center gap-1">

<Clock size={14}/> {r.time}

</span>

<button
onClick={()=>deleteReminder(r.id)}
className="text-red-500"

>

<Trash2 size={16}/>

</button>

</div>

</div>
))}

</div>

</div>

);

})}

</div>

</div>

);
}
