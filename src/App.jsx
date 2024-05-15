import About from "./page-components/About.jsx";
import Hero from "./page-components/Hero.jsx";
import Links from "./utils/Links.jsx";
import NavBar from "./page-components/NavBar.jsx";
import Experience from "./page-components/Experience.jsx";
import Contact from "./page-components/Contact.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Links />
      <About />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
