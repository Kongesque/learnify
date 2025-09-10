'use server'; // this is a server action, so it runs on the server side

import { createSupabaseClient } from "../supabase";
import { auth } from "@clerk/nextjs/server"

export const createCompanion = async (fromData: CreateCompanion) => {
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from("companions") // table name 
        .insert({ ...fromData, author }) // insert data
        .select() // return inserted data

    if (error || !data ) throw new Error(error?.message || "Failed to create companion");

    return data[0]; // return the first inserted row
}

export const getAllCompanions = async ({ limit = 10, page = 1, subject, topic }: GetAllCompanions) => {
    const supabase = createSupabaseClient();

    let query = supabase.from("companions").select();

    if(subject && topic) { // both subject and topic are provided
        query = query
            .ilike("subject", `%${subject}%`)
            .or(`topic.ilike.%${topic}%, name.ilike.%${topic}%`);
    } else if (subject) { // only subject is provided
        query = query
            .ilike("subject", `%${subject}%`);
    } else if (topic) { // only topic is provided
        query = query
            .or(`topic.ilike.%${topic}%, name.ilike.%${topic}%`);
    } 

    query = query.range((page - 1) * limit, page * limit - 1); 

    const { data: companions, error } = await query;

    if (error) throw new Error(error.message);

    return companions; 
} 