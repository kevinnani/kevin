import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { useSelector, useDispatch } from "react-redux";
import { fetchContent } from './redux/slices/contentSlices'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Portfolio } from './pages/Portfolio'
import { Resume } from './pages/Resume'
import { TechStack } from './pages/TechStack'

function App() {
  const dispatch = useDispatch();
  const {navbar, status} = useSelector((state) => state.content);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchContent());
    }
  }, [status, dispatch]);

  return (
    <>
    <Navbar />

    <section id='home'> <Home /></section>

    <section id='about'><About/></section>

    <section id='contact'><Contact /> </section>   

    <section id='portfolio' > <Portfolio /> </section> 

    <section id='resume'> <Resume />  </section>

    <section id='techStack'> <TechStack /> </section>
    </>
  )
}

export default App
