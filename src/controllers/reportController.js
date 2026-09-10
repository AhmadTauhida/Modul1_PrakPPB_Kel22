import { ReportModel } from "../models/reportModel.js";
import { handleError } from "../utils/errors.js";

export const ReportController = {
  async getTotalCustomers(req, res) {
    try {
      const total = await ReportModel.getTotalCustomers();
      res.json({ totalCustomers: total });
    } catch (err) {
      handleError(res, err);
    }
  },
};