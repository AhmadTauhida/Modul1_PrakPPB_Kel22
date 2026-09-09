import { RestockModel } from "../models/restockModel.js";
export const RestockController = {
async getAll(req, res) {
try {
const restocks = await RestockModel.getAll();
res.json(restocks);
} catch (err) {
res.status(500).json({ error: err.message });
}
},
async getById(req, res) {
try {
const restock = await RestockModel.getById(req.params.id);
res.json(restock);
} catch (err) {
res.status(404).json({ error: err.message });
}
},
async create(req, res) {
try {
const restock = await RestockModel.create(req.body);
res.status(201).json(restock);
} catch (err) {
res.status(400).json({ error: err.message });
}
},
async remove(req, res) {
try {
await RestockModel.remove(req.params.id);
res.json({ message: "Restock record deleted successfully" });
} catch (err) {
res.status(400).json({ error: err.message });
}
},
};