import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InputPage from "../src/pages/Input";
import OutputPage from "../src/pages/Output";

function App() {
  const [color, setColor] = React.useState("");
  const [colorName, setColorName] = React.useState("");
  const [other, setOther] = React.useState("");

  const setTheme = () => {
    if (color === "#d9363e") {
      setColorName("My Sin");
      setOther("#d2d9ea");
    } else if (color === "#ffb92d") {
      setColorName("Valencia");
      setOther("#f3c4c6");
    } else if (color === "#1f305e") {
      setColorName("cello");
      setOther("#d2d9ea");
    } else {
      setColorName("Magenta");
      setOther("#f1e3f1");
    }
  };
  React.useEffect(() => {
    setTheme();
  });
  return (
    <>
      <Router>
        {/* <Switch> */}
        <Route exact path="/">
          <InputPage chooseColor={setColor} />
        </Route>
        <Route path="/theme">
          <OutputPage themeColor={color} colorName={colorName} other={other} />
        </Route>
        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;
