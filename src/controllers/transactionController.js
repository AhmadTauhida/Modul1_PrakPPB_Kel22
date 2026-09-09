import { TransactionModel } from "../models/transactionModel.js";
import { friendlyError, errorStatus } from "../utils/errors.js";
export const TransactionController = {
async getAll(req, res) {
try {
const transactions = await TransactionModel.getAll();
res.json(transactions);
} catch (err) {
res.status(500).json({ error: friendlyError(err) });
}
},
async getById(req, res) {
try {
const transaction = await TransactionModel.getById(req.params.id);
res.json(transaction);
} catch (err) {
res.status(errorStatus(err, 404)).json({ error: friendlyError(err) });
}
},
async create(req, res) {
try {
const { customer_id, items } = req.body;
const result = await TransactionModel.create(customer_id, items);
res.status(201).json(result);
} catch (err) {
res.status(errorStatus(err, 400)).json({ error: friendlyError(err) });
}
},
};