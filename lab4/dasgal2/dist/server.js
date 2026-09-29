"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tax2023_1 = require("./server/tax/tax2023");
const tax2024_1 = require("./server/tax/tax2024");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.send("Tax API is running. Use POST /tax2023 or /tax2024");
});
app.post("/tax2023", (req, res) => {
    const { income, workedDays } = req.body;
    const tax = new tax2023_1.Tax2023();
    const result = tax.calculate(income, workedDays);
    res.json({ tax: result });
});
app.post("/tax2024", (req, res) => {
    const { income } = req.body;
    const tax = new tax2024_1.Tax2024();
    const result = tax.calculate(income);
    res.json({ tax: result });
});
app.listen(3000, () => console.log("Server running on port 3000"));
