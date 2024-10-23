"use client";
import About from './about/page'
import Contact from './contact/page'
import Main from './main/page'
import Project from './project/page'


export default function Home() {
  return (
    <main>
      <Main/>
      <div 
        id="about-section" 
        style={{ 
          height: '100vh', 
          overflowX: "hidden",
          overflowY: 'auto', 
          scrollBehavior: 'smooth'
        }}
      >
        <About />
        <Project />
        <Contact />
      </div>
    </main>
  )
}
