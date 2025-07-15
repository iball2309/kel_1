import "../App.css";
import Content from "../assets/molekuls/content";
import Hero from "../assets/molekuls/hero";

function Home() {
  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <Hero />
      </div>
      <Content />
    </>
  );
}

export default Home;
