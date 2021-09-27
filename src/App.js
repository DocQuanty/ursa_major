import "./fonts/fonts.scss";
import "./App.scss";
import PageMain from "./Components/Pages/PageMain/PageMain";
import React from "react";

class App extends React.Component {
  constructor(props) {
    // debugger;
    super(props);
    this.state = {
      twoLinks: [
        { text: "awdawd", href: "/" },
        { text: "awdawd", href: "/" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <PageMain state={this.state} />
      </div>
    );
  }
}

export default App;
