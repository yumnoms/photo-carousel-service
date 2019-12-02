var React = require('react');
var ReactDOM = require('react-dom');

console.log("Server is working")

class App extends React.Component {
  render() {
    return <div>Hello World from src, testing babel and nodemon</div>;
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));