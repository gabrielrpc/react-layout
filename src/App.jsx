import './App.css'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import { SliderData } from './components/Slider/Slider.data'
import Card from './components/Card/Card'

function App() {


  return (
    <div className="App">
      <Navbar />
      <Slider slides={SliderData} />
      <Card/>
    </div>
  )
}

export default App
