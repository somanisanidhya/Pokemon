'use client'
import Link from 'next/link';

export default function Pagination({ page, totalPages }) {
    function getPageUrl(p) {
        return `/poke?page=${p}`;
    }

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white/80 backdrop-blur-xl border border-slate-200 p-4 rounded-2xl shadow-lg shadow-slate-200/40">
            <span className="text-sm font-bold text-slate-500 mb-4 sm:mb-0">
                Page <span className="text-slate-800">{page}</span> of <span className="text-slate-800">{totalPages}</span>
            </span>
            <div className="flex gap-3">
                {page > 1 ? (
                    <Link
                        href={getPageUrl(page - 1)}
                        className="px-5 py-2.5 rounded-xl font-bold text-sm bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 shadow-sm"
                    >
                        Previous
                    </Link>
                ) : (
                    <button disabled className="px-5 py-2.5 rounded-xl font-bold text-sm bg-white border border-slate-200 text-slate-600 opacity-40 shadow-sm">
                        Previous
                    </button>
                )}
                
                {page < totalPages ? (
                    <Link
                        href={getPageUrl(page + 1)}
                        className="px-5 py-2.5 rounded-xl font-bold text-sm bg-slate-800 border border-slate-800 text-white hover:bg-slate-700 transition-all shadow-md shadow-slate-800/20 active:scale-95"
                    >
                        Next Pages
                    </Link>
                ) : (
                    <button disabled className="px-5 py-2.5 rounded-xl font-bold text-sm bg-slate-800 border border-slate-800 text-white opacity-40 shadow-md shadow-slate-800/20">
                        Next Pages
                    </button>
                )}
            </div>
        </div>
    );
}
