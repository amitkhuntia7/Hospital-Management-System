"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Newspaper, Clock, ArrowRight, Search, TrendingUp } from "lucide-react";

interface Article {
title: string;
description: string;
url: string;
urlToImage: string;
publishedAt: string;
source: { name: string };
}

export default function PharmaUpdatesPage() {

const [news,setNews]=useState<Article[]>([]);
const [search,setSearch]=useState("");
const [loading,setLoading]=useState(true);

const fetchNews=async()=>{

try{

const res=await axios.get(
`https://newsapi.org/v2/everything?q=pharmaceutical OR medicine OR drug approval&language=en&sortBy=publishedAt&pageSize=20&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
);

setNews(res.data.articles);

}catch(err){

console.error(err);

}

setLoading(false);

};

useEffect(()=>{

fetchNews();

const interval=setInterval(()=>{
fetchNews();
},300000);

return()=>clearInterval(interval);

},[]);

const filteredNews=news.filter((n)=>
n.title.toLowerCase().includes(search.toLowerCase())
);

return(

<div className="min-h-screen bg-gray-50">

{/* HERO HEADER */}

<section
className="relative h-[300px] flex items-center justify-center text-white text-center"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=80')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10">

<Newspaper size={40} className="mx-auto mb-3"/>

<h1 className="text-4xl font-bold">
Pharma Updates
</h1>

<p className="text-sm mt-2">
Real-time pharmaceutical news & research
</p>

</div>

</section>

{/* SEARCH */}

<section className="py-10">

<div className="max-w-6xl mx-auto px-4">

<div className="flex items-center gap-3 mb-8">

<div className="relative flex-1">

<Search className="absolute left-3 top-3 text-gray-400"/>

<input
type="text"
placeholder="Search pharma news..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full pl-10 pr-4 py-3 border rounded-xl"
/>

</div>

<button
onClick={fetchNews}
className="bg-primary text-white px-5 py-3 rounded-xl"

>

Refresh

</button>

</div>

{/* TRENDING */}

<div className="flex items-center gap-2 mb-6">

<TrendingUp className="text-primary"/>

<h2 className="text-xl font-bold">
Trending Pharma News
</h2>

</div>

{loading && (

<p className="text-gray-500">
Loading pharma news...
</p>

)}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{filteredNews.slice(0,12).map((article,index)=>(

<a
key={index}
href={article.url}
target="_blank"
className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"

>

{article.urlToImage && (

<img
src={article.urlToImage}
className="h-44 w-full object-cover"
/>

)}

<div className="p-4">

<p className="text-xs text-gray-400 mb-1">
{article.source.name}
</p>

<h3 className="font-semibold mb-2 line-clamp-2">
{article.title}
</h3>

<p className="text-sm text-gray-500 mb-3 line-clamp-3">
{article.description}
</p>

<div className="flex justify-between text-xs text-gray-400">

<span className="flex items-center gap-1">

<Clock size={12}/>

{new Date(article.publishedAt).toLocaleDateString()}

</span>

<span className="flex items-center gap-1 text-primary">

Read

<ArrowRight size={14}/>

</span>

</div>

</div>

</a>

))}

</div>

</div>

</section>

</div>

);

}
