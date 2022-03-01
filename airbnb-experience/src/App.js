import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import React from "react"
import data from "./data"
import Card from "./components/Card";

const App = () => {
  const cardList = data.map((item) => {
    return (
      <Card
        item={item}
      />
    );
  })
  return (

    <main>
      <Navbar />
      <HeroSection />
      <div className="card-list">
        {cardList}
      </div>

    </main>

  );
}

export default App;
