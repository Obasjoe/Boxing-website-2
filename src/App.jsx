import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Hero />
        </BrowserRouter>
    )
}
export default App
