export default function StreakCard({ title, count, onIncrement }) {
    return (
        <div
            style={{
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "15px",
                backgroundColor: "#f2f2f2",
                boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
            }}
        >
            <h3>{title}</h3>
            <p style={{ fontSize: "24px", margin: "10px 0" }}>{count} Days</p>
            <button
                style={{
                    backgroundColor: "#4CAF50",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    color: "white",
                }}
                onClick={onIncrement}
            >
                Add 1 Day
            </button>
        </div>
    );
}
