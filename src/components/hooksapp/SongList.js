import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSong from './NewSong';


export default function SongList() {

  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: ' memory gospel', id: 2 },
    { title: ' this wild darkness', id: 3 }
  ])

  const addSong = (title) => {
    setSongs([
      ...songs, { title, id: uuidv1()}
    ])
  }

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>

      <NewSong addSong={addSong} /> 
    </div>
  )
}
