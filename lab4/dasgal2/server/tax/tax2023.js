export class Tax2023 {
    calculate(income, workedDays) {
        if (workedDays > 300) {
            return income * 0.15;
        }
        return income * 0.10;
    }
}
//# sourceMappingURL=tax2023.js.map