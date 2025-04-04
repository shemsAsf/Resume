import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-screen py-10 bg-cover bg-center shadow-lg"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-e3d4-51f7-90f4-7b34fe1de656/raw?se=2025-04-04T10%3A17%3A05Z&sp=r&sv=2024-08-04&sr=b&scid=a8a82bd0-54f0-589a-9626-1ed9ddc0eb34&skoid=7c382de0-129f-486b-9922-6e4a89c6eb7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-04T09%3A07%3A44Z&ske=2025-04-05T09%3A07%3A44Z&sks=b&skv=2024-08-04&sig=6a8%2Bs3%2BTteF3DhTqk264xrj1TfTo62CNLjeg434C0jE%3')" }}
    >
      <div className="absolute bottom-10 left-0 right-0 container mx-auto flex flex-col items-left px-4 text-left">
        <div className="bg-gray-900/75 p-8 rounded-lg w-1/2">
        <p className="text-white text-lg mb-4">
            Hi, I am
          </p>
          <h1 className="text-6xl font-extrabold text-white">ASFOURI Shems</h1>
          <p className="text-red-300 text-2xl my-4">Full Stack Developer | Software Engineer | Open to Work</p>
          <p className="text-white text-lg mt-4">
            I am currently looking for a full-time remote job starting in October 2025.
          </p>
        </div>
      </div>
    </motion.header>
  );
}
