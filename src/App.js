import './App.css'
import Header from './Components/Header/Header'
import Services from './Components/Services/Service'
import Courses from './Components/Courses/courses'
import Startups from './Components/Startup/startup'
import Activites from './Components/Activities/Activity'
import About from './Components/About/About'
import Login from './Components/LoginPage/Login'
import Contact from './Components/Contact/Contact'
import Dataform from './Components/DataForm/Dataform'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/addform/data" element={<Dataform />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/activities" element={<Activites />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  )
}

export default App
