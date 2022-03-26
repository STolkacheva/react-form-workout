import React from "react";
import WorkoutAddForm from "./WorkoutAddForm.js";
import WorkoutList from "./WorkoutList.js";
import { useState } from "react";
import uuid from "react-uuid";

const WOinit = {
  id: "",
  date: "",
  km: "",
};

export default function Workout() {
  const [workout, setWorkout] = useState(WOinit);
  const [workoutList, setWorkoutList] = useState([]);

  const addWorkout = (workout) => {
    for (let index = 0; index < workoutList.length; index++) {
      if (workoutList[index].date == workout.date) {
        workoutList[index].km = Number(workoutList[index].km) + Number(workout.km);
        setWorkoutList((prev) => prev.map((w) => w));
        setWorkout(WOinit);
        return;
      }
    }
    setWorkoutList((prev) => [
      ...prev,
      {
        id: uuid(),
        date: workout.date,
        km: workout.km,
      },
    ]);

    setWorkout(WOinit);
  };

  const changeWorkout = (target) => {
    setWorkout((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const deleteWorkout = (date) => {
    const newlist = workoutList.filter((item) => item.date !== date.date);
    setWorkoutList(newlist);
  };

  const editWorkout = (wo) => {
    setWorkout({
      id: wo.id,
      date: wo.date,
      km: wo.km,
    });
  };

  return (
    <React.Fragment>
      <WorkoutAddForm
        workout={workout}
        onAdd={addWorkout}
        onChange={changeWorkout}
      />
      <WorkoutList
        list={workoutList}
        onRemove={deleteWorkout}
        onEdit={editWorkout}
      />
    </React.Fragment>
  );
}
