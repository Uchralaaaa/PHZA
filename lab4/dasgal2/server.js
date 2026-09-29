import express from "express";
import { Tax2023 } from "./tax/tax2023.js";
import { Tax2024 } from "./tax/tax2024.js";
const app = express();
app.use(express.json());
// Add types Request and Response
app.post("/tax2023", (req, res) => {
    const { income, workedDays } = req.body;
    const tax = new Tax2023();
    const result = tax.calculate(income, workedDays);
    res.json({ tax: result });
});
app.post("/tax2024", (req, res) => {
    const { income } = req.body;
    const tax = new Tax2024();
    const result = tax.calculate(income);
    res.json({ tax: result });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=server.js.map