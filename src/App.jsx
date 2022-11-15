import "./App.css";
import Navbar from "../src/components/Navbar.jsx";
import Card from "./components/Card";
import data from "/src/data.js";

function App() {
  const cardElements = data.map((item) => {
    return <Card key={item.googleMapsUrl} item={item} />;
  });

  return (
    <div className="App">
      <Navbar />
      {cardElements}
    </div>
  );
}

export default App;
