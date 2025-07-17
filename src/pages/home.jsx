import "../App.css";
import Content from "../assets/molekuls/content";
import Hero from "../assets/molekuls/hero";

function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div style={{ marginBottom: "50px" }}>
          <Hero />
        </div>
        <Content />
      </div>
    </>
  );
}

export default Home;
