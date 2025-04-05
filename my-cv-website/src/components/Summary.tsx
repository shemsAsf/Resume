import { motion } from "framer-motion";

export default function Summary() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-10 text-justify py-10"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center mt-6 max-w-6xl mx-auto">
        {/* Image Section */}
        <img
          src="/MyPicture.jpg"
          alt="Your Photo"
          className="w-60 h-auto object-cover shadow-lg sm:mr-6 mb-6 sm:mb-0"
        />

        {/* Text Section */}
        <div className="text-gray-700 text-lg sm:text-xl sm:max-w-3xl">
          <h2 className="text-6xl font-semibold text-gray-800">About Me</h2>
          <br />
          <p className="font-semibold text-gray-800">
            Developer driven by a passion for understanding, building, and refining technology.
          </p>
          <p className="mt-4">
            What truly facinate me about computer science is understanding how things works at their core.
            <br />
            From a young age, I’ve been captivated by the process of discovering how systems, software, and
            algorithms come together and how we can use them to do as we please.
            <br />
            It&apos;s not just about learning to code, it&apos;s about unraveling and mastering the logic behind the
            tools we use every day and how they shape our world.
            <br />
            This curiosity fuels my desire to not only keep learning but also to bring my growing skills and
            knowledge into the teams I work with.
            <br />
            I’m passionate about applying what I know, collaborating with others, and using technology to create
            meaningful solutions.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
