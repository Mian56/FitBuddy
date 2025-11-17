// src/pages/Goals.js
import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import GoalItem from "../components/GoalItem";


// Check if goals need to reset
useEffect(() => {
    const lastDate = localStorage.getItem("lastGoalDate");
    const today = new Date().toLocaleDateString();

    if (lastDate !== today) {
        // Clear completion state
        const resetGoals = goals.map(goal => ({ ...goal, completed: false }));
        setGoals(resetGoals);
        localStorage.setItem("lastGoalDate", today);
    }
}, [goals, setGoals]);


export default function Goals() {
    const [goals, setGoals] = useLocalStorage("goals", [
        { name: "Drink 8 cups of water", completed: false },
        { name: "Burn 400 calories", completed: false },
        { name: "Walk 10,000 steps", completed: false }
    ]);

    import { useState, useEffect } from "react";

    const addGoal = () => {
        if (!newGoal.trim()) return;
        setGoals([...goals, { name: newGoal, completed: false }]);
        setNewGoal(""); // clear input field
    };

    const toggleGoal = (index) => {
        const updatedGoals = [...goals];
        updatedGoals[index].completed = !updatedGoals[index].completed;
        setGoals(updatedGoals);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Your Daily Goals</h2>

            {/* Add Goal Form */}
            <input
                type="text"
                placeholder="Add a new goal..."
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                style={{ marginRight: "10px", padding: "5px" }}
            />
            <button onClick={addGoal} style={{ padding: "5px 10px" }}>Add</button>

            {/* Goals List */}
            <ul style={{ marginTop: "20px" }}>
                {goals.map((goal, index) => (
                    <GoalItem
                        key={index}
                        goal={goal}
                        index={index}
                        toggleGoal={toggleGoal}
                    />
                ))}
            </ul>
        </div>
    );
}
