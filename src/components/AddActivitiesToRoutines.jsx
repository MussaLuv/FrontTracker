import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { attachActivityToRoutine } from "../api/routines";
/**
 *  A small form which has a dropdown for all activities,
 *  an inputs for count and duration
 */
function AddActivitiesToRoutines({ userRoutine }) {
  const { activities, token } = useAuth();
  //console.log("activities:", activities);
  const [activityName, setActivityName] = useState("");
  const [activityCount, setActivityCount] = useState(0);
  const [activityDuration, setActivityDuration] = useState(0);

  const listActivity = activities.map((activity, id) => (
    <option key={`activityList${id}`} value={activity.name} id={activity.id}>
      {activity.name}
      {activity.id}
    </option>
  ));

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log("userRoutine id:", userRoutine.id);
    const activityObj = {
      activityId: 3,
      count: activityCount,
      duration: activityDuration,
    };
    const response = await attachActivityToRoutine(
      activityObj,
      userRoutine.id,
      token
    );
    const addedActivity = response;
    console.log(addedActivity);
  };
  return (
    <div className="activitiesList">
      <h2>Add an Activity</h2>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <label htmlFor="activities">Activities:</label>
        <select
          name="activities"
          value={activityName}
          onChange={(ev) => setActivityName(ev.target.value)}
        >
          {listActivity}
        </select>
        <label htmlFor="count">Count:</label>
        <input
          type="number"
          name="count"
          placeholder="count"
          value={activityCount}
          onChange={(ev) => setActivityCount(ev.target.value)}
          min="0"
          max="100"
        />
        <label htmlFor="duration">Duration:</label>
        <input
          type="number"
          placeholder="duration"
          value={activityDuration}
          onChange={(ev) => setActivityDuration(ev.target.value)}
          min="0"
          max="60"
        />
        <button
          type="submit"
          onClick={() => {
            console.log("activity id:", listActivity.props);
          }}
        >
          Add Activity
        </button>
      </form>
    </div>
  );
}
export default AddActivitiesToRoutines;