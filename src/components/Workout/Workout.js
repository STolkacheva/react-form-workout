import React from "react";
import WorkoutAddForm from "./WorkoutAddForm.js";
import WorkoutList from "./WorkoutList.js";
import { useState } from "react";

export default function Workout() {
  const [workoutList, setWorkoutList] = useState([]);

  const addWorkout = (workout) => {
    for (let index = 0; index < workoutList.length; index++) {
      if (workoutList[index].date == workout.date) {
        workoutList[index].km = Number(workoutList[index].km) + Number(workout.km);
        setWorkoutList((prev) => prev.map((w) => w));
        return;
      }
    }
    setWorkoutList((prev) => [...prev, workout]);
  };

  const deleteWorkout = (date) => {
    const newlist = workoutList.filter((item) => item.date !== date);
    setWorkoutList(newlist);
  };

  const editWorkout = (workout) => {
    // not work
    console.log(workout);
  };

  return (
    <React.Fragment>
      <WorkoutAddForm onAdd={addWorkout} />
      <WorkoutList
        list={workoutList}
        onRemove={deleteWorkout}
        onEdit={editWorkout}
      />
    </React.Fragment>
  );
}
