




  import './App.css';
  import Header from "./Components/Header/Header"
  import Services from "./Components/Services/Service"
  import Courses from "./Components/Courses/courses"
  import Startups from "./Components/Startup/startup"
  import Activites from "./Components/Activities/Activity"
  import About from "./Components/About/About"
  import Login from "./Components/LoginPage/Login"
  import Contact from "./Components/Contact/Contact"
  import {Route, Routes } from 'react-router-dom'
const Example = () => {


function App() {
  return (
    <div className="App">
<Header/>



<Routes>

<Route path="/services" element={<Services/>} />
<Route path="/login" element={<Login/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/startups" element={<Startups/>} />
<Route path="/courses" element={<Courses/>} />
<Route path="/activities" element={<Activites/>} />







</Routes>







    </div>
  );
}

export default App;
