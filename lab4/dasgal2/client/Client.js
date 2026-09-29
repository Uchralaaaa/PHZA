import axios from "axios";
async function getTax() {
    const response = await axios.post("http://localhost:3000/tax2023", {
        income: 5000000,
        workedDays: 320
    });
    console.log("Tax:", response.data.tax);
}
getTax();
//# sourceMappingURL=Client.js.map