import React from "react";
import PropTypes from "prop-types";
import "./Workout.css";
import uuid from "react-uuid";
import moment from "moment";

export default function WorkoutList({ list, onRemove, onEdit }) {

  if (list.length == 0) 
    return null;

  list.sort(function (a, b) {
    var dateA = new Date(a.date), dateB = new Date(b.date);
    return dateA - dateB;
  });

  const onRemoveItem = (date) => {
    onRemove(date);
  };

  const onEditItem = (date) => {
    onEdit(date);
  };

  return (
    <div className="result">
        <div className="result-title">
            <label className="workout-title">Дата (ДД.ММ.ГГГГ)</label>
            <label className="workout-title">Пройдено км</label>
            <label className="workout-title">Действия</label>
        </div>
        <div className="result-list">
            <ul>
            {list.map((o) => (
                <li className="result-item" key={uuid()}>
                <label>{moment(o.date).format("DD.MM.YYYY")}</label>
                <label>{o.km}</label>
                <div>
                    <button onClick={() => onEditItem(o.date)}>✎</button>
                    <button onClick={() => onRemoveItem(o.date)}>🗙</button>
                </div>
                </li>
            ))}
            </ul>
        </div>
    </div>
  );
}

WorkoutList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
