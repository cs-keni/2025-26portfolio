import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Settings, Brain, Monitor, Smartphone } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Front End",
      icon: Monitor,
      color: "blue",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Back End",
      icon: Database,
      color: "green",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 }
      ]
    },
    {
      title: "Developer Tools",
      icon: Settings,
      color: "purple",
      skills: [
        { name: "Git", level: 90 },
        { name: "Visual Studio Code", level: 95 },
        { name: "Visual Studio Community", level: 85 }
      ]
    },
    {
      title: "AI/ML",
      icon: Brain,
      color: "orange",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "Keras", level: 80 },
        { name: "OpenCV", level: 75 },
        { name: "Data Preprocessing", level: 90 },
        { name: "CNN", level: 85 },
        { name: "Transfer Learning", level: 80 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getProgressColor = (color: string) => {
    const colors = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
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
                🛠️ Skills
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full shadow-glow"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
              My technical expertise across front-end, back-end, AI/ML, and development tools
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="glass dark:glass-dark rounded-2xl shadow-glass p-6 hover:shadow-glass-lg transition-all duration-300 h-full">
                    {/* Category Header */}
                    <div className={`flex items-center space-x-3 mb-6 p-4 rounded-xl bg-gradient-to-r ${getColorClasses(category.color)}`}>
                      <div className="p-2 bg-white/20 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, width: 0 }}
                          animate={isInView ? { opacity: 1, width: "100%" } : { opacity: 0, width: 0 }}
                          transition={{ duration: 0.8, delay: (index * 0.2) + (skillIndex * 0.1) }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">
                              {skill.name}
                            </span>
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full ${getProgressColor(category.color)}`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: (index * 0.2) + (skillIndex * 0.1) + 0.3 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                Additional Expertise
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Specialized knowledge and methodologies I bring to every project
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                    Machine Learning
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                  <li>• Convolutional Neural Networks (CNN)</li>
                  <li>• Transfer Learning & Data Augmentation</li>
                  <li>• Model Optimization & Regularization</li>
                  <li>• Computer Vision & Image Processing</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-500 rounded-lg">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200">
                    Software Development
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <li>• Full-Stack Development</li>
                  <li>• GUI Development & User Experience</li>
                  <li>• Data Structures & Algorithms</li>
                  <li>• System Administration</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-purple-500 rounded-lg">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200">
                    Technical Support
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                  <li>• Hardware Repair & Troubleshooting</li>
                  <li>• System Setup & Configuration</li>
                  <li>• Technical Documentation</li>
                  <li>• Customer Service Excellence</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 