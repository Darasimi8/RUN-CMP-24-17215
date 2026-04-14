import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Card from "./components/Card";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  const features = [
    { title: "Fast", text: "Super fast performance" },
    { title: "Reusable", text: "Write once, use anywhere" },
    { title: "Scalable", text: "Grow your app easily" },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <Section title="Features">
        <div className="grid">
          {features.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </Section>

      <Section title="About">
        <p>This is a simple reusable React single-page website.
           Using technologies like React, we aim to deliver high-performance solutions that are easy
           to maintain and grow.
        </p>
      </Section>

      <Section title="Contact">
        <Contact />
      </Section>

      <Footer />
    </>
  );
}