import Container from "../../components/Container";
import About from "../about/About";
import Experience from "../Experience/Experience";

import Hero from "../hero/Hero";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col gap-7">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
    </Container>
  );
};

export default Home;
