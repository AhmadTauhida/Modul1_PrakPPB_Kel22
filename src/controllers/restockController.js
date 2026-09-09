import { RestockModel } from "../models/restockModel.js";
import { friendlyError, errorStatus } from "../utils/errors.js";
export const RestockController = {
async getAll(req, res) {
try {
const restocks = await RestockModel.getAll();
res.json(restocks);
} catch (err) {
res.status(500).json({ error: friendlyError(err) });
}
},
async getById(req, res) {
try {
const restock = await RestockModel.getById(req.params.id);
res.json(restock);
} catch (err) {
res.status(errorStatus(err, 404)).json({ error: friendlyError(err) });
}
},
async create(req, res) {
try {
const restock = await RestockModel.create(req.body);
res.status(201).json(restock);
} catch (err) {
res.status(errorStatus(err, 400)).json({ error: friendlyError(err) });
}
},
async remove(req, res) {
try {
await RestockModel.remove(req.params.id);
res.json({ message: "Restock record deleted successfully" });
} catch (err) {
res.status(errorStatus(err, 400)).json({ error: friendlyError(err) });
}
},
};