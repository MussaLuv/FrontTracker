export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";
const URL = BASE_URL + "/api";

export const getRoutines = async () => {
  try {
    const response = await fetch(`${URL}/routines`);
    const result = await response.json();
    //console.log("result:", result);
    if (result.error) throw result.error;
    return result;
  } catch (error) {
    console.error("uh oh, trouble fetching routines!", error);
  }
};

export const getPublicRoutinesByUser = async (username) => {
  try {
    const response = await fetch(`${URL}/users/${username}/routines`);
    const result = await response.json();
    //console.log("result:", result);
    if (result.error) throw result.error;
    return result;
  } catch (error) {
    console.error("uh oh, trouble fetching user's routines!", error);
  }
};

export const updateRoutine = async (updatedRoutineDetails, routineId) => {
  try {
    const response = await fetch(`${URL}/routines/${routineId}`, {
      method: "PATCH",
      body: JSON.stringify(updatedRoutineDetails),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("uh oh, trouble updating routine", error);
  }
};
