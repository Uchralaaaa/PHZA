import express from "express";
import type { Request, Response } from "express";
import { Tax2023 } from "./server/tax/tax2023.js";
import { Tax2024 } from "./server/tax/tax2024.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Tax API is running. Use POST /tax2023 or POST /tax2024");
});

// Add types Request and Response
app.post("/tax2023", (req: Request, res: Response) => {
    const { income, workedDays } = req.body;

    const tax = new Tax2023();
    const result = tax.calculate(income, workedDays);

    res.json({ tax: result });
});

app.post("/tax2024", (req: Request, res: Response) => {
    const { income } = req.body;

    const tax = new Tax2024();
    const result = tax.calculate(income);

    res.json({ tax: result });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});