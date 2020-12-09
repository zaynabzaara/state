import React from 'react';

import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      person: {
        fullName: 'ZAARA Zaynab',
        bio: "« La sagesse, c'est d'avoir des rêves suffisamment grands pour ne pas les perdre de vue lorsqu'on les poursuit. » - Oscar Wilde",
        imgSrc: './fed.jpg',
        profession: 'Full Stack Developer Engineer',
      },

      show: false,
      counter: 0
    }
  }


  change = () => {
    this.setState({
      show: !this.state.show
    })
  }
  increment = () => {
    const {counter}= this.state;
    this.setState({counter: counter + 1})
    
  }

  componentDidMount(){

setInterval(this.increment, 1000) 
  
}

  render() {


    return (
      <div className='App'>
        Component Life Cycle : {this.state.counter} <br />
        <button  onClick={this.change}> show profile</button>

        {this.state.show ?
          <div><br />
            <p>{this.state.person.fullName}</p><br />
            <p>{this.state.person.bio}</p><br />
            <p>{this.state.person.profession}</p><br />
            <img alt='' src={this.state.person.imgSrc} /><br />
          </div> : <p>Veuillez cliquer le bouton</p>}


      </div>

    )
  }
}
export default App;
