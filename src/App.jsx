import AboutMe from './components/AboutMe'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Footer from './components/Footer'
import  Header from './components/Header'
import Nav from './components/Nav'
import Skills from './components/Skills'

function App() {

  return (
    <div className="no-scrollbar px-4 overflow-x-auto overflow-y-auto absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-t from-zinc-700 to-zinc-950">
      <main className="max-w-3xl mx-auto py-8 flex flex-col gap-8">
        <Header />
        <div className="flex flex-row-reverse items-center gap-4">
          <a href="https://github.com/guumuller" target="_blank"><button className="bg-[#516264] hover:bg-[#404e50] px-2 py-2 mt-1 rounded-lg border-solid border-2 border-[#bdd5d9]"><img src="/github.png" className="w-6"></img></button></a>
          <a href="https://www.linkedin.com/in/gustavo-m%C3%BCller-leonini-machado-aaa542264/" target="_blank"><button className="bg-[#516264] hover:bg-[#404e50] px-1 py-1 mt-1 rounded-lg border-solid border-2 border-[#bdd5d9]"><img src="/linkedin.png" className="w-8"></img></button></a>
        </div>
        <Nav />
        <hr></hr>
        <AboutMe />
        <Education />
        <Certificates />
        <Skills />
        <hr></hr>
        <Footer />
      </main>
    </div>
  )
}

export default App
