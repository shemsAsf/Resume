import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="my-10 text-left py-10"
    >
      <h2 className="text-6xl font-semibold text-gray-800">Professional Experience</h2>

      <div className="relative max-w-6xl mx-auto mt-6">
        <ol className="border-l border-gray-700">
          {/* Experience 1 */}
          <li className="mb-10 ml-6 relative">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full -left-9 top-2 ring-8 ring-indigo-600"></span>
            <div className="pl-10">
              <h3 className="text-3xl text-left font-semibold text-indigo-600">IVALUA - MONTPELLIER</h3>
              <p className="italic text-lg text-gray-500">Apprenticeship | 2023 (2 years)</p>
              <p className="mt-4 text-gray-700">
                Ivalua is a global procurement and spend management software company, offering solutions to manage suppliers, sourcing, procurement, and payments. The company serves prestigious clients in various industries, providing them with advanced tools to optimize their operations.
              </p>
              <p className="mt-4 text-gray-700">
                During my apprenticeship, I was responsible for the maintenance and evolution of a strategic tool in C# to manage updates for the Ivalua solution, specifically tailored to the needs of prestigious clients.
              </p>
              <p className="mt-4 text-gray-700">
                My role included process analysis, anomaly correction, adding functionalities, and rigorous testing to ensure reliability. This experience significantly strengthened my programming skills, problem-solving abilities, and my ability to work in a demanding, team-oriented environment.
              </p>
            </div>
          </li>

          {/* Experience 2 */}
          <li className="mb-10 ml-6 relative">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-600 rounded-full -left-9 top-2 ring-8 ring-teal-600"></span>
            <div className="pl-10">
              <h3 className="text-3xl font-semibold text-left text-teal-600">DEGRIFF PC - SAINT GELY DU FESC</h3>
              <p className="italic text-lg text-gray-500">Internship | 2021 (1 month)</p>
              <p className="mt-4 text-gray-700">
                Degriff PC is a local hardware store known for its personalized service and repair expertise. In addition to selling computer hardware and accessories, the company operates a workshop where they offer repair services for various IT devices, including desktops, laptops, and other peripherals.
              </p>
              <p className="mt-4 text-gray-700">
                During my internship, I was involved in repairing a variety of IT hardware, as well as cleaning and removing malware from affected devices. This role provided me with extensive technical knowledge of hardware functionality and introduced me to various work methods, including a structured approach to problem identification and task prioritization.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </motion.section>
  );
}
