"use client";

import { useState } from "react";
import {
Pill,
Search,
ShoppingCart,
Plus,
Minus,
Trash2,
Upload,
Clock,
Truck,
Shield,
CheckCircle,
Star,
X
} from "lucide-react";

const categories = [
"All",
"Pain Relief",
"Diabetes",
"Heart Health",
"Vitamins",
"Antibiotics",
"Skin Care",
"Allergy"
];

const medicines = [
{ id:1,name:"Paracetamol 500mg",brand:"Crocin",category:"Pain Relief",price:50,originalPrice:70,rating:4.8,reviews:2340,inStock:true,prescription:false,image:"P"},
{ id:2,name:"Metformin 500mg",brand:"Glycomet",category:"Diabetes",price:120,originalPrice:150,rating:4.7,reviews:1890,inStock:true,prescription:true,image:"M"},
{ id:3,name:"Atorvastatin 20mg",brand:"Lipitor",category:"Heart Health",price:180,originalPrice:240,rating:4.9,reviews:3210,inStock:true,prescription:true,image:"A"},
{ id:4,name:"Vitamin D3 1000IU",brand:"HealthVit",category:"Vitamins",price:90,originalPrice:110,rating:4.6,reviews:5670,inStock:true,prescription:false,image:"V"},
{ id:5,name:"Amoxicillin 250mg",brand:"Novamox",category:"Antibiotics",price:150,originalPrice:200,rating:4.5,reviews:1230,inStock:false,prescription:true,image:"A"},
{ id:6,name:"Cetirizine 10mg",brand:"Zyrtec",category:"Allergy",price:60,originalPrice:80,rating:4.7,reviews:4560,inStock:true,prescription:false,image:"C"},
{ id:7,name:"Retinol Cream 0.5%",brand:"DermaCare",category:"Skin Care",price:220,originalPrice:290,rating:4.8,reviews:890,inStock:true,prescription:false,image:"R"},
{ id:8,name:"Omega-3 Fish Oil",brand:"NatureMade",category:"Vitamins",price:150,originalPrice:190,rating:4.6,reviews:3450,inStock:true,prescription:false,image:"O"},
];

interface CartItem{
id:number;
name:string;
price:number;
qty:number;
}

export default function MedicineDeliveryPage(){

const [activeCategory,setActiveCategory]=useState("All");
const [searchQuery,setSearchQuery]=useState("");
const [cart,setCart]=useState<CartItem[]>([]);
const [showCart,setShowCart]=useState(false);
const [orderPlaced,setOrderPlaced]=useState(false);

const filtered=medicines.filter((m)=>{
const matchesCat=activeCategory==="All"||m.category===activeCategory;
const matchesSearch=
m.name.toLowerCase().includes(searchQuery.toLowerCase())||
m.brand.toLowerCase().includes(searchQuery.toLowerCase());
return matchesCat&&matchesSearch;
});

const addToCart=(med:typeof medicines[0])=>{
setCart((prev)=>{
const existing=prev.find((c)=>c.id===med.id);
if(existing){
return prev.map((c)=>
c.id===med.id?{...c,qty:c.qty+1}:c
);
}
return [...prev,{id:med.id,name:med.name,price:med.price,qty:1}];
});
};

const updateQty=(id:number,delta:number)=>{
setCart((prev)=>
prev
.map((c)=>c.id===id?{...c,qty:c.qty+delta}:c)
.filter((c)=>c.qty>0)
);
};

const total=cart.reduce((s,c)=>s+c.price*c.qty,0);

return(

<div
className="min-h-screen bg-cover bg-center"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88')"
}}
>

<div className="bg-white/90 backdrop-blur-sm min-h-screen">

{/* HEADER */}

<section
className="h-[300px] flex items-center justify-center text-center text-white bg-cover bg-center"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88')"
}}
>

<div className="bg-black/50 p-8 rounded-xl">

<h1 className="text-3xl font-bold mb-2">
Online Medicine Delivery
</h1>

<p className="text-sm">
Order genuine medicines online with fast doorstep delivery
</p>

</div>

</section>

{/* FEATURES */}

<section className="py-8 border-b">

<div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">

{[
{icon:Truck,label:"Same-Day Delivery",desc:"Order before 2 PM"},
{icon:Shield,label:"100% Genuine",desc:"Verified medicines"},
{icon:Upload,label:"Upload Rx",desc:"Prescription upload"},
{icon:Clock,label:"Auto Refills",desc:"Never run out"},
].map((f)=>(

<div key={f.label} className="text-center p-4">

<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3">
<f.icon className="h-6 w-6 text-primary"/>
</div>

<p className="font-semibold text-sm">{f.label}</p>
<p className="text-xs text-gray-500">{f.desc}</p>

</div>
))}

</div>

</section>

{/* SEARCH + CART */}

<section className="py-10">

<div className="max-w-7xl mx-auto px-4">

<div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">

<div className="relative flex-1 max-w-md">

<Search className="absolute left-3 top-3 h-5 w-5 text-gray-400"/>

<input
type="text"
placeholder="Search medicines..."
className="w-full pl-10 pr-4 py-2.5 rounded-xl border"
value={searchQuery}
onChange={(e)=>setSearchQuery(e.target.value)}
/>

</div>

<button
onClick={()=>setShowCart(!showCart)}
className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl"

>

<ShoppingCart className="h-4 w-4"/>

Cart ({cart.reduce((s,c)=>s+c.qty,0)})

{cart.length>0&&( <span className="font-bold ml-2">
₹{total} </span>
)}

</button>

</div>

{/* CART */}

{showCart&&(

<div className="bg-white rounded-xl shadow p-6 mb-6">

<div className="flex justify-between mb-4">

<h3 className="font-semibold">
Shopping Cart
</h3>

<button onClick={()=>setShowCart(false)}> <X/> </button>

</div>

{cart.length===0?(

<p className="text-gray-500">
Cart is empty
</p>
):orderPlaced?(
<div className="text-center py-8">

<CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4"/>

<h3 className="text-xl font-bold">
Order Placed Successfully
</h3>

<p className="text-gray-500">
Delivery in 2-4 hours
</p>

<button
onClick={()=>{
setOrderPlaced(false);
setCart([]);
}}
className="mt-4 px-6 py-2 bg-primary text-white rounded"

>

Continue Shopping </button>

</div>
):(

<>

{cart.map((c)=>(

<div key={c.id} className="flex justify-between mb-3">

<span>{c.name}</span>

<div className="flex items-center gap-3">

<button onClick={()=>updateQty(c.id,-1)}> <Minus/> </button>

<span>{c.qty}</span>

<button onClick={()=>updateQty(c.id,1)}> <Plus/> </button>

<span className="font-bold">
₹{c.price*c.qty}
</span>

<button onClick={()=>updateQty(c.id,-c.qty)}> <Trash2/> </button>

</div>

</div>
))}

<div className="flex justify-between mt-4 border-t pt-4">

<span className="font-bold">
Total: ₹{total}
</span>

<button
onClick={()=>setOrderPlaced(true)}
className="px-6 py-2 bg-primary text-white rounded"

>

Place Order </button>

</div>

</>

)}

</div>

)}

{/* CATEGORIES */}

<div className="flex flex-wrap gap-2 mb-8">

{categories.map((c)=>(
<button
key={c}
onClick={()=>setActiveCategory(c)}
className={`px-4 py-2 rounded-full text-sm ${
activeCategory===c
?"bg-primary text-white"
:"bg-gray-200"
}`}

>

{c} </button>
))}

</div>

{/* MEDICINES */}

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

{filtered.map((med)=>(

<div key={med.id} className="bg-white rounded-xl p-5 shadow">

<div className="h-24 flex items-center justify-center bg-gray-100 rounded mb-3">

<span className="text-3xl text-primary/40">
{med.image}
</span>

</div>

<p className="text-xs text-gray-500">
{med.brand}
</p>

<h3 className="font-semibold text-sm mb-2">
{med.name}
</h3>

<div className="flex items-center gap-1 mb-2">

<Star className="h-4 w-4 text-yellow-400 fill-yellow-400"/>

<span className="text-xs">
{med.rating}
</span>

</div>

<div className="flex gap-2 mb-4">

<span className="font-bold">
₹{med.price}
</span>

<span className="line-through text-gray-400 text-sm">
₹{med.originalPrice}
</span>

</div>

{med.inStock?(
<button
onClick={()=>addToCart(med)}
className="w-full py-2 bg-primary text-white rounded"

>

Add to Cart </button>
):( <button className="w-full py-2 bg-gray-200 text-gray-500 rounded">
Out of Stock </button>
)}

</div>
))}

</div>

</div>

</section>

</div>

</div>

);
}
