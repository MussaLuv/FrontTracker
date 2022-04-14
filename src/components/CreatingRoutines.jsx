import React, { useState, useEffect } from "react";
import { createRoutines } from "../api/routines";
import useAuth from "../hooks/useAuth";
function CreatingRoutines({ userRoutines, setUserRoutines }) {
  console.log("userRoutines in CreatingRoutines:", userRoutines);
  const { token, user } = useAuth();
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const routineObj = { name, goal };
    const response = await createRoutines(routineObj, token);
    console.log("response in creatingRoutine:", response);
    const newUserRoutine = response;
    console.log("newRoutine:", newUserRoutine);
    let newUserRoutineList = [...userRoutines, newUserRoutine];
    console.log("new userRoutines list:", newUserRoutineList);
    setUserRoutines(newUserRoutineList);
    setName("");
    setGoal("");
  };

  return (
    <div className="newRoutines">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Goal"
          value={goal}
          onChange={(ev) => setGoal(ev.target.value)}
        />
        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
}

export default CreatingRoutines;