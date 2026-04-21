"use client";

import { useState, ChangeEvent } from "react";
import {
FileText,
Upload,
Download,
Eye,
Calendar,
Lock,
Search,
Plus,
X,
Trash2,
Heart,
Droplets,
Thermometer,
Scale
} from "lucide-react";

type RecordType = {
id: number;
title: string;
type: string;
doctor: string;
date: string;
fileURL: string;
};

const vitals = [
{ label: "Blood Pressure", value: "120/80", unit: "mmHg", icon: Heart },
{ label: "Blood Sugar", value: "95", unit: "mg/dL", icon: Droplets },
{ label: "Temperature", value: "98.6", unit: "°F", icon: Thermometer },
{ label: "BMI", value: "23.5", unit: "kg/m²", icon: Scale },
];

export default function HealthRecordsPage() {

const [records,setRecords] = useState<RecordType[]>([]);
const [searchQuery,setSearchQuery] = useState("");
const [showUpload,setShowUpload] = useState(false);
const [selectedRecord,setSelectedRecord] = useState<number | null>(null);

const handleFileUpload = (e:ChangeEvent<HTMLInputElement>) => {

const file = e.target.files?.[0];

if(!file) return;

const newRecord:RecordType = {
id: Date.now(),
title: file.name,
type: "Uploaded Document",
doctor: "Self Upload",
date: new Date().toISOString().split("T")[0],
fileURL: URL.createObjectURL(file)
};

setRecords(prev => [newRecord,...prev]);
setShowUpload(false);

};

const handleDelete = (id:number) => {
setRecords(prev => prev.filter(r => r.id !== id));
};

const filtered = records.filter(r =>
r.title.toLowerCase().includes(searchQuery.toLowerCase())
);

return (

<div
className="min-h-screen bg-cover bg-center"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1579684385127-1ef15d508118')"
}}
>

<div className="bg-white/90 backdrop-blur-sm min-h-screen">

{/* HEADER */}

<section
className="h-[300px] flex items-center justify-center text-center text-white bg-cover bg-center"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1581594693702-fbdc51b2763b')"
}}
>

<div className="bg-black/50 p-8 rounded-xl">

<h1 className="text-3xl font-bold mb-2">
Digital Health Records
</h1>

<p className="text-sm">
Securely store and manage your medical history
</p>

</div>

</section>

{/* VITALS */}

<section className="py-10 border-b">

<div className="max-w-7xl mx-auto px-4">

<h2 className="text-lg font-semibold mb-4">
Current Vitals Summary
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

{vitals.map((v)=>(

<div key={v.label} className="bg-white rounded-xl p-4 shadow">

<div className="flex items-center gap-2 mb-2">

<v.icon className="h-4 w-4 text-blue-600"/>

<span className="text-xs text-gray-500">
{v.label}
</span>

</div>

<div className="flex items-baseline gap-1">

<span className="text-2xl font-bold">
{v.value}
</span>

<span className="text-xs text-gray-500">
{v.unit}
</span>

</div>

</div>
))}

</div>

</div>

</section>

{/* RECORDS */}

<section className="py-10">

<div className="max-w-7xl mx-auto px-4">

<div className="flex justify-between mb-6">

<div className="relative w-80">

<Search className="absolute left-3 top-3 h-5 w-5 text-gray-400"/>

<input
type="text"
placeholder="Search records..."
className="w-full pl-10 pr-4 py-2 border rounded-xl"
value={searchQuery}
onChange={(e)=>setSearchQuery(e.target.value)}
/>

</div>

<button
onClick={()=>setShowUpload(!showUpload)}
className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl"

>

<Plus className="h-4 w-4"/>
Upload Record

</button>

</div>

{/* UPLOAD SECTION */}

{showUpload && (

<div className="bg-white p-6 rounded-xl border-2 border-dashed mb-6">

<div className="flex justify-between mb-4">

<h3 className="font-semibold">
Upload Medical Record
</h3>

<button onClick={()=>setShowUpload(false)}> <X/> </button>

</div>

<div className="text-center">

<Upload className="h-12 w-12 mx-auto text-blue-400 mb-3"/>

<p className="text-sm text-gray-500">
Upload PDF, JPG or PNG
</p>

<input
type="file"
accept=".pdf,.jpg,.png"
onChange={handleFileUpload}
className="mt-4"
/>

</div>

<div className="flex items-center gap-2 text-xs text-gray-500 mt-4">

<Lock className="h-4 w-4"/>

<span>
Files stored securely
</span>

</div>

</div>

)}

{/* RECORD LIST */}

<div className="space-y-3">

{filtered.map((r)=>(

<div
key={r.id}
className="bg-white p-5 rounded-xl shadow cursor-pointer"
onClick={()=>setSelectedRecord(selectedRecord===r.id?null:r.id)}
>

<div className="flex justify-between">

<div className="flex items-center gap-3">

<FileText className="h-5 w-5 text-blue-600"/>

<div>

<h3 className="font-semibold text-sm">
{r.title}
</h3>

<p className="text-xs text-gray-500">
{r.type} · {r.doctor}
</p>

</div>

</div>

<div className="flex items-center gap-3 text-xs text-gray-500">

<Calendar className="h-4 w-4"/>
{r.date}

</div>

</div>

{selectedRecord===r.id && (

<div className="mt-4 flex gap-3">

<a
href={r.fileURL}
target="_blank"
className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"

>

<Eye className="h-4 w-4"/>
View
</a>

<a
href={r.fileURL}
download
className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm"

>

<Download className="h-4 w-4"/>
Download
</a>

<button
onClick={(e)=>{
e.stopPropagation();
handleDelete(r.id);
}}
className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg text-sm"

>

<Trash2 className="h-4 w-4"/>
Delete
</button>

</div>

)}

</div>
))}

{filtered.length===0 &&(

<div className="text-center py-16 text-gray-500">

No records uploaded yet

</div>

)}

</div>

</div>

</section>

</div>

</div>

);
}
