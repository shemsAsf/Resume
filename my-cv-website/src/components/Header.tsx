import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-screen py-10 bg-cover bg-center shadow-lg flex items-end"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="container px-4 flex justify-start">
        <div className="bg-gray-900/75 p-6 sm:p-8 rounded-lg w-full sm:w-3/4 md:w-2/5 
          md:absolute md:bottom-12 md:left-1/4 text-left">
          <p className="text-white text-lg sm:text-xl mb-2 sm:mb-4">Hi, I am</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
            ASFOURI Shems
          </h1>
          <p className="text-red-300 text-xl sm:text-2xl my-2 sm:my-4">
            Full Stack Developer | Software Engineer | Open to Work
          </p>
          <p className="text-white text-base sm:text-lg mt-2 sm:mt-4">
            I am currently looking for a full-time remote job starting in
            October 2025.
          </p>
        </div>
      </div>
    </motion.header>
  );
}
