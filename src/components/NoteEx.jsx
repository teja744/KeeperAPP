import React from "react";
import notes from "../notes";
import Note from "./Note";


function NoteEx() {
  return (
    <div >
      {
      notes.map((noteItem) => {
      return (
      <Note 
      key={noteItem.key}    //for identification but not use for further more
      title={noteItem.title}
      content={noteItem.content}
      />
      );
      })
      } 
    </div>
  );
}

export default NoteEx;
