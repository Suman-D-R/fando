import React, { useEffect, useState } from 'react';
import {getNotesMethods} from "../utils/noteService";
import NoteCard from './NoteCard';
import "../sass/BinConatiner.scss";
import {noteOperations} from "../utils/noteService";

function BinConatiner() {

  const [trashNotes,setTrashNotes] =useState([]);

  useEffect(()=>{
    getNotesMethods("getTrashNotesList").then((response)=>{
      const trachData = response.data.data.data;
      console.log(trachData);
      setTrashNotes(trachData);
    })
  },[])

  const updateData = (noteObj,endpoint)=>{
    const updatedList = trashNotes.filter((note)=>{
     return note.id != noteObj.noteIdList[0];
    })
    setTrashNotes(updatedList);
    noteOperations(noteObj,endpoint).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    
  }

  return (
    <div className='bin-container'>
      <div className='bin-card-container'>
      {
        trashNotes.length > 0 && 
        trashNotes.map((notesDetails)=>{
         return <NoteCard noteData={notesDetails} updateData={updateData} path={"/bin"}/>
        })
      }
      </div>
    </div>
  )
}

export default BinConatiner