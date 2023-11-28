import React, { useEffect, useState } from 'react';
import {getNotesMethods} from "../utils/noteService";
import NoteCard from './NoteCard';
import "../sass/ArchiveContainer.scss";
import {noteOperations} from "../utils/noteService"

function ArchiveContainer() {


  const [archiveNotes,setArchiveNotes] = useState([]);

  useEffect(()=>{
    getNotesMethods("getArchiveNotesList").then((response)=>{
      const archiveData = response.data.data.data
      setArchiveNotes(archiveData);
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const updateData = (noteObj,endpoint)=>{
    const updatedList = archiveNotes.filter((note)=>{
     return note.id != noteObj.noteIdList[0];
    })
    setArchiveNotes(updatedList);
    noteOperations(noteObj,endpoint).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    
  }
  

  return (
    <div className='archive-container'>
    <div className='archive-card-container'>
    {
      archiveNotes.length > 0 &&
      archiveNotes.map((noteDetails) => {
        return <NoteCard noteData={noteDetails} updateData={updateData}/>;
      })
      }
    </div>
  </div>
  )
}

export default ArchiveContainer