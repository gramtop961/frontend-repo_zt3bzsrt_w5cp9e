import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSkills from './components/AboutSkills'
import ProjectsContact from './components/ProjectsContact'

function App() {
  return (
    <div className="font-inter text-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <AboutSkills />
        <ProjectsContact />
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Amugadda Hemanth Kumar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-gray-900">Back to top</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
