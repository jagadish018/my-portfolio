import Container from "../../components/Container";
import About from "../experience/About";

import Hero from "../hero/Hero";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Hero />
        <About />
      </div>
    </Container>
  );
};

export default Home;
