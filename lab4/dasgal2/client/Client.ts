import axios from "axios";

async function run() {
    try {
        const res2023 = await axios.post("http://localhost:3000/tax2023", {
            income: 5000000,
            workedDays: 320
        });
        console.log("2023 оны татвар:", res2023.data.tax);

        const res2024 = await axios.post("http://localhost:3000/tax2024", {
            income: 25000
        });
        console.log("2024 оны татвар:", res2024.data.tax);
    } catch (err) {
        console.error(err);
    }
}

run();