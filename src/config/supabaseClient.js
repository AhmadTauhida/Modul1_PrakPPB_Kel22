import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// TAMBAHKAN DUA BARIS INI UNTUK DEBUG:
console.log("CHECK URL:", supabaseUrl);
console.log("CHECK KEY EXPOSURE:", supabaseKey ? "Key Exists" : "Key Undefined");

export const supabase = createClient(supabaseUrl, supabaseKey);