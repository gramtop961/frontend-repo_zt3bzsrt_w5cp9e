import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-extrabold tracking-tight text-xl">
          <span className="text-gray-900">Hemanth</span>
          <span className="text-blue-600">.v2</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/amugaddahemanthkumar" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-gray-100">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/amugaddahemanthkumar" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-gray-100">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:amugaddahemanthkumar@gmail.com" aria-label="Email" className="p-2 rounded-md hover:bg-gray-100">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/amugaddahemanthkumar" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-gray-100">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/amugaddahemanthkumar" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-gray-100">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:amugaddahemanthkumar@gmail.com" aria-label="Email" className="p-2 rounded-md hover:bg-gray-100">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
