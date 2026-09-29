// server.ts
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

interface TaxInput {
  year: number;
  daysWorked: number;
  dailyIncome: number;
  totalIncome: number;
}

function calculateTax2023(daysWorked: number, totalIncome: number): number {
  if (daysWorked > 300) {
    return totalIncome * 0.15;
  } else {
    return totalIncome * 0.10;
  }
}

function calculateTax2024(dailyIncome: number): number {
  if (dailyIncome > 20000) {
    return dailyIncome * 0.10 * 365;
  } else {
    return dailyIncome * 0.05 * 365;
  }
}

app.post("/calculate-tax", (req: Request, res: Response) => {
  const { year, daysWorked, dailyIncome, totalIncome } = req.body as TaxInput;
  let tax: number;

  if (year === 2023) {
    tax = calculateTax2023(daysWorked, totalIncome);
  } else if (year === 2024) {
    tax = calculateTax2024(dailyIncome);
  } else {
    return res.status(400).json({ error: "Year not supported" });
  }

  res.json({ tax });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});