
import supabase from "$lib/db";
import type { PageServerLoad, Actions } from "./$types"

export const actions: Actions = {
    newemem: async ({request}) => {   

    const bob = await request.formData();
    const ememValue = bob.get('ememForm');
    const rain_onValue = bob.get('rain_onForm');

const { data, error } = await supabase
.from('te_toki_emem')
.insert([
  { emem: ememValue, rain_on: rain_onValue },
])  

    } 
    
};



