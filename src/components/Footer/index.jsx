import './Footer.scss';

function Footer({webLink, name}) {
  return (
    <>
      <footer>
        <p>Created by <a href={webLink}>{name}</a></p>
      </footer>
    </>
  )
}

export { Footer }