import axios from "axios";

const token = localStorage.getItem("accessToken");
const BASE_URL = "http://localhost:3080/api/v1/notes/";

// export const getAllNotes = async ()=>{
//     const notesData = await axios.get(BASE_URL+"getNotesList?access_token=" + token)
//     return notesData;
// }

// export const getAchiveNotes = async ()=>{
//     const notesData = await axios.get(BASE_URL+"getArchiveNotesList?access_token=" + token)
//     return notesData;
// }

// export const getTrashNotes = async ()=>{
//     const notesData = await axios.get(BASE_URL+"getTrashNotesList?access_token=" + token)
//     return notesData;
// }

// Replace with your actual access token

export const getNotesMethods = async (method) => {
  try {
    const notesData = await axios.get(BASE_URL + method, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return notesData.data;
  } catch (error) {
    console.error("Error fetching notes data:", error);
    throw new Error("Failed to get notes data");
  }
};

// export const addNoteList = async (data)=>{
//     const noteData = await axios.post(BASE_URL+"addNotes?access_token="+token,
//     data)
// }

export const notePutOperations = async (data, endpoint) => {
  console.log(endpoint)
  const noteData = await axios.put(BASE_URL + endpoint, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(noteData);
};


export const noteOperations = async (data, endpoint) => {
  console.log(endpoint)
  const noteData = await axios.delete(BASE_URL + endpoint, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(noteData);
};
