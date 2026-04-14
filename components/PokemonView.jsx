'use client'
import { useState } from 'react';
import PokemonTable from './PokemonTable';
import PokemonDetails from './PokemonDetails';
import Pagination from './Pagination';

export default function PokemonView({ data, total, page }) {
    const [selected, setSelected] = useState(null);
    const limit = 4;
    const totalPages = Math.ceil(total / limit);

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-rose-500 rounded-full animate-pulse" />
                <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">National Pokédex</h2>
            </div>
            
            <div className="flex flex-row gap-4 md:gap-8 items-start">
               <div className="w-1/2 lg:w-3/5 xl:w-2/3 flex flex-col gap-6">
                   <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-2 shadow-xl shadow-slate-200/50">
                       <PokemonTable 
                            pokemons={data} 
                            onSelect={(name) => setSelected(name)} 
                            selected={selected} 
                       />
                   </div>
                   <div className="px-2">
                       <Pagination page={page} totalPages={totalPages} />
                   </div>
               </div>

               <div className="w-1/2 lg:w-2/5 xl:w-1/3 sticky top-28 transition-all duration-300">
                   {selected ? (
                       <PokemonDetails 
                            name={selected} 
                            close={() => setSelected(null)} 
                       />
                   ) : (
                       <div className="bg-white/50 backdrop-blur-sm border-2 border-dashed border-slate-300 rounded-3xl p-6 text-center flex flex-col items-center justify-center min-h-[250px]">
                           <div className="w-20 h-20 bg-slate-200 rounded-full mb-6 animate-pulse" />
                           <p className="text-xl font-bold text-slate-500">No Pokémon Selected</p>
                           <p className="text-slate-400 mt-2 font-medium">Click on any row in the table to explore their detailed stats, abilities, and typings.</p>
                       </div>
                   )}
               </div>
            </div>
        </div>
    );
}
