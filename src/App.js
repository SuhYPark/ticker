import React, {Component} from 'react';


class Ticker extends Component {

  constructor () {
    super();
    this.state = {
      count: 0,
      status: "Pause",
    }
  }

  clear = () => {
    this.setState ({
      count: 0,
    })
  }

  pause = () => {
    if(this.state.status == "Pause"){
      this.setState({
        status: "Run",


      });
    }
    else {
      this.setState({
        status: "Pause"
      });
    }

    clearInterval (() => {
      
    })

  }
//lifeCycle methods
  componentDidMount () {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }, 1000);
  }

  shouldComponentUpdate (nextProps, nextState) {
  //this is where we check a condition if it's true or false
  //and onluy allow a rerender if the condition is true
    return (nextState.count % 3 === 0);

    // if(nextState.count % 3 == 0){
    //   return true;
    //   console.log("why", nextState.count)
    // }
    // else{
    //   return false;
    // }
    //console.log("this is the nextState value: ", nextState.count)

  }

  render() {
    return(
      <div>
        <div className="container">
          <div className="text">The ticker is: {this.state.count}</div>
          <button type="button" onClick={this.clear}>Reset the Ticker</button>&nbsp;&nbsp;
          <button type="button" onClick={this.pause}>{this.state.status} the Ticker</button>
        </div>
      </div>
    );
  };
};

export default Ticker;
