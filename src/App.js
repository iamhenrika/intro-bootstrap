import "./styles.css";
//import card1
import Card from "./components/Card";
//import Card2 from "./components/Card2";

// import DATA
import cardsArr from "./data";

const cards = cardsArr.map((ele, idx) => {
  return (
    <Card
      key={idx}
      {...ele}
      // img={ele.img}
      // title={ele.title.toLowerCase()}
      // text={ele.text}
      // url={ele.url}
    />
  );
});

console.log("this is cards", cards);

export default function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">{cards}</section>
    </div>
  );
}
