
import supabase from "$lib/db";

import type { PageServerLoad } from './$types';

let ememGot = [];


const queryResults = [
    { date: '2022-01-01', value: 10 },
    { date: '2022-01-03', value: 15 },
    { date: '2022-01-05', value: 20 }
  ];
  
  
  // Example date range
  const startDate = new Date('2022-01-01');
  const endDate = new Date('2022-01-05');
  
  // Create array of all dates in range with 0 values for missing dates
  // something I just need to note somewehre, about types of array  -eg array of objects good here
  // and an array of usual would be good for a matrix that is a linear algeb thing?
  const dateArray: {date: Date, value: number}[] = [];
  
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const dateString = currentDate.toISOString().slice(0, 10);
    const result = queryResults.find(r => r.date === dateString);
    dateArray.push({date:dateString, value:result ? result.value : 0});
    currentDate.setDate(currentDate.getDate() + 1);
  }

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

