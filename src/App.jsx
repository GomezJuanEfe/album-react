import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { MusicCard } from './components/MusicCard';


function App() {
  const songs = [
    {
      id: 1,
      name: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller",
      year: 1982,
      like: false,
      genre: "Pop",
      cover_url: "https://res.cloudinary.com/make-it-real-sj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1687892653/album_cover_h4hipl.jpg?_s=public-apps"
    },
    {
      id: 2,
      name: "Sweet Child o' Mine",
      artist: "Guns N' Roses",
      album: "Appetite for Destruction",
      year: 1987,
      like: false,
      genre: "Rock",
      cover_url: "https://res.cloudinary.com/make-it-real-sj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1687892653/album_cover_h4hipl.jpg?_s=public-apps"
    },
    {
      id: 3,
      name: "Like a Prayer",
      artist: "Madonna",
      album: "Like a Prayer",
      year: 1989,
      like: false,
      genre: "Pop",
      cover_url: "https://res.cloudinary.com/make-it-real-sj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1687892653/album_cover_h4hipl.jpg?_s=public-apps"
    },
    {
      id: 4,
      name: "Smells Like Teen Spirit",
      artist: "Nirvana",
      album: "Nevermind",
      year: 1991,
      like: false,
      genre: "Grunge",
      cover_url: "https://res.cloudinary.com/make-it-real-sj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1687892653/album_cover_h4hipl.jpg?_s=public-apps"
    },
    {
      id: 5,
      name: "Wonderwall",
      artist: "Oasis",
      album: "(What's the Story) Morning Glory?",
      year: 1995,
      like: false,
      genre: "Britpop",
      cover_url: "https://res.cloudinary.com/make-it-real-sj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1687892653/album_cover_h4hipl.jpg?_s=public-apps"
    },
    {
      id: 6,
      name: "Smooth",
      artist: "Santana ft. Rob Thomas",
      album: "Supernatural",
      year: 1999,
      like: false,
      genre: "Rock",
      cover_url: "https://res.cloudinary.com/make-it-real-sj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1687892653/album_cover_h4hipl.jpg?_s=public-apps"
    },
    {
      id: 7,
      name: "Crazy in Love",
      artist: "Beyoncé ft. Jay-Z",
      album: "Dangerously in Love",
      year: 2003,
      like: false,
      genre: "R&B",
      cover_url: "https://res.cloudinary.com/make-it-real-sj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1687892653/album_cover_h4hipl.jpg?_s=public-apps"
    },
    {
      id: 8,
      name: "Hey There Delilah",
      artist: "Plain White T's",
      album: "All That We Needed",
      year: 2005,
      like: false,
      genre: "Pop Rock",
      cover_url: "https://res.cloudinary.com/make-it-real-sj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1687892653/album_cover_h4hipl.jpg?_s=public-apps"
    },
    {
      id: 9,
      name: "Umbrella",
      artist: "Rihanna ft. Jay-Z",
      album: "Good Girl Gone Bad",
      year: 2007,
      like: false,
      genre: "R&B",
      cover_url: "https://res.cloudinary.com/make-it-real-sj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1687892653/album_cover_h4hipl.jpg?_s=public-apps"
    },
    {
      id: 10,
      name: "Rolling in the Deep",
      artist: "Adele",
      album: "21",
      year: 2010,
      like: false,
      genre: "Soul",
      cover_url: "https://res.cloudinary.com/make-it-real-sj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1687892653/album_cover_h4hipl.jpg?_s=public-apps"
    }
  ];

  const song = songs[0]


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