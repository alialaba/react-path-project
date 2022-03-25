import Navbar from "./components/Navbar";
import data from "./data";
import MapCard from "./components/MapCard";

function App() {
  const MapLocation = data.map((item) => {
    return (
      <MapCard
        key={item.id}
        item={item}
      />
    );
  })
  return (
    <div className="App">
      <Navbar />
      {MapLocation}
    </div>
  );
}

export default App;
