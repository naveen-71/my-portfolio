import React from "react";
import { Link } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <Link to="home" smooth={true} duration={500} style={styles.link}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} style={styles.link}>
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} style={styles.link}>
            Skills
          </Link>
          <Link to="education" smooth={true} duration={500} style={styles.link}>
            Education
          </Link>
          <Link to="projects" smooth={true} duration={500} style={styles.link}>
            Projects
          </Link>
          
          <Link to="contact" smooth={true} duration={500} style={styles.link}>
            Contact
          </Link> 
        </nav>
      </header>
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
};

const styles = {
  header: { position: "fixed", top: 0, width: "100%", background: "#333", padding: "10px 0", zIndex: 1000 },
  nav: { display: "flex", justifyContent: "center", gap: "20px" },
  link: { color: "#fff", textDecoration: "none", cursor: "pointer" },
};

export default App;
