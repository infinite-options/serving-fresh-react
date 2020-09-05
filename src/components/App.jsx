import { BrowserRouter } from "react-router-dom";
import React, {useState} from "react";
import Nav from "./Nav";
import someContexts from "./makeContext";

function App() {
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <BrowserRouter>
      <someContexts.Provider value = {{cartTotal, setCartTotal}}>
        <Nav />
      </someContexts.Provider>     
    </BrowserRouter>
  );
}

export default App;

//<React.Fragment>
