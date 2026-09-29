import type { TaxStrategy } from "./taxStrategy.js"; 

export class Tax2023 implements TaxStrategy {

    calculate(income: number, workedDays: number): number {

        if(workedDays > 300){
            return income * 0.15
        }

        return income * 0.10
    }

}