import useLocalStorage from "../hooks/useLocalStorage";
import StreakCard from "../components/StreakCard";

export default function Dashboard() {
    const [workoutStreak, setWorkoutStreak] = useLocalStorage("workoutStreak", 0);
    const [hydrationStreak, setHydrationStreak] = useLocalStorage("hydrationStreak", 0);
    const [calorieStreak, setCalorieStreak] = useLocalStorage("calorieStreak", 0);

    const incrementStreak = (setter) => setter((prev) => prev + 1);

    return (
        <div style={{
            padding: "40px",
            maxWidth: "900px",
            margin: "0 auto",
        }}>
            <h2 style={{
                fontSize: "32px",
                marginBottom: "10px",
                color: "#1A3D6D"
            }}>
                Dashboard
            </h2>

            <p style={{
                marginBottom: "30px",
                color: "#444",
                fontSize: "16px"
            }}>
                Track your daily habits and streaks:
            </p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
            }}>
                <StreakCard
                    title="Workout Streak"
                    count={workoutStreak}
                    onIncrement={() => incrementStreak(setWorkoutStreak)}
                />

                <StreakCard
                    title="Hydration Streak"
                    count={hydrationStreak}
                    onIncrement={() => incrementStreak(setHydrationStreak)}
                />

                <StreakCard
                    title="Calories Tracked"
                    count={calorieStreak}
                    onIncrement={() => incrementStreak(setCalorieStreak)}
                />
            </div>
        </div>
    );
}
