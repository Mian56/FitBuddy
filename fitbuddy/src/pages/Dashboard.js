import useLocalStorage from "../hooks/useLocalStorage";
import StreakCard from "../components/StreakCard";

export default function Dashboard() {
    const [workoutStreak, setWorkoutStreak] = useLocalStorage("workoutStreak", 0);
    const [hydrationStreak, setHydrationStreak] = useLocalStorage("hydrationStreak", 0);
    const [calorieStreak, setCalorieStreak] = useLocalStorage("calorieStreak", 0);

    const incrementStreak = (setter) => setter((prev) => prev + 1);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Dashboard</h2>
            <p>Track your fitness streak and progress:</p>

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
    );
}
