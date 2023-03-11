import './App.css';
import Card from "./components/Card";
import Card2 from "./components/Card2";
import logo from './logo.svg';
import cardsArr from './data';
console.log('this is cardsArr:', cardsArr)


function App() {
  const cards = cardsArr.map((ele, index) => {
    return (
      <Card
      img={ele.img}
      title={ele.title}
      text={ele.text}
      url={ele.url}
      key={index}
      />
    )
  })
  console.log('this is cards:', cards);
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {cards}
        {/* <Card1 /> */}
        {/* <Card2 /> */}
      </section>
    </div>
  );
}

export default App;
