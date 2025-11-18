// src/pages/Goals.js
import { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

const Goals = () => {
    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState("");

    // Load goals on mount
    useEffect(() => {
        const storedGoals = localStorage.getItem("goals");
        if (storedGoals) {
            setGoals(JSON.parse(storedGoals));
        }
    }, []);

    // Save goals on change
    useEffect(() => {
        localStorage.setItem("goals", JSON.stringify(goals));
    }, [goals]);

    const addGoal = () => {
        if (!newGoal.trim()) return;

        setGoals([...goals, { text: newGoal, completed: false }]);
        setNewGoal("");
    };

    const toggleGoal = (index) => {
        const updated = [...goals];
        updated[index].completed = !updated[index].completed;
        setGoals(updated);
    };

    const deleteGoal = (index) => {
        setGoals(goals.filter((_, i) => i !== index));
    };

    return (
        <PageLayout title="Goals Tracker">
            <Card>
                {/* Input Section */}
                <div style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "20px"
                }}>
                    <input
                        type="text"
                        value={newGoal}
                        onChange={(e) => setNewGoal(e.target.value)}
                        placeholder="Enter your goal"
                        style={inputStyle}
                    />
                    <button onClick={addGoal} style={addButtonStyle}>
                        Add
                    </button>
                </div>

                {/* Goals List */}
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {goals.length === 0 && (
                        <p style={{ opacity: 0.6 }}>No goals yet. Add one!</p>
                    )}

                    {goals.map((goal, index) => (
                        <li
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "10px 0",
                                borderBottom: "1px solid #eee"
                            }}
                        >
                            <span
                                onClick={() => toggleGoal(index)}
                                style={{
                                    cursor: "pointer",
                                    textDecoration: goal.completed ? "line-through" : "none",
                                    color: goal.completed ? "#4CAF50" : "#333",
                                    fontSize: "16px"
                                }}
                            >
                                {goal.text}
                            </span>

                            <button
                                onClick={() => deleteGoal(index)}
                                style={deleteButtonStyle}
                            >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            </Card>
        </PageLayout>
    );
};

export default Goals;


// Styles
const inputStyle = {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px"
};

const addButtonStyle = {
    padding: "10px 16px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px"
};

const deleteButtonStyle = {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "18px"
};
