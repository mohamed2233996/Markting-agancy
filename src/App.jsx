import './App.css'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {Header, Intro, About, About2, Freeprise, Services, Prise, Articles, Footer} from "../src/scetion/index"

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Intro />
      <About />
      <Freeprise />
      <About2 />
      <Services />
      <Prise />
      <Articles />
      <Footer />
    </>
  )
}

export default App
