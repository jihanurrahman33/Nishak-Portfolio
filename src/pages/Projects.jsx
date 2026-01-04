import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, Zap, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Rent Wheels – Car Rental Platform',
      description:
        'A full-stack car rental web application with vehicle listings, booking management, authentication, and admin dashboard.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      image:
        'https://i.ibb.co.com/GQBT69Pd/Screenshot-2026-01-04-at-10-42-43-PM.png',
      github: 'https://github.com/jihanurrahman33/rent_wheels-client',
      live: 'https://glowing-gingersnap-8e4581.netlify.app/',
      gradient: 'from-blue-500 via-[#51A2FF] to-blue-700',
    },
    {
      id: 2,
      title: 'Zap Shift – Logistics Platform',
      description:
        'A modern parcel delivery and logistics management platform enabling users to send parcels, track deliveries in real time, and allowing riders and admins to manage delivery operations.',
      tags: [
        'React',
        'Vite',
        'Firebase',
        'Role-Based Access',
      ],
      image:
        'https://i.ibb.co.com/r8wFVdh/Screenshot-2026-01-04-at-10-44-02-PM.png',
      github: 'https://github.com/jihanurrahman33/zap-shift-client',
      live: 'https://zap-shift-84b44.web.app/',
      gradient: 'from-[#51A2FF] via-blue-600 to-[#51A2FF]',
    },
    {
      id: 3,
      title: 'PIIRS – Incident Reporting',
      description:
        'A secure MERN-based incident reporting and response system with structured workflows, role-based access, and authentication.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      image:
        'https://i.ibb.co.com/yBKNg2r1/Screenshot-2026-01-04-at-10-44-49-PM.png',
      github: 'https://github.com/jihanurrahman33/PIIRS_CLIENT',
      live: 'https://piirs-1d68b.web.app/',
      gradient: 'from-blue-400 via-[#51A2FF] to-blue-600',
    },
    {
      id: 4,
      title: 'Hero Kidz – E-Commerce',
      description:
        'A Next.js-based educational e-commerce platform for kids featuring product listings, cart system, authentication, and order processing.',
      tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind'],
      image:
        'https://i.ibb.co.com/jPdxFMpp/Screenshot-2026-01-04-at-10-45-51-PM.png',
      github: 'https://github.com/jihanurrahman33/Hero-Kidz-Full-Stack-E-Commerce-App-with-Next.js.git',
      live: 'https://hero-kidz-orpin.vercel.app/',
      gradient: 'from-[#51A2FF] via-blue-500 to-[#51A2FF]',
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden bg-[#030303]">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6"
          >
            <Zap className="w-4 h-4 text-[#51A2FF]" />
            <span className="text-sm font-medium text-gray-300">Selected Works</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Featured <span className="text-[#51A2FF]">Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Discover a showcase of my latest technical projects, ranging from full-stack applications to complex system architectures.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-[#51A2FF]/50 transition-colors duration-500"
            >
              {/* Image Section - Takes up top part */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Section */}
              <div className="relative p-6 sm:p-8 bg-[#0a0a0a]">
                 {/* Decorative Gradient Line at Top of Content */}
                 <div className={`absolute top-0 left-0 w-full h-[2px] bg-linear-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#51A2FF] transition-colors">
                        {project.title}
                        </h3>
                         <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, idx) => (
                                <span
                                key={idx}
                                className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/5"
                                >
                                {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#51A2FF] transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    View Code
                  </a>
                  {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#51A2FF] transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                        <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
         {/* View More Button */}
         <div className="text-center mt-16">
            <a
                href="https://github.com/jihanurrahman33"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#51A2FF] text-white rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
            >
                View More on GitHub
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;