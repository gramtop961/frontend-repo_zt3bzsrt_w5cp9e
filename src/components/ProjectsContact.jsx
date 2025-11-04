import { motion } from 'framer-motion'
import { ExternalLink, Github, Mail, ArrowRight } from 'lucide-react'

const projects = [
  {
    category: 'Pega Applications',
    items: [
      { title: 'LIC Auto Rental Application', desc: 'Built using Pega for managing car rentals by city, dates, and car pricing.' },
      { title: 'LIC Auto Insurance Application', desc: 'Pega-based insurance workflow handling claims and premium calculations.' },
      { title: 'Hardware Sizing for Harsha Trainings', desc: 'Pega case study for automating hardware requirement requests.' },
    ],
  },
  {
    category: 'Python Mini Projects',
    items: [
      { title: 'Data Summarizer', desc: 'Reads and filters reports automatically to generate concise summaries.' },
    ],
  },
  {
    category: 'n8n Automations',
    items: [
      { title: 'Task Automation', desc: 'Automated email notifications for workflow updates using APIs.' },
    ],
  },
  {
    category: 'Web Projects',
    items: [
      { title: 'Amazon Clone', desc: 'Frontend web clone using HTML, CSS, and SQL for mock product listings.' },
      { title: 'Portfolio v2', desc: 'This modern, animated portfolio experience.' },
    ],
  },
]

function Card({ title, desc }) {
  return (
    <div className="group p-5 rounded-xl border border-gray-200 hover:border-blue-300 bg-white shadow-sm hover:shadow transition-all">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-gray-600 text-sm mt-1">{desc}</p>
        </div>
        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
      </div>
    </div>
  )
}

function ProjectsContact() {
  return (
    <div className="bg-gray-50">
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">Grouped by what I build the most: Pega apps, Python utilities, n8n automations, and web experiments.</p>

            <div className="mt-10 space-y-10">
              {projects.map((group) => (
                <div key={group.category}>
                  <h3 className="text-lg font-semibold text-gray-800">{group.category}</h3>
                  <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {group.items.map((p) => (
                      <Card key={p.title} title={p.title} desc={p.desc} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Want to collaborate or discuss a project? Feel free to reach out — I’m always open to new opportunities.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl">
              <input className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" required />
              <input type="email" className="w-full rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" required />
              <textarea className="sm:col-span-2 w-full min-h-[120px] rounded-md border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Message" required />
              <button className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-2.5 font-medium shadow hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>

            <div className="mt-6 flex items-center gap-4 text-sm">
              <a href="mailto:amugaddahemanthkumar@gmail.com" className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <Mail className="h-4 w-4" /> amugaddahemanthkumar@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/amugaddahemanthkumar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <ExternalLink className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com/amugaddahemanthkumar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsContact
