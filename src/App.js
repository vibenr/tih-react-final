import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EventPage from './Components/EventsPage/Event'
import Sponsors from './Components/Sponsors/sponsors'
import ContactPage from './Components/Contact/contact'
import DeveloperPage from './Components/DevelopersPage/Developer'
import Jumbotron from './Components/Jumbotron/Jumbotron'
import EventDetails from './Components/Details/Details'
import Links from './Components/Links/link'
import Developers from './Components/Developers/Developers'
import Hackathon from './Components/Hackathon/Hackathon'
import Header from "./Components/Header/Header"
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/activities" element={<Activites />} />
      </Routes>
    </div>
  )
}

export default App
