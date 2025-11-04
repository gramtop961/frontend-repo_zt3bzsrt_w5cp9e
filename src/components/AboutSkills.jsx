import { motion } from 'framer-motion'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mr-2 mb-2">
      {children}
    </span>
  )
}

function AboutSkills() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m a B-Tech Electrical and Electronics Engineering graduate from MVSR Engineering College, with hands-on experience in Pega PRPC, web technologies (HTML, CSS, SQL), and automation tools like n8n.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I enjoy transforming ideas into functional applications. My journey includes projects in Pega, web development, and data automation, which improved my analytical, creative, and problem-solving abilities. When I’m not coding, I explore photography and tech innovation to keep my creativity alive.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold">Education</h3>
                <p className="text-gray-600 text-sm mt-1">B-Tech EEE, MVSR Engineering College</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold">Certifications</h3>
                <p className="text-gray-600 text-sm mt-1">Pega CSA, Web & Automation Foundations</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills</h2>
            <div className="mt-4">
              <h4 className="text-sm uppercase tracking-wider text-gray-500">Low-code / BPM</h4>
              <div className="mt-2">
                <Badge>Pega PRPC (CSA)</Badge>
                <Badge>Case Management</Badge>
                <Badge>UI Design</Badge>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm uppercase tracking-wider text-gray-500">Programming</h4>
              <div className="mt-2">
                <Badge>Python (Basic)</Badge>
                <Badge>SQL</Badge>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm uppercase tracking-wider text-gray-500">Automation</h4>
              <div className="mt-2">
                <Badge>n8n Workflows</Badge>
                <Badge>API Integration</Badge>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm uppercase tracking-wider text-gray-500">Web Development</h4>
              <div className="mt-2">
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
                <Badge>Responsive Design</Badge>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm uppercase tracking-wider text-gray-500">Cloud / Tools</h4>
              <div className="mt-2">
                <Badge>AWS (Beginner)</Badge>
                <Badge>Power BI</Badge>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm uppercase tracking-wider text-gray-500">Soft Skills</h4>
              <div className="mt-2">
                <Badge>Creativity</Badge>
                <Badge>Communication</Badge>
                <Badge>Time Management</Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSkills
