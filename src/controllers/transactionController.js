import { TransactionModel } from "../models/transactionModel.js";
import { handleError } from "../utils/errors.js";
export const TransactionController = {
  async getAll(req, res) {
    try {
      const transactions = await TransactionModel.getAll();
      res.json(transactions);
    } catch (err) {
      handleError(res, err);
    }
  },
  async getById(req, res) {
    try {
      const transaction = await TransactionModel.getById(req.params.id);
      res.json(transaction);
    } catch (err) {
      handleError(res, err, 404);
    }
  },
  async create(req, res) {
    try {
      const { customer_id, items } = req.body;
      const result = await TransactionModel.create(customer_id, items);
      res.status(201).json(result);
    } catch (err) {
      handleError(res, err, 400);
    }
  },
};