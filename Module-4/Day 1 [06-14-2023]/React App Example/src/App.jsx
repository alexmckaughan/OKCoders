// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";

// Below functions are often called "Components"

// function Block() {
//   console.log("Hello from within the block");
//   return <div>My Block</div>;
// }

// function Block() {
//   return "My Block";
// }

function App() {
  // const content = true ? "World" : "There";
  return (
    <div className="App">
    <Navbar />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <div>Hello {content}</div>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
