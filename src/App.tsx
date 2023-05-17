import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {

  const [alertVisible, setAlertVisible] = useState(false);

  let items = ["New York", "San Francisco", "Austin", "Chicago", "Watsonville"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>Hello World<span>!</span></Alert>}
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Button onClick={() => setAlertVisible(true)}>React Button</Button>
    </div>
  );
}

export default App;
