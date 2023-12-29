import React, { useState } from "react";
import "../sass/TakeNote.scss";
import InputBase from "@mui/material/InputBase";
import PushPinIcon from "@mui/icons-material/PushPin";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import BrushIcon from "@mui/icons-material/Brush";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {notePutOperations} from "../utils/noteService";
import { useNavigate } from "react-router-dom";
import IconOperation from "./IconOperation";

function TakeNote({setNoteData,state=false,noteData,handleClose,collectData}) {

  let data= {
      ...noteData
  }


  // const navigate = useNavigate();


  const handleNote = (e)=>{
    data.description=e.target.value
  }
  const handleTitle = (e)=>{
    data.title=e.target.value
  }

  const [searchBarState, setSearchBarState] = useState(state);
    const handleAddNote = ()=>{
        setSearchBarState(!searchBarState);
        const defaultValue = {
              "isAchive": false,
              "isDeleted": false,
              "color": "",
        }
        
        setNoteData({...data,...defaultValue});
    }

    const handleUpdateNote = ()=>{
      data.noteId = noteData._id;
      console.log(data)
      notePutOperations(data,noteData._id).then((res=>{
        console.log(res)
      })).catch((err)=>{
        console.log(err)
      })
      collectData(data);
      handleClose()

    }

    const toggleTakeNote = ()=>{
      setSearchBarState(!searchBarState);
      
  }
  return (
    <>
      { searchBarState ? 
        <div className="search-container">
          <div className="search-content-one">
            <InputBase
              onChange={handleTitle}
              defaultValue={noteData?.title}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Title"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <PushPinIcon />
            </IconButton>
          </div>
          <div className="search-content-one">
            <InputBase
             onChange={handleNote}
             defaultValue={noteData?.description  || ""}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Take a note..."
              inputProps={{ "aria-label": "search google maps",readOnly: false }}
            />
          </div>
          <div className="search-content-two">
            <div className="search-content-icons">
              <div className="takenote-icons">
             <IconOperation />
             </div>
             <div>
              <IconButton className="icon-buttons" type="button" sx={{ p: "10px" }} aria-label="search">
                <UndoIcon className="takenote-icons"/>
              </IconButton>
              <IconButton className="icon-buttons" type="button" sx={{ p: "10px" }} aria-label="search">
                <RedoIcon className="takenote-icons"/>
              </IconButton>
              </div>
            </div>
            { noteData ?
            <div className="search-close" onClick={handleUpdateNote}>
            save
          </div>:
            <div className="search-close" onClick={handleAddNote}>
              close
            </div>
}
          </div>
        </div>
       : 
        <div onClick={toggleTakeNote} className="second-note">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 600,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Take a note..."
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton className="icon-buttons" type="button" sx={{ p: "10px" }} aria-label="search">
              <CheckBoxIcon className="takenote-icons" />
            </IconButton>
            <IconButton className="icon-buttons" type="button" sx={{ p: "10px" }} aria-label="search">
              <BrushIcon className="takenote-icons" />
            </IconButton>
            <IconButton className="icon-buttons" type="button" sx={{ p: "10px" }} aria-label="search">
              <InsertPhotoIcon className="takenote-icons" />
            </IconButton>
          </Paper>
        </div>
      }
    </>
  );
}

export default TakeNote;


