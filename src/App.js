import React, { Component } from 'react';
import './App.css';
//import Radium, {StyleRoot} from 'radium'
import Person from "./Person/Person.js"
import UserInput from "./UserInput/UserInput.js"
import UserOutput from "./UserOutput/UserOutput.js"

class App extends Component {
  state = {
    persons: [
      {name: "Tanmay"},
      {name: "Max"},
      {name: "Manu"}
    ],
    otherState: "some other value",
    showPersons: false,
    userInput: ''
  }

  switchNameHandler = () =>{
    //console.log("Button was clicked")
    // DONT DO THIS: this.state.persons[0].name = 'Tanmay Chhabra'
    this.setState({
      persons: [
        {name: "Tanmay Chhabra"},
        {name: "Maximilian"},
        {name: "Manu Roy"}
      ]
    })
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        {name: "Maximilian"},
        {name: event.target.value},
        {name: "Manuel"}
      ]
    })
  }

  togglePersonsHandler = () =>{

    //const doesShow = this.state.showPersons
    
      this.setState({
        showPersons : !this.state.showPersons
      })
  }

  userInputHandler = (event) =>{
    this.setState({
      userInput: event.target.value
    })

  }
  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      //':hover':{
        //backgroundColor: 'lightgreen',
        //color: 'black'
      //}
    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
        
        <div>
          
         <Person 
         name = {this.state.persons[0].name}
         click = {this.switchNameHandler} />
         <Person 
         name = {this.state.persons[1].name} changed = {this.nameChangedHandler}>My hobbies: Racing and Playing</Person>
         <Person 
         name = {this.state.persons[2].name} />
          
         </div>
        )
        style.backgroundColor = "red";
        //style[':hover'] ={
          //backgroundColor: 'salmon',
          //color: 'black'
        //}
      
    }

    let classes = ['red', 'bold'].join(' ')
    return (
      //<StyleRoot>
       <div className="App">
         <h1>Hi, This is a React app</h1>
         <button
          style = {style}
          onClick ={this.togglePersonsHandler}>Toggle Names</button>
          {persons}
          <p className = {classes}>The text is working fine!!!</p>
          
         
         

        <UserInput click = {this.userInputHandler} inputLength = {this.state.userInput.length}/>
        <UserOutput userName = "Tanmay"/>
        <UserOutput userName = "Kanishka"/>
        <UserOutput userName = "Rakshma"/>

       </div>
       //</StyleRoot>

      //React.createElement('div',null, React.createElement('h1', {classname: 'App'}, 'Hi I\'m a React App'))
    );
  }
}

//export default Radium(App);
