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
        <div style={{ padding: "20px" }}>
            <h2>Calorie Tracker</h2>
            <p>Log what you eat and track your daily calories.</p>

            {/* Form */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Meal (e.g. Breakfast - Eggs)"
                    value={meal}
                    onChange={(e) => setMeal(e.target.value)}
                    style={{ marginRight: "10px", padding: "5px" }}
                />
                <input
                    type="number"
                    placeholder="Calories"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    style={{ marginRight: "10px", padding: "5px" }}
                />
                <input
                    type="text"
                    placeholder="Notes (optional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    style={{ marginRight: "10px", padding: "5px" }}
                />
                <button onClick={addFood} style={{ padding: "5px 10px" }}>
                    Add Meal
                </button>
            </div>

            {/* Food List */}
            <ul>
                {foods.map((food, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                        <strong>{food.meal}</strong> — {food.calories} cal
                        <br />
                        {food.notes && (
                            <>
                                <em>Notes:</em> {food.notes} <br />
                            </>
                        )}
                        <small style={{ color: "#666" }}>{food.date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}
