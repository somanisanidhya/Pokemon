'use client'
import { useState, useEffect } from 'react';

const typeBadgeColors = {
  normal: 'bg-stone-200 text-stone-700', fire: 'bg-orange-500 text-white',
  water: 'bg-cyan-500 text-white', electric: 'bg-yellow-400 text-yellow-900',
  grass: 'bg-emerald-500 text-white', ice: 'bg-cyan-200 text-cyan-800',
  fighting: 'bg-rose-700 text-white', poison: 'bg-purple-500 text-white',
  ground: 'bg-yellow-700 text-white', flying: 'bg-indigo-300 text-indigo-900',
  psychic: 'bg-pink-500 text-white', bug: 'bg-lime-500 text-lime-900',
  rock: 'bg-yellow-800 text-white', ghost: 'bg-violet-600 text-white',
  dragon: 'bg-indigo-600 text-white', dark: 'bg-slate-800 text-white',
  steel: 'bg-slate-400 text-slate-900', fairy: 'bg-pink-300 text-pink-900'
};

export default function TypeTabs({ types }) {
    const [activeTab, setActiveTab] = useState(types[0]?.type?.url);
    const [tabData, setTabData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (types && types.length > 0) setActiveTab(types[0].type.url);
    }, [types]);

    useEffect(() => {
        if (!activeTab) return;
        setLoading(true);
        fetch(activeTab)
            .then(res => res.json())
            .then(data => { setTabData(data); setLoading(false); })
            .catch(err => { console.log(err); setLoading(false); });
    }, [activeTab]);

    return (
        <div className="mt-2">
            <h4 className="font-extrabold text-sm uppercase mb-4 text-slate-400 tracking-wider">Combat Focus</h4>
            
            <div className="flex flex-wrap gap-2 mb-6">
                {types.map((item) => {
                    let typeName = item.type.name;
                    let isActive = activeTab === item.type.url;
                    let classBase = typeBadgeColors[typeName] || 'bg-slate-200 text-slate-700';
                    return (
                        <button
                            key={typeName}
                            onClick={() => setActiveTab(item.type.url)}
                            className={`px-5 py-2 rounded-xl capitalize font-bold text-sm transition-all duration-300 ${isActive ? classBase + ' shadow-lg scale-105 ring-2 ring-offset-2 ring-slate-200' : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:scale-105'}`}
                        >
                            {typeName}
                        </button>
                    );
                })}
            </div>

            <div className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-inner overflow-hidden min-h-[140px] flex items-center justify-center">
                {loading ? (
                    <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" />
                        <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                        <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce [animation-delay:0.4s]" />
                    </div>
                ) : tabData ? (
                    <div className="w-full animate-in fade-in slide-in-from-bottom-2 grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                            <p className="text-3xl font-black text-slate-800 mb-1">{tabData.game_indices?.length || 0}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Generations</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                            <p className="text-3xl font-black text-slate-800 mb-1">{tabData.moves?.length || 0}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Moves</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-rose-500 font-bold text-sm">Data unavailable</p>
                )}
            </div>
        </div>
    );
}
