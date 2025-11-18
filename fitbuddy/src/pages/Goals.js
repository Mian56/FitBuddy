import { useState, useEffect } from "react";

const Goals = () => {
    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState("");

    // Initialize goals from localStorage on component mount
    useEffect(() => {
        const storedGoals = localStorage.getItem("goals");
        if (storedGoals) {
            setGoals(JSON.parse(storedGoals));
        }
    }, []);

    // Save goals to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("goals", JSON.stringify(goals));
    }, [goals]);

    const addGoal = () => {
        if (newGoal.trim() === "") return;
        setGoals([...goals, { text: newGoal, completed: false }]);
        setNewGoal("");
    };

    const toggleGoal = (index) => {
        const updatedGoals = [...goals];
        updatedGoals[index].completed = !updatedGoals[index].completed;
        setGoals(updatedGoals);
    };

    const deleteGoal = (index) => {
        setGoals(goals.filter((_, i) => i !== index));
    };

    return (
        <section>
            <h2>Goals Tracker</h2>
            <div>
                <input
                    type="text"
                    value={newGoal}
                    onChange={(e) => setNewGoal(e.target.value)}
                    placeholder="Enter your goal"
                />
                <button onClick={addGoal}>Add Goal</button>
            </div>
            <ul>
                {goals.map((goal, index) => (
                    <li key={index}>
            <span
                onClick={() => toggleGoal(index)}
                style={{
                    textDecoration: goal.completed ? "line-through" : "none",
                    cursor: "pointer",
                }}
            >
              {goal.text}
            </span>
                        <button onClick={() => deleteGoal(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Goals;
