import { motion } from "framer-motion";
import { Code, Database, Terminal, GitBranch, Cloud, Server } from "lucide-react";

export default function Skills() {
  return (
    <motion.section className="my-20 text-left">
      <h2 className="text-6xl font-extrabold text-gray-800">Technical Skills</h2>
      <br/>
      <div className="flex flex-col items-center justify-center gap-10">

        {/* Reusable Skill Card */}
        {[
          {
            title: "Languages",
            icon: <Code size={80} className="text-purple-500" />,
            color: "text-purple-600",
            skills: ["C#", "Java", "Python", "C++", "JavaScript", "TypeScript"],
            iconPosition: "right"
          },
          {
            title: "Web Programming",
            icon: <Cloud size={80} className="text-blue-500" />,
            color: "text-blue-600",
            skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
            iconPosition: "left"
          },
          {
            title: "Frameworks",
            icon: <GitBranch size={80} className="text-indigo-500" />,
            color: "text-indigo-600",
            skills: ["React", "Next.js", "Flask", "Django", "Node.js API"],
            iconPosition: "right"
          },
          {
            title: "Databases",
            icon: <Database size={80} className="text-green-500" />,
            color: "text-green-600",
            skills: ["MySQL", "Oracle", "PostgreSQL", "MongoDB"],
            iconPosition: "left"
          },
          {
            title: "Development Tools",
            icon: <Server size={80} className="text-gray-600" />,
            color: "text-gray-800",
            skills: ["Git", "Maven", "Docker", "Kubernetes", "Vercel", "Render"],
            iconPosition: "right"
          },
          {
            title: "Environment",
            icon: <Terminal size={80} className="text-teal-500" />,
            color: "text-teal-600",
            skills: ["Linux (Ubuntu)", "Windows"],
            iconPosition: "left"
          },
        ].map((section, i) => (
          <div key={i} className="flex flex-row items-center justify-center gap-10 w-full max-w-4xl">
            {section.iconPosition === "left" && section.icon}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: section.iconPosition === "left" ? 20 : -20 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.4 }}  
              className="flex-1 p-6 text-gray-700 rounded-lg shadow-lg"
            >
              <h3 className={`text-2xl font-semibold ${section.color}`}>{section.title}</h3>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1 text-lg list-disc list-inside">
                {section.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </motion.div>
            {section.iconPosition === "right" && section.icon}
          </div>
        ))}

      </div>
    </motion.section>
  );
}
