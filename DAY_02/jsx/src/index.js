// import react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText() {
  return "submit";
}

// create a react component 
const App = () => {
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

// Take the react component and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));