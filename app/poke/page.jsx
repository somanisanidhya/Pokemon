export const dynamic = 'force-dynamic';

import PokemonView from '@/components/PokemonView';

async function getPokes(page) {
    const limit = 4;
    const offset = (page - 1) * limit;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to get data');
    }
    return res.json();
}

export default async function PokePage({ searchParams }) {
    let p = 1;
    if (searchParams.page) {
        p = parseInt(searchParams.page);
    }
    
    const data = await getPokes(p);

    return (
        <PokemonView 
            data={data.results} 
            total={data.count} 
            page={p} 
        />
    );
}
