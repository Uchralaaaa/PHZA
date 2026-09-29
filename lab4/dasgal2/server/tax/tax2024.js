import { TaxStrategy } from "./taxStrategy";
export class Tax2024 {
    calculate(income) {
        if (income > 20000) {
            return income * 0.10 * 365;
        }
        return income * 0.05 * 365;
    }
}
//# sourceMappingURL=tax2024.js.map