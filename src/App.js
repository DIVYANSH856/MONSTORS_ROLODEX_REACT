import './App.css';
import { Component  } from "react";
import Cardlist from './components/card-list/card-list.component';
import Searchbox from './components/search-box/search-box.component';

class App extends Component{
  constructor(){  
    super();

    this.state={
      monsters:[],
      searchField: ''
    };
    
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
    ));
}

onSearchchange= (event)=>{
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(
    ()=>{
     return {searchField};
  });}

render() {
  console.log('render');

  const {monsters,searchField}=this.state
  const{onSearchchange}=this;

  const filteredMonsters = monsters.filter((monster)=>{ 
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  
  return (
    <div className="App">
       <div className="app-title">
        <h1>MonstERS Rolodex</h1>
      </div>
      {/* { filteredMonsters.map((monster)=>{
        return<div key={monster.id}> 
        <h1 >{monster.name}</h1>
        </div>
      })
      } */}
      <Searchbox 
      className='monster-search-box'
      onChangeHandler={onSearchchange}
      placeholder='search-monsters' />
      <Cardlist monsters={filteredMonsters}
      />
    </div>
  );
}
}
export default App;
 
