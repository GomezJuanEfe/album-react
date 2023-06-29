import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { MusicCard } from './components/MusicCard';
import { dataSongs } from './data.js'
import { useState } from 'react';

function App() {
  const [songs, setSongs] = useState(dataSongs);

  const handleLike = (id) => {
    const updateData = songs.map( item => {
      return item.id === id ? {...item, like: !item.like} : item
    });
    setSongs(updateData);
  }

  return (
    <>
      <Header>Album React</Header>
      <Main>
        { songs.map( item => {
          return (
            <MusicCard
            coverUrl={item.cover_url}
            artisName={item.artist}
            songName={item.name}
            album={item.album}
            year={item.year}
            like={item.like}
            genre={item.genre}
            key={item.id}
            id={item.id}
            handleLike={handleLike}
            />
          )})
        }
      </Main>
      <Footer
        webLink={'www.gomezjuanefe.com'}
        name={'Juan Felipe'}
      />
    </>
  )
}

export { App }