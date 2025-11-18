export default function Card({ children }) {
    return (
        <div style={styles.card}>
            {children}
        </div>
    );
}

const styles = {
    card: {
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        border: "1px solid #f0f0f0"
    }
};
