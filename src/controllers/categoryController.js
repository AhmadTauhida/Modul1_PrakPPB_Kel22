import { CategoryModel } from "../models/categoryModel.js";
import { friendlyError, errorStatus } from "../utils/errors.js";
export const CategoryController = {
async create(req, res) {
try {
const { name } = req.body;
const category = await CategoryModel.create(name);
res.status(201).json(category);
} catch (err) {
res.status(errorStatus(err, 400)).json({ error: friendlyError(err) });
}
},
async getAll(req, res) {
try {
const categories = await CategoryModel.getAll();
res.json(categories);
} catch (err) {
res.status(500).json({ error: friendlyError(err) });
}
},
async getById(req, res) {
try {
const { id } = req.params;
const category = await CategoryModel.getById(id);
res.json(category);
} catch (err) {
res.status(errorStatus(err, 404)).json({ error: friendlyError(err) });
}
},
async update(req, res) {
try {
const { id } = req.params;
const { name } = req.body;
const category = await CategoryModel.update(id, name);
res.json(category);
} catch (err) {
res.status(errorStatus(err, 400)).json({ error: friendlyError(err) });
}
},
async remove(req, res) {
try {
const { id } = req.params;
const result = await CategoryModel.remove(id);
res.json(result);
} catch (err) {
res.status(errorStatus(err, 400)).json({ error: friendlyError(err) });
}
},
};