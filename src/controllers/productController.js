import { ProductModel } from "../models/productModel.js";
import { handleError } from "../utils/errors.js";
export const ProductController = {
  async getAll(req, res) {
    try {
      const products = await ProductModel.getAll();
      res.json(products);
    } catch (err) {
      handleError(res, err);
    }
  },
  async getById(req, res) {
    try {
      const product = await ProductModel.getById(req.params.id);
      res.json(product);
    } catch (err) {
      handleError(res, err, 404);
    }
  },
  async create(req, res) {
    try {
      const product = await ProductModel.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      handleError(res, err, 400);
    }
  },
  async update(req, res) {
    try {
      const product = await ProductModel.update(req.params.id, req.body);
      res.json(product);
    } catch (err) {
      handleError(res, err, 400);
    }
  },
  async remove(req, res) {
    try {
      await ProductModel.remove(req.params.id);
      res.json({ message: "Product deleted successfully" });
    } catch (err) {
      handleError(res, err, 400);
    }
  },
};