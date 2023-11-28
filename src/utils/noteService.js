import axios from "axios";

const token = localStorage.getItem("accessToken")
const BASE_URL = "https://fundoonotes.incubation.bridgelabz.com/api/notes/"
const access_token ="?access_token=" + token;

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


export const getNotesMethods = async (method)=>{
    const notesData = await axios.get(BASE_URL+ method + access_token)
    console.log(notesData)
    return notesData;
}



// export const addNoteList = async (data)=>{
//     const noteData = await axios.post(BASE_URL+"addNotes?access_token="+token,
//     data)
// }



export const noteOperations = async (data,endpoint)=>{
    const noteData = await axios.post(BASE_URL+endpoint+access_token,
    data)
    console.log(noteData)
}

