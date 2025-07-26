import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "EpiBuild",
      location: "Remote",
      period: "Jan 2025 - Current",
      description: "Automated clinical data processing and billing systems for healthcare revenue optimization.",
      achievements: [
        "Automated clinical data processing using Google Apps Script to extract and normalize medical chart data from Google Sheets",
        "Developed custom regex-based logic to identify and correct inconsistent or ambiguous clinical terms",
        "Automated billing to insurance to supply revenue to the company"
      ],
      skills: ["Google Apps Script", "Regex", "Data Processing", "Healthcare Systems"],
      color: "blue"
    },
    {
      title: "Computer Helpdesk Technician",
      company: "Pacific University",
      location: "Forest Grove, OR",
      period: "Oct 2021 - May 2023",
      description: "Provided technical support and computer repair services for university faculty and students.",
      achievements: [
        "Repaired computer/laptop parts for university faculty/students",
        "Troubleshooted computational errors, restoring devices to functional state",
        "Oversee daily performance of computer systems, including setup of electronic equipment",
        "Performed proper installation of cables, operating systems, or appropriate hardware/software"
      ],
      skills: ["Hardware Repair", "System Administration", "Technical Support", "Troubleshooting"],
      color: "green"
    },
    {
      title: "Remote Software Developer - AI Training",
      company: "Outlier AI",
      location: "Remote",
      period: "May 2024 - Jan 2025",
      description: "Contributed to AI model training through code evaluation and generation.",
      achievements: [
        "Evaluated quality of AI-generated code, providing detailed human-readable feedback to improve model performance",
        "Wrote functional and efficient code to contribute to the training of generative AI models",
        "Utilized Java, Python, JavaScript, and C++ to support AI training projects",
        "Communicated complex scientific concepts effectively, enhancing understanding and collaboration within the team"
      ],
      skills: ["Java", "Python", "JavaScript", "C++", "AI/ML", "Code Review"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-500 bg-blue-50 dark:bg-blue-900/20",
      green: "border-green-500 bg-green-50 dark:bg-green-900/20", 
      purple: "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getColorText = (color: string) => {
    const colors = {
      blue: "text-blue-700 dark:text-blue-300",
      green: "text-green-700 dark:text-green-300",
      purple: "text-purple-700 dark:text-purple-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 bg-white dark:bg-slate-900">
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
                💼 Experience
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full shadow-glow"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
              My professional journey from technical support to software engineering and AI development
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-800 border-4 border-blue-500 rounded-full z-10 shadow-glow"></div>

                  {/* Content Card */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="glass dark:glass-dark p-6 rounded-2xl shadow-glass hover:shadow-glass-lg transition-all duration-300 transform hover:-translate-y-2">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-slate-600 dark:text-slate-400 gap-2">
                            <div className="flex items-center space-x-1">
                              <Building className="w-4 h-4" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-slate-600 dark:text-slate-400">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(exp.color)} ${getColorText(exp.color)}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Cards */}
          <div className="lg:hidden space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass dark:glass-dark p-6 rounded-2xl shadow-glass hover:shadow-glass-lg transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full self-start">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(exp.color)} ${getColorText(exp.color)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 