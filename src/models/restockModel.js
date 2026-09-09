import { supabase } from "../config/supabaseClient.js";
export const RestockModel = {
async getAll() {
const { data, error } = await supabase
.from("restocks")
.select(`
id, supplier_name, quantity, note, created_at,
products ( id, sku, name )
`)
.order("created_at", { ascending: false });
if (error) throw error;
return data;
},
async getById(id) {
const { data, error } = await supabase
.from("restocks")
.select(`
id, supplier_name, quantity, note, created_at,
products ( id, sku, name )
`)
.eq("id", id)
.single();
if (error) throw error;
return data;
},
async create(payload) {
const { data, error } = await supabase
.from("restocks")
.insert([payload])
.select()
.single();
if (error) throw error;
return data;
},
async remove(id) {
const { error } = await supabase.from("restocks").delete().eq("id", id);
if (error) throw error;
return { message: "Restock record deleted successfully" };
},
};