
import { SUPABASE_KEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://bamzyxrbnmouzbgnczgp.supabase.co';


const supabase = createClient(
    supabaseUrl, 
    SUPABASE_KEY
    )
    ;

export default supabase;
