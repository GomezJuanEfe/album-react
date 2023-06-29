import './MusicCard.scss'

function MusicCard({
  id,
  coverUrl,
  artisName,
  songName,
  album,
  year,
  like,
  genre,
  handleLike
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
          <div className='music-card__last-div'>
            <div>
              <span className='music-card__genre'>{genre}</span>
            </div>
            <div onClick={() => handleLike(id)}>
              <i className={`music-card__heart ${like ? 'fa-solid' : 'fa-regular' } fa-heart`}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { MusicCard }