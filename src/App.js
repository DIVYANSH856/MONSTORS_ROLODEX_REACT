import './App.css';
import { Component  } from "react";

class App extends Component{
  constructor(){  
    super();
    this.state={
      monsters:[ ] 
    };
  }

//  a class component specifically that needs to leverage some kind of API call in order to get data that

// it needs in order to display the appropriate UI, you want to put that inside of your component did

// mount lifecycle method.

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json())
  .then((users)=>this.setState(
    ()=>{
      return {monsters:users};
    },
    ()=>{
      console.log(this.state);
    }));
}

render() {
  return (
    <div className="App">
      {
      this.state.monsters.map((monster)=>{
        return<div key={monster.id}> 
        <h1 >{monster.name}</h1>
        </div>
      })
      }
    </div>
  );
}
}
export default App;
