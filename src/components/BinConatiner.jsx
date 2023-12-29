import React, { useEffect, useState } from 'react';
import {getNotesMethods} from "../utils/noteService";
import NoteCard from './NoteCard';
import "../sass/BinConatiner.scss";
import {notePutOperations ,noteOperations} from "../utils/noteService";

function BinConatiner() {

  const [trashNotes,setTrashNotes] =useState([]);

  useEffect(() => {
    getNotesMethods("")
      .then((response) => {
        const trashData = response.data;
        const data = trashData.filter((notesData) => {
          return notesData.isDeleted == true;
        });
        setTrashNotes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  const updateData = (noteObj,endpoint)=>{
    const updatedList = trashNotes.filter((note)=>{
     return note._id != noteObj.noteIdList[0];
    })
    setTrashNotes(updatedList);
    if(endpoint == `${noteObj.noteIdList[0]}/deleteNote`){
    notePutOperations(noteObj,endpoint).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }else{
    noteOperations(noteObj,endpoint).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
    
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