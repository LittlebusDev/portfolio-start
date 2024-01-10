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
        {/* could do as table OR could do as responsive   display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 0.125rem;
  margin-top: 20px; */}
        <div className="categories">
          <table id="initial-choice">
            <tr>
              <td>
                <div className="web-dev">
                  <a href="/web-design">
                    <img src="/g" alt="Web Dev" />
                  </a>
                </div>
              </td>
              <td>
                <div className="graphic-design">
                  <a href="/graphic-design">
                    <img src="/" alt="Graphic Design" />
                  </a>
                </div>
              </td>
              <td>
                <div className="photography">
                  <a href="/photography">
                    <img
                      src="../../client/images/photog-colour.png"
                      alt="Photography"
                    />
                  </a>
                </div>
              </td>
              <td>
                <div className="illustrations">
                  <a href="illustrations">
                    <img src="/" alt="Illustrations" />
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
