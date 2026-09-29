"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax2024 = void 0;
class Tax2024 {
    calculate(income) {
        if (income > 20000) {
            return income * 0.10 * 365;
        }
        return income * 0.05 * 365;
    }
}
exports.Tax2024 = Tax2024;
