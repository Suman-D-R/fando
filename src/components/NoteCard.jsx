import React, { useEffect } from "react";
import "../sass/NoteCard.scss";
import IconOperation from "./IconOperation";
import TakeNote from "./TakeNote";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function NoteCard({ noteData, updateData, path, collectData, modalData }) {
  const { noteId } = useParams();


  useEffect(()=>{
    console.log(modalData);
  },[modalData])

  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const handleOpen = ({ id }) => {
    navigate(id);
    setOpenModal(true);
  };
  const handleClose = () => {
    navigate("/notes");
    setOpenModal(false);
  };

  const handleNoteOperations = (operations) => {
    let noteObj = {
      noteIdList: [noteData._id],
    };
    let endPoint;

    if (operations == "archive" || operations == "unarchive") {
      noteObj.isAchive = operations == "archive" ? true : false;
      endPoint = `${noteData._id}/achiveNote`;
    } else if (operations == "removetrash" || operations == "movetrash") {
      noteObj.isDeleted = operations == "removetrash" ? false : true;
      endPoint = `${noteData._id}/deleteNote`;
    } else if (operations == "deleteForeverNotes") {
      endPoint = `${noteData._id}`;
    } else {
      noteObj.color = operations;
      endPoint = `${noteData._id}/color`;
    }

    updateData(noteObj, endPoint);
  };

  return (
    <>
      <div
        className="card-component"
        style={{ backgroundColor: noteData?.color || "defaultColor" }}
      >
        <div
          onClick={() => handleOpen(noteData)}
          className="card-component-one"
        >
          <div className="card-title">{noteData?.title}</div>
          <div className="card-note">{noteData?.description}</div>
        </div>
        <div className="card-component-two">
          <IconOperation
            handleNoteOperations={handleNoteOperations}
            path={path}
          />
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
       
            <TakeNote
              noteData={noteData}
              state={true}
              handleClose={handleClose}
              collectData={collectData}
            />
           
        </Box>
      </Modal>
    </>
  );
}

export default NoteCard;
