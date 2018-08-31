import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';




const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
        <img width="75" src={props.avatar_url} />
        <div style={{display: 'inline-block', marginLeft: 10}}>
          <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
          <div>{props.company}</div>
        </div>  
    </div>    
  );
};

const CardList = (props) => {
  return (
      <div>
         {props.cards.map(card => <Card {...card}/>)} 
      </div>    
  );
};

class Form extends React.Component {
  state = { userName: ''}

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: Form Submit', this.state.userName);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.username}
          onChange={(event) => this.setState({userName: event.target.value})}
          placeholder="GitHub username" 
        />
        <button type="submit">Add Card</button>
      </form>  
    );
  };
};

class App extends Component {
  // constructor(props){
  //   super(props);
  // };

  state = {
    cards: [
      {name: "Sarah Byrne",
      avatar_url: "https://avatars0.githubusercontent.com/u/42070896?v=4",
      company: "JL"},
      {name: "Sarah M Byrne",
      avatar_url: "https://avatars0.githubusercontent.com/u/42070896?v=4",
      company: "JL"},
    ]
  };
  
  render() {
    return (
      <div>
        <Form />
        <CardList cards={this.state.cards} />  
      </div>
    );
  };
}



export default App;
