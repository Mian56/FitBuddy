// src/pages/FoodLogger.js
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function FoodLogger() {
    const [foods, setFoods] = useLocalStorage("foods", []);
    const [meal, setMeal] = useState("");
    const [calories, setCalories] = useState("");
    const [notes, setNotes] = useState("");

    const addFood = () => {
        if (!meal.trim() || !calories.trim()) return;

        const newFood = {
            meal,
            calories,
            notes: notes || "",
            date: new Date().toLocaleString()
        };

        setFoods([...foods, newFood]);
        setMeal("");
        setCalories("");
        setNotes("");
    };

    return (
        <div
            style={{
                padding: "30px",
                maxWidth: "800px",
                margin: "0 auto"
            }}
        >
            <h2
                style={{
                    fontSize: "28px",
                    marginBottom: "10px",
                    color: "#1A3D6D"
                }}
            >
                🍽️ Calorie Tracker
            </h2>

            <p
                style={{
                    marginBottom: "20px",
                    fontSize: "16px",
                    color: "#444"
                }}
            >
                Log your meals and keep track of your daily calorie intake.
            </p>

            {/* --- Input Card --- */}
            <div
                style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "12px",
                    marginBottom: "25px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}
            >
                <h3
                    style={{
                        marginBottom: "15px",
                        color: "#2F4A33"
                    }}
                >
                    ➕ Add a Meal
                </h3>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px"
                    }}
                >
                    <input
                        type="text"
                        placeholder="Meal name (e.g., Chicken & Rice)"
                        value={meal}
                        onChange={(e) => setMeal(e.target.value)}
                        style={{
                            flex: "1",
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ccc"
                        }}
                    />

                    <input
                        type="number"
                        placeholder="Calories"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        style={{
                            width: "150px",
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ccc"
                        }}
                    />

                    <input
                        type="text"
                        placeholder="Notes (optional)"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        style={{
                            flex: "1",
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ccc"
                        }}
                    />

                    <button
                        onClick={addFood}
                        style={{
                            padding: "10px 15px",
                            background: "#1A3D6D",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer"
                        }}
                    >
                        Add Meal
                    </button>
                </div>
            </div>

            {/* --- Food List --- */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                }}
            >
                {foods.map((food, index) => (
                    <div
                        key={index}
                        style={{
                            background: "white",
                            padding: "15px",
                            borderRadius: "10px",
                            boxShadow: "0 3px 8px rgba(0,0,0,0.08)"
                        }}
                    >
                        <strong style={{ fontSize: "18px" }}>
                            {food.meal}
                        </strong>{" "}
                        <span style={{ color: "#2F4A33" }}>
                            — {food.calories} cal
                        </span>

                        <div style={{ marginTop: "6px" }}>
                            {food.notes && (
                                <div style={{ marginBottom: "4px" }}>
                                    <b>📝 Notes:</b> {food.notes}
                                </div>
                            )}

                            <small style={{ color: "#777" }}>
                                {food.date}
                            </small>
                        </div>
                    </div>
                ))}
            </div>

            {foods.length === 0 && (
                <p
                    style={{
                        marginTop: "20px",
                        textAlign: "center",
                        color: "#777",
                        fontStyle: "italic"
                    }}
                >
                    No meals logged yet — start by adding your first one!
                </p>
            )}
        </div>
    );
}
