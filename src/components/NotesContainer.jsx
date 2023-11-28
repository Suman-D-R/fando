import React, { useEffect, useState } from "react";
import "../sass/NotesContainer.scss";
import TakeNote from "./TakeNote";
import NoteCard from "./NoteCard";
import { getNotesMethods } from "../utils/noteService";
import { useLocation, useParams } from "react-router-dom";
import { addNoteList, noteOperations } from "../utils/noteService";
import ShimmerUI from "./ShimmerUI";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

function NotesContainer() {
  const [notesList, setNotesList] = useState([]);
  let copyNoteList = [...notesList];
  let location = useLocation();
  const currentPath = location.pathname;
  const { noteId } = useParams();
  const [modalData, setModalData] = useState();
  const [openModal, setOpenModal] = useState(noteId ? true : false);
  const navigate = useNavigate();

  useEffect(() => {
    getNotesMethods("getNotesList")
      .then((response) => {
        let notesData = response.data.data.data;
        notesData = notesData.filter((notesData) => {
          return notesData.isArchived == false && notesData.isDeleted == false;
        });
        setNotesList(notesData);
        console.log(notesData)
        if (noteId) {
          const data = notesData.filter((noteObj) => {
            return noteObj.id == noteId;
          });
          if(data[0]){
          console.log(data[0]);
          setModalData(data[0]);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(modalData);
  }, [modalData]);

  const handleClose = () => {
    setOpenModal(false);
    navigate("/notes");
  };

  const getNoteData = (noteObj) => {
    setNotesList([...notesList, noteObj]);
    noteOperations(noteObj, "addNotes")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateData = (noteObj, endpoint) => {
    const updatedList = copyNoteList.map((note) => {
      if (note.id == noteObj.noteIdList[0]) {
        if (endpoint == "/archiveNotes") {
          note.isArchived = true;
        } else if (endpoint == "/trashNotes") {
          note.isDeleted = true;
        } else {
          note.color = noteObj.color;
        }
      }

      return note;
    });
    const filterUpdatedList = updatedList.filter((noteObj) => {
      return noteObj.isArchived == false && noteObj.isDeleted == false;
    });
    setNotesList(filterUpdatedList);

    noteOperations(noteObj, endpoint)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const collectData = (data) => {
    const updated = notesList.map((noteObj) => {
      if (noteObj.id == data.noteId) {
        noteObj = data;
      }
      return noteObj;
    });
    setNotesList(updated);
  };

  return (
    <div className="note-container">
      <div className="note-container-one">
        <TakeNote setNoteData={getNoteData} />
      </div>
      <div className="note-container-two">
        <div className="note-card-container">
          {notesList.length == 0 ? (
            <div>
              <ShimmerUI />
            </div>
          ) : (
            notesList.map((noteDetails) => {
              return (
                <NoteCard
                  noteData={noteDetails}
                  updateData={updateData}
                  path={currentPath}
                  collectData={collectData}
                  modalData={modalData}
                />
              );
            })
          )}
        </div>
      </div>

      <Modal open={openModal} onClose={handleClose}>
        <Box className="modal-box">
          {modalData === undefined ? (
            <CircularProgress />
          ) : (
            <TakeNote
              noteData={modalData}
              state={true}
              handleClose={handleClose}
              collectData={collectData}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default NotesContainer;
