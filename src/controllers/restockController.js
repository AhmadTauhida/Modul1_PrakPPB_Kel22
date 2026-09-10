import { RestockModel } from "../models/restockModel.js";
import { handleError } from "../utils/errors.js";
export const RestockController = {
  async getAll(req, res) {
    try {
      const restocks = await RestockModel.getAll();
      res.json(restocks);
    } catch (err) {
      handleError(res, err);
    }
  },
  async getById(req, res) {
    try {
      const restock = await RestockModel.getById(req.params.id);
      res.json(restock);
    } catch (err) {
      handleError(res, err, 404);
    }
  },
  async create(req, res) {
    try {
      const restock = await RestockModel.create(req.body);
      res.status(201).json(restock);
    } catch (err) {
      handleError(res, err, 400);
    }
  },
  async remove(req, res) {
    try {
      await RestockModel.remove(req.params.id);
      res.json({ message: "Restock record deleted successfully" });
    } catch (err) {
      handleError(res, err, 400);
    }
  },
};