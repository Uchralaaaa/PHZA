import type { TaxStrategy } from "./taxStrategy.js";
export class Tax2024 implements TaxStrategy {

    calculate(income: number): number {

        if(income > 20000){
            return income * 0.10 * 365
        }

        return income * 0.05 * 365
    }

}