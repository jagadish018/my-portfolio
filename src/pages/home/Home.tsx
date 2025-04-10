import Container from "../../components/Container";

import Hero from "../hero/Hero";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <Hero />
      </div>
    </Container>
  );
};

export default Home;
