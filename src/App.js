import "./App.css";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
