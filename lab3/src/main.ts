import { Material } from "./models/Material.js";
import { Chair, Table, Drawer } from "./models/Furniture.js";
import { CutOptimizer } from "./models/CutOptimizer.js";
import { CostCalculator } from "./models/CostCalculator.js";
import { ProfitEstimator } from "./models/ProfitEstimator.js";
import { MaterialCalculator } from "./models/MaterialCalculator.js";

// Материал үүсгэх
const wood = new Material("Мод", 5000, 200, 100);

// Сандал болон ширээ үүсгэх
const chair1 = new Chair("Сандал", wood, 40, 40);
const chair2 = new Chair("Сандал", wood, 45, 45);
const table1 = new Table("Ширээ", wood, 120, 60);
//shine nemsen
const drawer1 = new Drawer("Шүүгээ", wood, 60, 70);

// Материалын зүсэлтийг оновчлох
const isOptimized = CutOptimizer.optimizeCutting(wood, [
    { width: chair1.requiredWidth, height: chair1.requiredHeight },
    { width: chair2.requiredWidth, height: chair2.requiredHeight },
    { width: table1.requiredWidth, height: table1.requiredHeight },
]);

console.log(`Материал оновчтой зүсэгдсэн үү? ${isOptimized ? "Тийм" : "Үгүй"}`);

// Зардлын тооцоолол
const totalCost = CostCalculator.calculateTotalCost([chair1, chair2, table1]);
console.log(`Нийт зардал: ${totalCost}₮`);

// Ашгийн тооцоо (1 сарын дараах)
const estimatedProfit = ProfitEstimator.estimateProfit([chair1, chair2, table1], 15000, 1);
console.log(`1 сарын дараах борлуулалтын ашиг: ${estimatedProfit.toFixed(2)}₮`);

//Material tootsoh
const remaining = MaterialCalculator.calculateRemainingMaterial(
    wood,
    [chair1, chair2, table1, drawer1]
);

console.log(`Үлдсэн материал: ${remaining}`);