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