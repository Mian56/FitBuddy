export default function PageLayout({ title, children }) {
    return (
        <div style={styles.wrapper}>
            <h1 style={styles.title}>{title}</h1>
            <div style={styles.content}>{children}</div>
        </div>
    );
}

const styles = {
    wrapper: {
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 20px",
    },
    title: {
        fontSize: "28px",
        marginBottom: "20px",
        fontWeight: "700",
        color: "#1a1a1a",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
    }
};
