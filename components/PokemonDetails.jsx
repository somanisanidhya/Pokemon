'use client'
import { useEffect, useState } from 'react';
import TypeTabs from './TypeTabs';

export default function PokemonDetails({ name, close }) {
   const [pokeData, setPokeData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [errorMessage, setErrorMessage] = useState("");

   useEffect(() => {
     setIsLoading(true);
     setErrorMessage("");
     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
       .then((res) => { if (res.ok) return res.json(); throw new Error("API error"); })
       .then((data) => { setPokeData(data); setIsLoading(false); })
       .catch(() => { setErrorMessage("Error catching pokemon"); setIsLoading(false); });
   }, [name]);

   if (isLoading) {
       return (
           <div className="bg-white rounded-3xl shadow-2xl p-4 min-h-[250px] border border-slate-100 flex flex-col items-center justify-center animate-pulse">
               <div className="w-16 h-16 border-4 border-slate-200 border-t-rose-500 rounded-full animate-spin mb-4" />
               <p className="text-slate-400 font-bold tracking-widest uppercase text-sm">Extracting DNA...</p>
           </div>
       );
   }

   if (errorMessage) {
       return (
           <div className="bg-rose-50 border border-rose-200 rounded-3xl p-8 text-center shadow-xl">
               <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black">!</div>
               <p className="text-rose-700 font-bold">{errorMessage}</p>
               <button onClick={close} className="mt-6 px-6 py-2 bg-rose-600 text-white font-bold rounded-xl active:scale-95 transition-transform hover:shadow-lg shadow-rose-600/30">Dismiss</button>
           </div>
       );
   }

   return (
       <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300/60 p-1 relative overflow-hidden border border-white isolate animate-in fade-in slide-in-from-right-4 duration-500">
           
           <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 -z-10" />
           
           <button onClick={close} className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all font-bold shadow-sm border border-slate-200 text-xl leading-none">
               ×
           </button>
           
           <div className="pt-6 pb-3 px-4 relative border-b border-slate-200/50 bg-white/50 rounded-t-[22px]">
               <h3 className="text-2xl capitalize font-black text-slate-800 tracking-tight leading-none relative z-10">{pokeData.name}</h3>
               <p className="text-slate-400 font-bold mt-1 uppercase tracking-widest text-xs z-10 relative">Subject #{String(pokeData.id).padStart(3, '0')}</p>
               
               <div className="absolute top-2 -right-6 text-4xl font-black text-slate-100 rotate-12 uppercase tracking-tighter mix-blend-multiply opacity-50 z-0">
                   {pokeData.name}
               </div>
               
               <div className="mt-4 flex justify-center relative z-10">
                   <div className="absolute inset-0 bg-white/80 blur-2xl rounded-full scale-150" />
                   <img 
                       src={pokeData.sprites.other?.['official-artwork']?.front_default || pokeData.sprites.front_default} 
                       alt={pokeData.name} 
                       className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500 relative" 
                   />
               </div>
           </div>
           
           <div className="p-3 sm:p-4 bg-white rounded-b-[22px]">
               <TypeTabs types={pokeData.types} />
           </div>
       </div>
   )
}
