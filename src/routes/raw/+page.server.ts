
import supabase from "$lib/db";

import type { PageServerLoad } from './$types';

let ememGot = [];

//so making thsi async and it works in cloudflare
// even so, should probably look into the endpoints part - for general API shit
// supabase call is a bit slow - hmm, wonder why...

    export const load = ( async ( { params } ) => {
        let {data, error} = await supabase
        .from('te_toki_emem')
        .select('*')
        .gt('rain_on', '2022-11-01')
        .order('rain_on', { ascending: false });

ememGot = data;

    return{
        ememGot
    }
}) satisfies PageServerLoad;

