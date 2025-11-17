// src/components/GoalItem.js
export default function GoalItem({ goal, index, toggleGoal }) {
    return (
        <div className="goal-card" style={{
            padding: "10px",
            backgroundColor: goal.completed ? "#d1fae5" : "#f3f4f6",
            borderRadius: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <span>{goal.name}</span>
            <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => toggleGoal(index)}
            />
        </div>
    );
}
