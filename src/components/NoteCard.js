import React from 'react';

class NoteCard extends React.Component {
  render() {
    const { note, getNote } = this.props;
    return (
      <div className="note-card-container">
        <div className="note-card-title">
          {note.title}
        </div>
        <div className="note-card-content">
          {note.content}
        </div>
        <span className="note-card-delet">
          <i className="material-icon">close</i>
        </span>
        <span className="note-card-edit" onClick={() => getNote()}>
          <i className="material-icons">mode_edit</i>
        </span>
      </div>
    );
  }
}

export default NoteCard;

