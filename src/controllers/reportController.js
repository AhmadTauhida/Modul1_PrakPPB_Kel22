import { ReportModel } from "../models/reportModel.js";
import { friendlyError } from "../utils/errors.js";

export const ReportController = {
  async getTotalCustomers(req, res) {
    try {
      const total = await ReportModel.getTotalCustomers();
      res.json({ totalCustomers: total });
    } catch (err) {
      res.status(500).json({ error: friendlyError(err) });
    }
  },
};
