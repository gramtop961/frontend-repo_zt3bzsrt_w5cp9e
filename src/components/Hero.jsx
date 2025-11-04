import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-10"
        >
          <p className="uppercase tracking-widest text-xs text-blue-600 font-semibold">Pega Developer • Software Engineer</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I’m <span className="text-blue-600">Amugadda Hemanth Kumar</span> 👋
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl">
            Enthusiastic Software Developer | Pega Developer | Tech Explorer. Passionate about building applications that enhance user experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-2.5 font-medium shadow hover:bg-blue-700 transition-colors">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 font-medium shadow hover:bg-black transition-colors">
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative h-[420px] lg:h-[520px] rounded-2xl shadow-xl bg-white/60 backdrop-blur flex items-end overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold">Modern • Minimal • Animated</h3>
            <p className="text-gray-600 mt-2">Clean visuals, smooth scroll animations, and interactive 3D hero.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
