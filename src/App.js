import "./App.css";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

function App() {
  return (
    <div>
      <motion.div>
        <NavigationBar />
        <Header />
        <About />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
