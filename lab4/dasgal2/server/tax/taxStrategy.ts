export interface TaxStrategy {
    calculate(income: number, workedDays: number): number
}