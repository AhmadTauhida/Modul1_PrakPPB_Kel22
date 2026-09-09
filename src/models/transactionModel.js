import { supabase } from "../config/supabaseClient.js";
export const TransactionModel = {
async getAll() {
const { data, error } = await supabase
.from("transactions")
.select(`
id, total, created_at,
customers ( id, name, phone ),
transaction_items (
  id, quantity, price, subtotal,
  products ( id, sku, name )
)
`)
.order("created_at", { ascending: false });
if (error) throw error;
return data;
},
async getById(id) {
const { data, error } = await supabase
.from("transactions")
.select(`
id, total, created_at,
customers ( id, name, phone ),
transaction_items (
  id, quantity, price, subtotal,
  products ( id, sku, name )
)
`)
.eq("id", id)
.single();
if (error) throw error;
return data;
},
async create(customer_id, items) {
const { data, error } = await supabase
.rpc("create_transaction", {
p_customer_id: customer_id,
p_items: items,
});
if (error) throw error;
return data;
},
};