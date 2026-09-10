import { CustomerModel } from "../models/customerModel.js";
import { handleError } from "../utils/errors.js";

function validateCustomer(body) {
  const errors = [];
  if (body.email !== undefined && !body.email.includes("@")) {
    errors.push("Email must contain @");
  }
  if (body.phone !== undefined && body.phone.length < 10) {
    errors.push("Phone must be at least 10 characters");
  }
  if (errors.length > 0) {
    const err = new Error(errors.join(", "));
    err.status = 400;
    throw err;
  }
}

export const CustomerController = {
  async getAll(req, res) {
    try {
      const { name, page = 1, limit = 10 } = req.query;
      const pageNum = Math.max(1, parseInt(page));
      const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
      const { data, count } = await CustomerModel.getAll(name, pageNum, limitNum);
      const totalPages = Math.ceil(count / limitNum);
      res.json({
        data,
        pagination: {
          totalItems: count,
          totalPages,
          currentPage: pageNum,
          perPage: limitNum,
        },
      });
    } catch (err) {
      handleError(res, err);
    }
  },
  async getById(req, res) {
    try {
      const customer = await CustomerModel.getById(req.params.id);
      res.json(customer);
    } catch (err) {
      handleError(res, err, 404);
    }
  },
  async create(req, res) {
    try {
      validateCustomer(req.body);
      const customer = await CustomerModel.create(req.body);
      res.status(201).json(customer);
    } catch (err) {
      handleError(res, err, 400);
    }
  },
  async update(req, res) {
    try {
      validateCustomer(req.body);
      const customer = await CustomerModel.update(req.params.id, req.body);
      res.json(customer);
    } catch (err) {
      handleError(res, err, 400);
    }
  },
  async remove(req, res) {
    try {
      await CustomerModel.remove(req.params.id);
      res.json({ message: "Customer deleted successfully" });
    } catch (err) {
      handleError(res, err, 400);
    }
  },
};