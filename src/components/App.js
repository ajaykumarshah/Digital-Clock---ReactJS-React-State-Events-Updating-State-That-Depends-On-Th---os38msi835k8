import React, { Fragment } from 'react'
// import '../styles/App.css';
// const App = () => {

//   return (
//     <div id="main">
//       <div className="date-time"></div>
//     </div>
//   )
// }


// export default App;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div id="main">
        <div className="date-time">
          <h2>It is {this.state.date.toLocaleString()}.</h2>
        </div>
      </div>
    );
  }
}
export default App;