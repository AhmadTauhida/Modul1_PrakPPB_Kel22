import { CustomerModel } from "../models/customerModel.js";
import { friendlyError, errorStatus } from "../utils/errors.js";
export const CustomerController = {
async getAll(req, res) {
try {
const customers = await CustomerModel.getAll();
res.json(customers);
} catch (err) {
res.status(500).json({ error: friendlyError(err) });
}
},
async getById(req, res) {
try {
const customer = await CustomerModel.getById(req.params.id);
res.json(customer);
} catch (err) {
res.status(errorStatus(err, 404)).json({ error: friendlyError(err) });
}
},
async create(req, res) {
try {
const customer = await CustomerModel.create(req.body);
res.status(201).json(customer);
} catch (err) {
res.status(errorStatus(err, 400)).json({ error: friendlyError(err) });
}
},
async update(req, res) {
try {
const customer = await CustomerModel.update(req.params.id, req.body);
res.json(customer);
} catch (err) {
res.status(errorStatus(err, 400)).json({ error: friendlyError(err) });
}
},
async remove(req, res) {
try {
await CustomerModel.remove(req.params.id);
res.json({ message: "Customer deleted successfully" });
} catch (err) {
res.status(errorStatus(err, 400)).json({ error: friendlyError(err) });
}
},
};