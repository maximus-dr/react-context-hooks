import React, { useState } from 'react';

export default function NewSong({ addSong }) {

  const [title, setTitle] = useState('');

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name:</label>
      <input
        id="add-song-input" 
        type="text" 
        name="songName" 
        value={title}
        required 
        onChange={handleInputChange} />
      <button>Add song</button>
    </form>
  )
}
