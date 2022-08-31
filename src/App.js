import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown'

function getmd() {
  return `# Wikipedia
  So true!!!`
}

const md = getmd()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render () {
    return (
      <div className="App">
        <header>
          
        </header>
        <body>
          <div className="Header">
            <h1 className="Title">
            Wikipizzle
            </h1>
            <h3 className="Subtitle">
              Wikipedia or AI-Generated? Take a guess and test your gut!
            </h3>
          </div>

          <div className='Article'> 
          <ReactMarkdown>
          {md}
          </ReactMarkdown> 
          </div>
        </body>

        <div className='Ins'>
        <button class="button1" role="button">WIKIPEDIA</button>
        <button class="button2" role="button">AI GENERATED</button> 
        
        </div>
      </div>
    );
  }
}

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   App.render();
// }

// setInterval(tick, 1000);

export default App;
