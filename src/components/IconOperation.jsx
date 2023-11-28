import React from "react";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import "../sass/iconOperations.scss";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

function IconOperation({ handleNoteOperations, path }) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
 

  const handleClickColor = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClickAwayDelete = () => {
    setOpenDelete(false);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const [anchorElDelete, setAnchorElDelete] = useState(null);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClick = (event) => {
    setAnchorElDelete(event.currentTarget);
    setOpenDelete((previousOpen) => !previousOpen);
  };

  const canBeOpenDelete = open && Boolean(anchorElDelete);
  const idDelete = canBeOpenDelete ? "simple-popper" : undefined;

  return (
    <div>
      {path == "/bin" ? (
        <>
          <Tooltip title="delete">
            <IconButton
              onClick={() => handleNoteOperations("deleteForeverNotes")}
              type="button"
              sx={{ p: "5px" }}
              aria-label="search"
            >
              <DeleteForeverIcon
                className="icons-operations"
                sx={{ fontSize: 20 }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="restore">
            <IconButton
              onClick={() => handleNoteOperations("removetrash")}
              type="button"
              sx={{ p: "5px" }}
              aria-label="search"
            >
              <RestoreFromTrashIcon
                className="icons-operations"
                sx={{ fontSize: 20 }}
              />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <>
          <Tooltip title="reminder">
            <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
              <AddAlertIcon
                className="icons-operations"
                sx={{ fontSize: 20 }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="collaborator">
            <IconButton
              onClick={() => handleNoteOperations("delete")}
              type="button"
              sx={{ p: "5px" }}
              aria-label="search"
            >
              <PersonAddAltIcon
                className="icons-operations"
                sx={{ fontSize: 20 }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="background-options">
            <ClickAwayListener onClickAway={handleClickAway}>
              <IconButton
                onClick={handleClickColor}
                type="button"
                sx={{ p: "5px" }}
                aria-label="search"
              >
                <ColorLensIcon
                  className="icons-operations"
                  sx={{ fontSize: 20 }}
                />
              </IconButton>
            </ClickAwayListener>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <div className="background-color-container">
                    <div className="group-one">
                      <div
                        className="color1"
                        onClick={() => handleNoteOperations("#FFFFFF")}
                      ></div>
                      <div
                        className="color2"
                        onClick={() => handleNoteOperations("#18C6FB")}
                      ></div>
                      <div
                        className="color3"
                        onClick={() => handleNoteOperations("#F6FF78")}
                      ></div>
                      <div
                        className="color4"
                        onClick={() => handleNoteOperations("#C3FF78")}
                      ></div>
                    </div>
                    <div className="group-two">
                      <div
                        className="color5"
                        onClick={() => handleNoteOperations("#78FFE9")}
                      ></div>
                      <div
                        className="color6"
                        onClick={() => handleNoteOperations("#D078FF")}
                      ></div>
                      <div
                        className="color7"
                        onClick={() => handleNoteOperations("#E79023")}
                      ></div>
                      <div
                        className="color8"
                        onClick={() => handleNoteOperations("#23E772")}
                      ></div>
                    </div>
                    <div className="group-three">
                      <div
                        className="color9"
                        onClick={() => handleNoteOperations("#51E723")}
                      ></div>
                      <div
                        className="color10"
                        onClick={() => handleNoteOperations("#23B7E7")}
                      ></div>
                      <div
                        className="color11"
                        onClick={() => handleNoteOperations("#FF78A8")}
                      ></div>
                      <div
                        className="color12"
                        onClick={() => handleNoteOperations("#F2FF78")}
                      ></div>
                    </div>
                  </div>
                </Fade>
              )}
            </Popper>
          </Tooltip>
          <Tooltip title="Add image">
            <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
              <InsertPhotoIcon
                className="icons-operations"
                sx={{ fontSize: 20 }}
              />
            </IconButton>
          </Tooltip>
          {path == "/notes" ? (
            <Tooltip title="Achive">
              <IconButton
                onClick={() => handleNoteOperations("archive")}
                type="button"
                sx={{ p: "5px" }}
                aria-label="search"
              >
                <ArchiveIcon
                  className="icons-operations"
                  sx={{ fontSize: 20 }}
                />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Unachive">
              <IconButton
                onClick={() => handleNoteOperations("unarchive")}
                type="button"
                sx={{ p: "5px" }}
                aria-label="search"
              >
                <UnarchiveIcon
                  className="icons-operations"
                  sx={{ fontSize: 20 }}
                />
              </IconButton>
            </Tooltip>
          )}
          <ClickAwayListener onClickAway={handleClickAwayDelete}>
            <IconButton
              onClick={handleClick}
              onMouse
              type="button"
              sx={{ p: "5px" }}
              aria-label="search"
            >
              <MoreVertIcon
                className="icons-operations"
                sx={{ fontSize: 20 }}
              />
            </IconButton>
          </ClickAwayListener>
          <Popper  id={idDelete} open={openDelete} anchorEl={anchorElDelete}>
            <Paper>
              <Typography
                onClick={() => handleNoteOperations("movetrash")}
                className="poper-content"
                sx={{ px: 1 }}
              >
                Delete note
              </Typography>
              <Typography
    
                className="poper-content"
                sx={{ px: 1 }}
              >
                Add label
              </Typography>
              <Typography className="poper-content" sx={{ px: 1 }}>
                Add drowing
              </Typography>
              <Typography className="poper-content" sx={{ px: 1 }}>
                Make a copy
              </Typography>
              <Typography className="poper-content" sx={{ px: 1 }}>
                Show tick boxes
              </Typography>
              <Typography className="poper-content" sx={{ px: 1 }}>
                Copy to Google Docs
              </Typography>
              <Typography className="poper-content" sx={{ px: 1 }}>
                Version history
              </Typography>
            </Paper>
          </Popper>
        </>
      )}
    </div>
  );
}

export default IconOperation;
