// client.ts
import axios from "axios";

async function getTax(year: number, daysWorked: number, dailyIncome: number, totalIncome: number) {
  try {
    const response = await axios.post("http://localhost:3000/calculate-tax", {
      year,
      daysWorked,
      dailyIncome,
      totalIncome,
    });
    console.log(`Татвар: ${response.data.tax}₮`);
  } catch (error) {
    console.error(error);
  }
}

// Жишээ хэрэглээ
getTax(2023, 320, 0, 5000000); // 2023 оны татвар
getTax(2024, 0, 25000, 0);     // 2024 оны татвар