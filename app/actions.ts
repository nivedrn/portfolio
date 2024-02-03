'use server'

import { createSupabaseBackendClient } from '@/lib/supabaseAppRouterClient';

const supabase = createSupabaseBackendClient();

export async function fetchPortfolio() {
    try {
        const { data, error } = await supabase
            .from('portfolio')
            .select('*')
            .single();

        if (error) {
            throw error;
        }

        return { results: data };
    } catch (error) {
        console.log('error', error);
        return { data: null, error: 'Failed to fetch portfolio record: ' + error };
    }
}

export async function modifyPortfolio(updatedData: any) {
    console.log('savePortfolio', updatedData);

    const user: any = await supabase.auth.getUser();
    let email = user != null ? user.data.user.email : "";

    try {
        const { error } = await supabase
            .from('portfolio')
            .update(updatedData)
            .eq('email', email)
            .single();

        if (error) {
            throw error;
        }

        return { success: true }; // Return the updated data
    } catch (error) {
        console.log('error', error);
        return { success: false, error: 'Failed to update portfolio record: ' + error };
    }
}