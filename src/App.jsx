import Navbar from "./components/navbar/navbar"
import Intro from "./components/Intro/Intro"
import Skill from "./components/Skills/Skills"
import Project from "./components/Projects/Project"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
        <Navbar />
        <Intro/>
        <Skill/>
        <Project/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
