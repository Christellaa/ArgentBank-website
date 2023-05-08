import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import featuresData from "../data/featuresData.json";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {featuresData.map(({ id, img, title, text }) => (
            <Features key={id} img={img} title={title} text={text} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
