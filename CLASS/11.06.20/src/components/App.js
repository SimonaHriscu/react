import React from "react";
import Text from "./Text";

function App() {
  return (
    <React.Fragment>
      <h1>This is the second React file</h1>
      <Text name="Simona" age="22" />
      <Text name="Ovidiu" age = "15"/>
      <Text name="Andreea" />
      <Text name="Dani" />
    </React.Fragment>
  );
}

export default App;
