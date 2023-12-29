import React, { useEffect, useState } from "react";
import { getNotesMethods } from "../utils/noteService";
import NoteCard from "./NoteCard";
import "../sass/ArchiveContainer.scss";
import { notePutOperations } from "../utils/noteService";

function ArchiveContainer() {
  const [archiveNotes, setArchiveNotes] = useState([]);

  useEffect(() => {
    getNotesMethods("")
      .then((response) => {
        const archiveData = response.data;
        const data = archiveData.filter((notesData) => {
          return notesData.isAchive == true;
        });
        setArchiveNotes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateData = (noteObj, endpoint) => {
    const updatedList = archiveNotes.filter((note) => {
      return note._id != noteObj.noteIdList[0];
    });
    setArchiveNotes(updatedList);
    notePutOperations(noteObj, endpoint)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="archive-container">
      <div className="archive-card-container">
        {archiveNotes.length > 0 &&
          archiveNotes.map((noteDetails) => {
            return <NoteCard noteData={noteDetails} updateData={updateData} />;
          })}
      </div>
    </div>
  );
}

export default ArchiveContainer;
