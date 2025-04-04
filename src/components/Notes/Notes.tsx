import { useState } from "react";
import "./Notes.css";

function Notes() {
  const [notes, setNotes] = useState<Array<string>>([]);
  const [note, setNote] = useState("");

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  // ISIGILITI paciam
  const saveNotesToFile = () => {
    const element = document.createElement("a");
    const file = new Blob([notes.join("\n")], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "notes.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="notes">
      <h2>Notes</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
      />
      <button onClick={addNote}>Add Note</button>
      <button onClick={saveNotesToFile} disabled={notes.length === 0}>
        Save Notes to File
      </button>
      <ul>
        {notes.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
