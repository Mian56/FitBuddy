<h1 align="center">💪 FitBuddy – Personal Fitness & Habit Tracking App</h1>

<p align="center">
  <strong>A React-based fitness tracker with workouts, hydration, calories, streaks, and weekly summaries.</strong><br/>
  🚀 Live Demo: <a href="https://fitbuddytracker.netlify.app/">https://fitbuddytracker.netlify.app/</a>
</p>

<hr/>

<ul>
<img width="1665" height="861" alt="image" src="https://github.com/user-attachments/assets/1a38f0f4-f40b-409b-86b4-2d598ee5253c" />
<img width="1101" height="809" alt="image" src="https://github.com/user-attachments/assets/c9f4df86-7d93-4e04-9e4e-3cb3d569d0a7" />
<img width="1351" height="822" alt="image" src="https://github.com/user-attachments/assets/9ddce928-0e23-42a3-b974-fac241e5f2f8" />
</ul>

<hr/>

<h2>✨ Features</h2>

<h3>🔥 1. Workout Logger</h3>
<ul>
  <li>Log workouts with type, duration, calories, and notes</li>
  <li>Automatic workout streak tracking</li>
  <li>Delete individual logs or clear all</li>
  <li>Daily streak resets automatically when no workout is logged</li>
</ul>

<h3>💧 2. Hydration Tracker</h3>
<ul>
  <li>Add cups of water</li>
  <li>Adjust daily hydration goal</li>
  <li>Weekly hydration history</li>
  <li>Hydration streak increases when you hit your goal</li>
  <li>Animated water droplets + progress bar</li>
</ul>

<h3>🍽 3. Calorie Logger</h3>
<ul>
  <li>Log meals with calories + notes</li>
  <li>Daily calorie summary</li>
  <li>Weekly calorie chart (dashboard)</li>
  <li>Calorie streak increases as you track daily</li>
</ul>

<h3>📊 4. Dashboard Overview</h3>
<ul>
  <li>Daily summary (hydration, calories, workout completion)</li>
  <li>Weekly calories graph</li>
  <li>Streak cards</li>
  <li>Clean UI with optional terminal/cyber theme</li>
</ul>

<h3>🛟 5. Local Storage Persistence</h3>
<p>No backend. All user data is stored locally using a custom <code>useLocalStorage</code> hook. Works offline.</p>

<hr/>

<h2>🛠️ Tech Stack</h2>

<ul>
  <li><strong>React.js</strong></li>
  <li>JavaScript (ES6+)</li>
  <li>Custom Hooks</li>
  <li>Netlify Deployment</li>
  <li>LocalStorage</li>
</ul>

<hr/>

<h2>📁 Project Structure</h2>

<pre>
fitbuddy/
│── src/
│   ├── components/
│   │   ├── PageLayout.js
│   │   ├── Card.js
│   │   ├── StreakCard.js
│   │   └── WeeklyChart.js
│   ├── pages/
│   │   ├── Dashboard.js
│   │   ├── WorkoutLogger.js
│   │   ├── WaterTracker.js
│   │   ├── FoodLogger.js
│   │   └── Goals.js (coming soon)
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.js
│   ├── index.js
│
└── README.md
</pre>

<hr/>

<h2>🚀 Getting Started</h2>

<h3>1. Clone</h3>
<pre>git clone https://github.com/your-username/fitbuddy.git
cd fitbuddy</pre>

<h3>2. Install Dependencies</h3>
<pre>npm install</pre>

<h3>3. Start Development Server</h3>
<pre>npm start</pre>

<h3>4. Build for Production</h3>
<pre>npm run build</pre>

<hr/>

<h2>🌐 Deployment (Netlify)</h2>
<p>Deploy easily by dragging the <code>build/</code> folder into Netlify:</p>

<pre>npm run build</pre>

<hr/>

<h2>📌 Roadmap</h2>
<ul>
  <li>Dark mode</li>
  <li>User accounts (Firebase / Supabase)</li>
  <li>AI workout suggestions</li>
  <li>Hydration reminders</li>
  <li>Weight tracking</li>
  <li>Mobile App (React Native or Kotlin)</li>
</ul>

<hr/>

<h2>🤝 Contributing</h2>
<p>Pull requests welcome! Open an issue before major changes.</p>

<hr/>

<h2>📝 License</h2>
<p>MIT License</p>

<hr/>

