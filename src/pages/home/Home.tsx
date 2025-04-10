import Container from "../../components/Container";
import Footer from "../../components/footer";
import About from "../about/About";
import Connect from "../Connect/Connect";
import Education from "../Eduction/Eduction";
import Experience from "../Experience/Experience";

import Hero from "../hero/Hero";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-7">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Connect />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
