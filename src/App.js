import Navbar from './components/Navbar.js'
import Searchbar from './components/Searchbar.js'
import Slides from './components/Slides.js'
import Business from './components/Business.js'
import Interested from './components/Interested.js'
import Stage from './components/Stage.js'
import Footer from './components/Footer.js'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Slides />
      <Business />
      <Interested />
      <Stage />
      <Footer />
    </div>
  )
}

export default App;
