import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Statistics = () => {
    const [getDonated, setGetDonated] = useState([]);

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem("donations"));
        setGetDonated(storageData);
    }, [])

    return (
        <div>
            <Chart
                chartType="PieChart"
                data={[
                    ["Task", "Hours per Day"],
                    ["Your Donation", getDonated.length],
                    ["Total Donation", 12]
                ]}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
};

export default Statistics;