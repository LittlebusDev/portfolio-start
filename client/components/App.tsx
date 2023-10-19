// import { useFruits } from '../hooks/useFruits.ts'

function App() {
  // const { data } = useFruits()

  return (
    <>
      <div className="app">
        <a href="/">
          <h1>Tori Stevens Design</h1>
        </a>
        <h3>Choose your adventure</h3>
        <div className="categories">
          <div className="web-dev">
            <a href="/web-design">
              <img src="../client/images/web.png" alt="Web Dev" />
            </a>
          </div>
          <div className="graphic-design">
            <a href="/graphic-design">
              <img src="../client/images/graphic.png" alt="Graphic Design" />
            </a>
          </div>
          <div className="photography">
            <a href="/photography">
              <img src="../client/images/photog.png" alt="Photography" />
            </a>
          </div>
          <div className="illustrations">
            <a href="illustrations">
              <img src="../client/images/illust.png" alt="Illustrations" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
