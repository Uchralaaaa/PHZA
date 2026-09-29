"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax2023 = void 0;
class Tax2023 {
    calculate(income, workedDays) {
        if (workedDays > 300) {
            return income * 0.15;
        }
        return income * 0.10;
    }
}
exports.Tax2023 = Tax2023;
