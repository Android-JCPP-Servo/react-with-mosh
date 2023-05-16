import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Austin", "Chicago", "Watsonville"];

  return <div><ListGroup items={items} heading={"Cities"}></ListGroup></div>
}

export default App;