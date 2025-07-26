import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg">
                👨‍💻 About Me
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Get to Know Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full shadow-glow"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
                  
                  {/* Main Circle */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-glow-lg">
                    <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-inner-glow">
                      <div className="text-center">
                        <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                          KN
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                          Kenny Nguyen
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 shadow-glow-green animate-pulse"></div>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {[
                  { label: "Location", value: "Portland, OR (Open to Remote)", color: "blue", icon: "📍" },
                  { label: "Email", value: "nguyenkennynghia@yahoo.com", color: "purple", icon: "✉️" },
                  { label: "Phone", value: "(971) 312-7075", color: "green", icon: "📞" },
                  { label: "GitHub", value: "github.com/cs-keni", color: "orange", icon: "🐙" }
                ].map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    className="glass dark:glass-dark p-4 rounded-xl shadow-glass hover:shadow-glass-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                          {info.label}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Bio and Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Bio Section */}
              <div className="glass dark:glass-dark p-8 rounded-2xl shadow-glass">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
                  <span className="mr-3">🚀</span>
                  Who I Am
                </h3>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  <p>
                    I'm a passionate Computer Science student at the University of Oregon with a strong foundation in software development and machine learning. 
                    My journey in tech started with computer repair and has evolved into creating intelligent systems and innovative applications.
                  </p>
                  <p>
                    I specialize in full-stack development, AI/ML projects, and building user-friendly applications. 
                    From emotion recognition systems to handwritten digit classification, I love tackling complex problems 
                    and turning them into elegant solutions.
                  </p>
                </div>
              </div>

              {/* Education Section */}
              <div className="glass dark:glass-dark p-8 rounded-2xl shadow-glass">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
                  <span className="mr-3">🎓</span>
                  Education
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      school: "University of Oregon",
                      degree: "Computer Science, Bachelor of Science",
                      period: "2023 - Present",
                      color: "blue"
                    },
                    {
                      school: "Pacific University",
                      degree: "Computer Science, Bachelor of Science",
                      period: "2021 - 2023",
                      color: "purple"
                    }
                  ].map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                      className="bg-white/50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                            {edu.school}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            {edu.degree}
                          </p>
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-600 px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Coursework Section */}
              <div className="glass dark:glass-dark p-8 rounded-2xl shadow-glass">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
                  <span className="mr-3">📚</span>
                  Relevant Coursework
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "CS 313 - Intermediate Data Structures",
                    "CS 322 - Intro to Software Engineering",
                    "CS 315 - Intermediate Algorithms",
                    "CS 330 - C, C++, & Unix",
                    "CS 415 - Operating Systems",
                    "CS 425 - Principles of Programming Languages"
                  ].map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.8 + (index * 0.05) }}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-4 py-3 rounded-lg text-sm text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-300"
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 