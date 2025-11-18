// src/pages/Progress.js
import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

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

        const formatted = Object.keys(grouped).map((date) => ({
            date,
            calories: grouped[date],
        }));

        setChartData(formatted);
    }, []);

    return (
        <div style={{
            padding: "30px",
            maxWidth: "800px",
            margin: "0 auto"
        }}>
            <h2 style={{
                fontSize: "28px",
                marginBottom: "10px",
                color: "#1A3D6D"
            }}>
                📈 Progress Overview
            </h2>

            <p style={{
                marginBottom: "20px",
                color: "#444",
                fontSize: "16px"
            }}>
                Track your calorie intake trend over time.
            </p>

            {/* Chart Card */}
            <div style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" stroke="#1A3D6D" />
                        <YAxis stroke="#1A3D6D"/>
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="calories"
                            stroke="#4E79A7"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* No Data Message */}
            {chartData.length === 0 && (
                <p style={{
                    marginTop: "15px",
                    textAlign: "center",
                    fontStyle: "italic",
                    color: "#777"
                }}>
                    No data yet — start logging meals to see your progress!
                </p>
            )}
        </div>
    );
}
