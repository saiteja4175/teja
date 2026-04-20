import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [goal, setGoal] = useState("loss");

  // BMI Calculation
  const calculateBMI = () => {
    if (!height || !weight) return;
    const h = height / 100;
    const value = (weight / (h * h)).toFixed(2);
    setBmi(value);
  };

  // BMI Category
  const getBMICategory = () => {
    if (!bmi) return "";
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal (Healthy)";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  // AI Workout Suggestions
  const getWorkout = () => {
    if (goal === "loss") {
      return ["🏃 Running - 20 min", "🔥 Jumping Jacks - 30", "🦵 Squats - 20"];
    }
    if (goal === "gain") {
      return ["💪 Pushups - 20", "🏋️ Deadlifts - 3 sets", "🍗 Pullups - 10"];
    }
    return ["🏋️ Bench Press", "🔥 Plank - 60 sec", "🦿 Lunges - 20"];
  };

  // AI Diet Suggestions
  const getDiet = () => {
    if (goal === "loss")
      return "🥗 AI: Low carbs, high protein, fruits, more water.";
    if (goal === "gain")
      return "🍗 AI: High calories, milk, eggs, rice, banana shake.";
    return "💪 AI: Balanced protein + healthy carbs.";
  };

  return (
    <div className="container">
      <h1>🏋️ Fitness AI Dashboard</h1>

      {/* Goal Selection */}
      <div className="card">
        <h2>Select Goal</h2>
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="loss">Weight Loss</option>
          <option value="gain">Weight Gain</option>
          <option value="muscle">Muscle Building</option>
        </select>
      </div>

      {/* BMI Section */}
      <div className="card">
        <h2>BMI Calculator</h2>

        <input
          type="number"
          placeholder="Height (cm)"
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          onChange={(e) => setWeight(e.target.value)}
        />

        <button onClick={calculateBMI}>Calculate BMI</button>

        {bmi && (
          <>
            <h3>Your BMI: {bmi}</h3>
            <p>Category: {getBMICategory()}</p>
          </>
        )}
      </div>

      {/* BMI Categories Table */}
      <div className="card">
        <h2>📊 BMI Categories</h2>
        <table className="bmi-table">
          <thead>
            <tr>
              <th>BMI Value</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Less than 18.5</td><td>Underweight</td></tr>
            <tr><td>18.5 - 24.9</td><td>Normal (Healthy)</td></tr>
            <tr><td>25 - 29.9</td><td>Overweight</td></tr>
            <tr><td>30+</td><td>Obese</td></tr>
          </tbody>
        </table>
      </div>

      {/* AI Workout */}
      <div className="card">
        <h2>🤖 AI Workout Suggestion</h2>
        <ul>
          {getWorkout().map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>
      </div>

      {/* AI Diet */}
      <div className="card">
        <h2>🥗 AI Diet Suggestion</h2>
        <p>{getDiet()}</p>
      </div>
    </div>
  );
}

export default App;