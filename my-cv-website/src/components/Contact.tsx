import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="my-10 text-center"
    >
      <h2 className="text-6xl font-semibold text-gray-800">Contact</h2>
      <br/>
      
      <div className="mt-10 ml-50 mr-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-400">
        
        {/* Email */}
        <div className="flex flex-col items-center space-y-2">
          <Mail size={40} className="text-gray-800" />
          <h3 className="text-lg font-semibold text-gray-800">Email</h3>
          <a 
            href="mailto:shems@asfouri.fr" 
            className="text-gray-600 hover:text-gray-900 transition"
          >
            shems@asfouri.fr
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center space-y-2">
          <Phone size={40} className="text-gray-800" />
          <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
          <a 
            href="tel:+33750826423" 
            className="text-gray-600 hover:text-gray-900 transition"
          >
            +33 7 50 82 64 23
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col items-center space-y-2">
          <Linkedin size={40} className="text-gray-800" />
          <h3 className="text-lg font-semibold text-gray-800">LinkedIn</h3>
          <a 
            href="https://linkedin.com/in/yourname" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            linkedin.com/in/yourname
          </a>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center space-y-2">
          <Github size={40} className="text-gray-800" />
          <h3 className="text-lg font-semibold text-gray-800">GitHub</h3>
          <a 
            href="https://github.com/yourgithub" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            github.com/yourgithub
          </a>
        </div>

      </div>
    </motion.section>
  );
}
