// Enhanced WaterTracker.js will be built here.
// Starting template from your current version. We will update step-by-step.

import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import PageLayout from "../components/PageLayout";
import Card from "../components/Card";


function HydrationHero() {
    return (
        <div
            style={{
                background: "linear-gradient(135deg, #90CAF9, #42A5F5)",
                padding: "25px",
                borderRadius: "12px",
                color: "white",
                textAlign: "center",
                marginBottom: "20px",
            }}
        >
            <h2 style={{ marginBottom: "6px" }}>💧 Hydration Center</h2>
            <p style={{ fontSize: "15px", opacity: 0.9 }}>Stay hydrated. Stay energized.</p>
        </div>
    );
}

function HydrationProgress({ cupsDrank, dailyGoal }) {
    const percent = Math.min((cupsDrank / dailyGoal) * 100, 100);

    return (
        <div style={{ marginTop: "20px", width: "100%" }}>
            <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
                Daily Hydration Progress
            </p>

            <div
                style={{
                    background: "#E3F2FD",
                    borderRadius: "30px",
                    height: "16px",
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: `${percent}%`,
                        background: "#42A5F5",
                        borderRadius: "30px",
                        transition: "width 0.4s ease",
                    }}
                />
            </div>

            <p style={{ marginTop: "8px", fontSize: "14px", opacity: 0.8 }}>
                {percent.toFixed(0)}% of your goal reached
            </p>
        </div>
    );
}

function WeeklyHistory({ history, dailyGoal }) {
    const lastSeven = Object.keys(history).slice(-7);

    return (
        <div style={{ marginTop: "25px" }}>
            <h4 style={{ marginBottom: "12px" }}>Weekly Hydration</h4>

            {lastSeven.map((date, i) => {
                const amount = history[date] || 0;
                const percent = Math.min((amount / dailyGoal) * 100, 100);

                return (
                    <div
                        key={i}
                        style={{
                            marginBottom: "12px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        {/* Date label */}
                        <span style={{ width: "90px", fontSize: "14px", opacity: 0.8 }}>
                            {date}
                        </span>

                        {/* Bar container */}
                        <div
                            style={{
                                flex: 1,
                                height: "14px",
                                background: "#E3F2FD",
                                borderRadius: "10px",
                                overflow: "hidden",
                            }}
                        >
                            {/* Fill bar */}
                            <div
                                style={{
                                    height: "100%",
                                    width: `${percent}%`,
                                    background: "#42A5F5",
                                    transition: "0.4s",
                                    borderRadius: "10px",
                                }}
                            />
                        </div>

                        {/* Cup count */}
                        <span style={{ width: "40px", textAlign: "right", fontSize: "14px" }}>
                            {amount} cups
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

function HydrationInsights({ cupsDrank, dailyGoal }) {
    return (
        <div
            style={{
                marginTop: "25px",
                padding: "20px",
                background: "#F5F7FA",
                borderRadius: "12px",
                lineHeight: "1.6",
            }}
        >
            <h3 style={{ marginBottom: "10px" }}>💧 Hydration Insights</h3>

            <p style={{ opacity: 0.85 }}>
                Understanding your hydration needs helps you perform better and feel better.
            </p>

            <h4 style={{ marginTop: "20px" }}>📘 Recommended Intake</h4>
            <ul style={{ paddingLeft: "20px" }}>
                <li><strong>Average adult:</strong> 2–3 liters (68–100 oz)</li>
                <li><strong>Workout days:</strong> +0.5–1 liter (16–32 oz)</li>
                <li><strong>Heavy training:</strong> +1.5 liters (50 oz+)</li>
            </ul>

            <h4 style={{ marginTop: "20px" }}>🔄 Quick Conversions</h4>
            <ul style={{ paddingLeft: "20px" }}>
                <li>1 cup = 8 oz = 0.24 liters</li>
                <li>1 liter = 33.8 oz = 4.2 cups</li>
                <li>1 gallon = 128 oz = 3.78 liters</li>
            </ul>

            <h4 style={{ marginTop: "20px" }}>💡 Why Water Matters</h4>
            <ul style={{ paddingLeft: "20px" }}>
                <li>Boosts metabolism & calorie burn</li>
                <li>Improves muscle strength & endurance</li>
                <li>Reduces cravings & supports fat loss</li>
                <li>Aids digestion & nutrient absorption</li>
                <li>Improves focus, skin, and energy levels</li>
            </ul>

            <p style={{ marginTop: "20px", fontStyle: "italic", opacity: 0.9 }}>
                {cupsDrank < dailyGoal
                    ? `You're ${dailyGoal - cupsDrank} cups away from your goal — keep it going! 💧`
                    : "You've hit your daily goal! Amazing consistency! 🚀"}
            </p>
        </div>
    );
}


export default function WaterTracker() {
    const [cupsDrank, setCupsDrank] = useLocalStorage("cupsDrank", 0);
    const [dailyGoal, setDailyGoal] = useLocalStorage("waterGoal", 8);
    const [waterHistory, setWaterHistory] = useLocalStorage("waterHistory", {});
    const [hydrationStreak, setHydrationStreak] = useLocalStorage("hydrationStreak", 0);

    useEffect(() => {
        const today = new Date().toLocaleDateString();
        const lastDate = localStorage.getItem("lastWaterDate");

        if (lastDate !== today) {
            setWaterHistory(prev => ({ ...prev, [today]: cupsDrank }));

            if (cupsDrank >= dailyGoal) {
                setHydrationStreak(prev => prev + 1);
            } else {
                setHydrationStreak(0);
            }

            setCupsDrank(0);
            localStorage.setItem("lastWaterDate", today);
        }
    }, []);

    const addCup = () => {
        if (cupsDrank < dailyGoal) setCupsDrank(cupsDrank + 1);
    };

    const resetCups = () => setCupsDrank(0);

    const updateGoal = (e) => {
        const value = Number(e.target.value);
        if (value >= 1 && value <= 30) setDailyGoal(value);
    };

    return (
        <PageLayout title="Water Tracker">

            <HydrationHero />
            <Card>
                <div style={{ marginBottom: "20px" }}>
                    <label style={{ fontSize: "16px", marginRight: "10px" }}>Daily Goal:</label>
                    <input
                        type="number"
                        value={dailyGoal}
                        onChange={updateGoal}
                        min="1"
                        max="30"
                        style={{ padding: "6px", width: "70px", borderRadius: "6px", border: "1px solid #ccc" }}
                    />
                </div>

                <h3>Hydration Streak: {hydrationStreak} days</h3>

                <p style={{ fontSize: "18px", marginBottom: "15px" }}>
                    You’ve had <strong>{cupsDrank}</strong> out of {dailyGoal} cups today.
                </p>

                <HydrationProgress cupsDrank={cupsDrank} dailyGoal={dailyGoal} />

                <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                    <button onClick={addCup} style={buttonStyle}>Add Cup</button>
                    <button onClick={resetCups} style={{ ...buttonStyle, background: "#ccc", color: "#333" }}>Reset</button>
                </div>

                <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap" }}>
                    {Array.from({ length: dailyGoal }).map((_, index) => (
                        <span
                            key={index}
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                margin: "6px",
                                backgroundColor: index < cupsDrank ? "#4CAF50" : "#e0e0e0",
                                transition: "0.25s",
                            }}
                        />
                    ))}
                </div>


                <WeeklyHistory history={waterHistory} dailyGoal={dailyGoal} />


                {/* Hydration Insights */}
                <HydrationInsights cupsDrank={cupsDrank} dailyGoal={dailyGoal} />



            </Card>
        </PageLayout>
    );
}




// Button Style
const buttonStyle = {
    padding: "10px 16px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px"
};