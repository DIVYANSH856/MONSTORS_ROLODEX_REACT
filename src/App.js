import './App.css';
import { Component  } from "react";

class App extends Component{
  constructor(){  
    super();

    this.state={
      monsters:[ ] ,
      searchField: []
    };
    
    console.log('constructor');
  }

//  a class component specifically that needs to leverage some kind of API call in order to get data that

// it needs in order to display the appropriate UI, you want to put that inside of your component did

// mount lifecycle method.

componentDidMount(){
  console.log('componentDidMount');
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json())
  .then((users)=>this.setState(
    ()=>{
      return {
        monsters:users
      };
    },
    ()=>{
      console.log(this.state);
    }));
}

render() {
  console.log('render');
  const filteredMonsters = this.state.monsters.filter((monster)=>{ 
    return monster.name.toLocaleLowerCase().includes(this.state.searchField);
  });
  
  return (
    <div className="App">
      <input 
      className='search-box' 
      type='search'
      placeholder='Search monsters' 
      onChange={(event)=>{
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(
          ()=>{
           return {searchField};
        });}
      }
        />
      { filteredMonsters.map((monster)=>{
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
