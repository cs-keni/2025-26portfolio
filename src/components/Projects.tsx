import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Brain, Code, Monitor } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "EmoScanner",
      subtitle: "Human Facial Emotion Recognition",
      description: "A CNN-based system that recognizes human facial emotions with high accuracy using deep learning and computer vision techniques.",
      period: "Apr 2024 - Jun 2024",
      achievements: [
        "Designed and trained a CNN model to recognize human facial emotions (happy, sad, angry, scared, etc.) using the FER-2013 dataset, achieving an accuracy of 78%",
        "Processed and augmented image data to handle variations in lighting, facial expressions, and occlusions",
        "Integrated data augmentation, dropout, and batch normalization to prevent overfitting and optimize model performance",
        "Utilized TensorFlow, Keras, and OpenCV for model development, training, and image processing",
        "Used transfer learning from VGG16 and leveraged their feature extraction capabilities to improve the model"
      ],
      technologies: ["TensorFlow", "Keras", "OpenCV", "Python", "CNN", "Transfer Learning", "VGG16"],
      category: "AI/ML",
      icon: Brain,
      color: "purple",
      github: "#",
      demo: "#"
    },
    {
      title: "Four's & Nine's",
      subtitle: "Handwritten Digit Recognition",
      description: "A specialized CNN model that accurately distinguishes between handwritten digits 4 and 9, achieving exceptional accuracy through advanced preprocessing and regularization techniques.",
      period: "Dec 2023 - Feb 2024",
      achievements: [
        "Developed a Convolutional Neural Network to accurately distinguish between handwritten digits of 4 and 9, achieving an accuracy of 98%",
        "Implemented data preprocessing techniques including normalization and augmentation to enhance model performance and robustness",
        "Utilized TensorFlow and Keras for model development and training, optimizing hyperparameters for improved accuracy",
        "Added dropout layers and L2 regularization to combat model overfitting",
        "Estimated model confidence using softmax output and bootstrapping methods for confidence interval"
      ],
      technologies: ["TensorFlow", "Keras", "Python", "CNN", "Data Augmentation", "Regularization", "Bootstrapping"],
      category: "AI/ML",
      icon: Brain,
      color: "blue",
      github: "#",
      demo: "#"
    },
    {
      title: "Noir",
      subtitle: "Windows 10 Notepad Clone",
      description: "A feature-rich text editor built with Python and Tkinter, offering a modern dark theme and comprehensive file management capabilities.",
      period: "Sep 2023 - Oct 2024",
      achievements: [
        "Designed and implemented a Python-based text editor using Tkinter",
        "Integrated key features such as file management, text editing, and undo/redo functionality for a comprehensive user experience using the best-fit data structures",
        "Implemented a dark theme for the user interface, creating an aesthetically pleasing and user-friendly environment",
        "Incorporated dynamic font size adjustments through Pillow",
        "Architected a reliable unsaved changes prompt system, alerting users to save their work before exiting the application"
      ],
      technologies: ["Python", "Tkinter", "Pillow", "File I/O", "GUI Development", "Data Structures"],
      category: "Desktop App",
      icon: Monitor,
      color: "green",
      github: "#",
      demo: "#"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/ML": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      "Desktop App": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      "Web App": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
    };
    return colors[category as keyof typeof colors] || colors["Web App"];
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
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
                🚀 Projects
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full shadow-glow"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
              Showcasing my technical skills through innovative projects in AI/ML and software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group h-full"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                    {/* Project Header */}
                    <div className={`p-6 bg-gradient-to-r ${getColorClasses(project.color)}`}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-white/20 rounded-lg">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">
                              {project.title}
                            </h3>
                            <p className="text-white/80 text-sm">
                              {project.subtitle}
                            </p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)} self-start sm:self-auto`}>
                          {project.category}
                        </span>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Period */}
                      <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                        <Code className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-6 flex-1">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {project.achievements.slice(0, 3).map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-slate-600 dark:text-slate-400">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Links */}
                      <div className="flex items-center space-x-4 pt-4 border-t border-slate-200 dark:border-slate-700 mt-auto">
                        <a
                          href={project.github}
                          className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm">Code</span>
                        </a>
                        <a
                          href={project.demo}
                          className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/cs-keni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 