class Account {
    protected accountNumber: string;
    protected owner: string;
    protected balance: number;

    constructor(accountNumber: string, owner: string, balance: number) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`${amount}₮ нэмэгдлээ`);
    }

    withdraw(amount: number): void {
        console.log("Base withdraw ашиглахгүй");
    }

    getAccountInfo(): void {
        console.log(`Данс: ${this.accountNumber}`);
        console.log(`Эзэмшигч: ${this.owner}`);
        console.log(`Үлдэгдэл: ${this.balance}`);
    }
}

// ----------------------
class SavingsAccount extends Account {

    withdraw(amount: number): void {
        if (this.balance - amount >= 1000) {
            this.balance -= amount;
            console.log(`${amount}₮ татлаа`);
        } else {
            console.log("Үлдэгдэл 1000-аас бага болж болохгүй");
        }
    }

    calculateInterest(rate: number): number {
        const interest = this.balance * rate;
        console.log(`Хүү: ${interest}`);
        return interest;
    }
}

// ----------------------
class CheckingAccount extends Account {
    private overdraftLimit: number;

    constructor(accountNumber: string, owner: string, balance: number, overdraftLimit: number) {
        super(accountNumber, owner, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
            console.log(`${amount}₮ татлаа`);
        } else {
            console.log("Overdraft limit хэтэрсэн");
        }
    }

    checkOverdraft(): void {
        console.log(`Overdraft limit: ${this.overdraftLimit}`);
    }
}

// ======================
// MAIN (console test)
// ======================

console.log("=== Savings ===");
const s = new SavingsAccount("SA1", "Bat", 5000);
s.getAccountInfo();
s.deposit(2000);
s.withdraw(4000);
s.withdraw(3000); // fail
s.calculateInterest(0.1);

console.log("\n=== Checking ===");
const c = new CheckingAccount("CA1", "Bold", 2000, 1000);
c.getAccountInfo();
c.deposit(1000);
c.withdraw(2500);
c.withdraw(2000); // fail
c.checkOverdraft();