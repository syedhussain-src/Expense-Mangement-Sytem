import React, { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./home.css";
import { editTransactions } from "../../utils/ApiRequest";
import axios from "axios";

const ActionBox = (props) => {

    const [index, setIndex] = useState(null);


  const handleEditClick = (newSprite) => {
    e.preventDefault();
    setIndex(index);
    console.log(setSelectedSprite);
    const [selectedSprite, setSelectedSprite] = useState(null);
  };

  const handleDeleteClick = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="icons-handle">
        <EditNoteIcon sx={{ cursor: "pointer" }} onClick={handleEditClick} />
        <DeleteForeverIcon
          sx={{ color: "red", cursor: "pointer" }}
          onClick={handleDeleteClick}
        />
      </div>
    </>
  );
};

export default ActionBox;
