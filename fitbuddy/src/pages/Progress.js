// src/pages/Progress.js
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function Progress() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const foods = JSON.parse(localStorage.getItem("foods")) || [];

        // Group by date
        const grouped = foods.reduce((acc, item) => {
            const date = item.date.split(",")[0];
            const calories = Number(item.calories);
            acc[date] = (acc[date] || 0) + calories;
            return acc;
        }, {});

        const formattedData = Object.keys(grouped).map(date => ({
            date,
            calories: grouped[date]
        }));

        setChartData(formattedData);
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Progress Overview</h2>
            <p>See your calories logged over time.</p>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="calories" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
