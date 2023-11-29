import { useState } from "react";
import componentsImg from "./assets/components.png";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data";

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

//OR

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button!");

  function handelSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handelSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handelSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handelSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handelSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
