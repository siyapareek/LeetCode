import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col">
        <nav className="p-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold gradient-text"
          >
            SP
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-x-8"
          >
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </motion.div>
        </nav>

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold mb-4 gradient-text"
            >
              Siya Pareek
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8"
            >
              Computer Science Student & Blockchain Enthusiast
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-6"
            >
              <a href="https://github.com/siyapareek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/siya-pareek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:siyapareek139@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex justify-center pb-8"
        >
          <ChevronDown size={24} className="text-gray-400" />
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">About Me</h2>
          <div className="bg-secondary/50 p-8 rounded-lg backdrop-blur-sm">
            <p className="text-lg text-gray-300 mb-6">
              I'm a Computer Science student at Vellore Institute of Technology with a passion for blockchain technology and software development. Currently maintaining a CGPA of 8.83, I combine academic excellence with practical experience in various technical domains.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Technical Skills</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Python, Java</li>
                  <li>• HTML, CSS, JavaScript</li>
                  <li>• SQL, Google Cloud</li>
                  <li>• Power BI, Excel, R</li>
                  <li>• Git, Docker</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Achievements</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 200+ DSA problems solved</li>
                  <li>• Google HashCode Rank: 3450/25000+</li>
                  <li>• QOTB Semi-finalist at NIT Delhi</li>
                  <li>• Top 25 in National Business Plan Competition</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 md:px-20 bg-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">Experience</h2>
          <div className="bg-secondary/50 p-8 rounded-lg backdrop-blur-sm">
            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-purple-400">Research Intern</h3>
                <span className="text-gray-400">May 2022 - June 2022</span>
              </div>
              <h4 className="text-lg text-gray-300 mb-4">Indian Institute of Technology (IIT BHU)</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Developed NLP applications for Twitter sentiment analysis</li>
                <li>• Categorized 5,000+ tweets into abusive and non-abusive categories</li>
                <li>• Created proof of concept for categorization techniques</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-purple-400">Blockchain Club</h3>
                <span className="text-gray-400">July 2023 - June 2024</span>
              </div>
              <h4 className="text-lg text-gray-300 mb-4">Founder and Vice President</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Led team of 50 members across six divisions</li>
                <li>• Streamlined operations and enhanced communication</li>
                <li>• Implemented innovative technical solutions</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Shoppers - E-Commerce Website</h3>
              <p className="text-gray-300 mb-4">
                A fully responsive e-commerce website built with HTML, CSS, and JavaScript, focusing on user experience and modern design principles.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">HTML • CSS • JavaScript</span>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Tuberculosis Detection</h3>
              <p className="text-gray-300 mb-4">
                ML-powered system achieving 96.1% accuracy in detecting tuberculosis from chest X-rays using advanced image processing techniques.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-400">Python • Machine Learning</span>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 gradient-text">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:siyapareek139@gmail.com"
            className="inline-block px-8 py-3 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>Designed & Built by Siya Pareek</p>
      </footer>
    </div>
  );
}

export default App;