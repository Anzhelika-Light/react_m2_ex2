import AccordionOption1 from "./components/AccordionOption1/AccordionOption1";
// import AccordionOption2 from "./components/AccordionOption2/AccordionOption2";

import "./App.css";

import AccordionFAQ from "./data/accordion.json";

function App() {
  return (
    <div className="App">
      <AccordionOption1 items={AccordionFAQ} />
      {/* <AccordionOption2 items={AccordionFAQ} /> */}
    </div>
  );
}

export default App;
