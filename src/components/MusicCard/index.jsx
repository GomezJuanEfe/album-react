import './MusicCard.scss'

function MusicCard({
  coverUrl,
  artisName,
  songName,
  album,
  year,
  like,
  genre
}) {

  return (
    <>
      <div className="music-card__container">
        <img className="music-card__image" src={coverUrl} alt="" />
        <div className="music-card__body">
          <div>
            <h3>{songName}</h3>
            <p>{artisName}</p>
          </div>
          <div>
            <h4>{album}</h4>
            <h5>{year}</h5>
          </div>
          <div>
            <span>{genre}</span>
            <span className='music-card__heart'></span>
          </div>
        </div>
      </div>
    </>
  )
}

export { MusicCard }