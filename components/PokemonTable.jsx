'use client'

export default function PokemonTable({ pokemons, onSelect, selected }) {
    const getId = (url) => {
        let arr = url.split('/').filter(Boolean);
        return arr[arr.length - 1];
    };

    return (
        <div className="overflow-hidden rounded-2xl">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-100 uppercase tracking-widest text-xs font-black text-slate-400">
                        <th className="py-2.5 px-4 w-28 rounded-tl-2xl">ID No.</th>
                        <th className="py-2.5 px-4">Species</th>
                        <th className="py-2.5 px-4 text-right rounded-tr-2xl">Explore</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-sm">
                    {pokemons && pokemons.map((poke) => {
                        let isActive = selected === poke.name;
                        let id = String(getId(poke.url)).padStart(3, '0');
                        
                        return (
                            <tr 
                                key={poke.name} 
                                onClick={() => onSelect(poke.name)}
                                className={`cursor-pointer group transition-all duration-300 ${isActive ? 'bg-rose-50' : 'hover:bg-slate-50 bg-white'}`}
                            >
                                <td className="py-2.5 px-4 font-bold text-slate-400">#{id}</td>
                                <td className="py-2.5 px-4 capitalize font-bold text-slate-800 flex items-center gap-2">
                                    {isActive && <span className="flex w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />}
                                    {poke.name}
                                </td>
                                <td className="py-2.5 px-4 text-right">
                                    <div className={`inline-flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 font-bold ${isActive ? 'bg-rose-500 text-white translate-x-1 shadow-md shadow-rose-500/30' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600 group-hover:translate-x-1'}`}>
                                        →
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
