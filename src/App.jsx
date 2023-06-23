import Navbar from './components/Navbar'
import MiApi from './components/MiApi'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className="gallery">
        <div className="box">
          <MiApi/>
        </div>
      </div>
    </>
  )
}

export default App
