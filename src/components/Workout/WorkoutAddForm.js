import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Workout.css";

const WOinit = {
  date: "",
  km: "",
};

export default function WorkoutAddForm({ onAdd }) {
  const [workout, setWorkout] = useState(WOinit);

  const changeWorkout = (event) => {
    const { target } = event;
    setWorkout((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const addWorkout = (event) => {
    event.preventDefault();
    if (workout.km == 0 || !workout.date)
        return;   
    onAdd(workout);
    setWorkout(WOinit);
  };

  return (
    <form className="workout">
      <div className="workout-input">
        <label className="workout-title">Дата (ДД.ММ.ГГГГ)</label>
        <input
          className="workout-value"
          type="date"
          name="date"
          value={workout.date}
          onChange={changeWorkout}
        />
      </div>
      <div className="workout-input">
        <label className="workout-title">Пройдено км</label>
        <input
          className="workout-value"
          type="number"
          name="km"
          value={workout.km}
          onChange={changeWorkout}
        />
      </div>
      <button className="workout-add" onClick={addWorkout}>OK</button>
    </form>
  );
}

WorkoutAddForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
