import './Main.scss'

function Main({children}) {
  return (
    <main>
      <section className='music-card'>
        {children}
      </section>
    </main>
  )
}

export { Main }