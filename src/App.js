import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown'

function getmd() {
  return `# Lau Theorem
  From Wikipedia, the free encyclopedia
  
  
  ## Introduction
  
  In mathematics, the Lau theorem, named after Danish mathematician Poul Lau, states that every countable subset of a separable metric space is itself separable.
  
  
  ## Definition
  
  A separable metric space is a metric space in which every countable subset is itself a metric space.
  
  
  ## Example
  
  The set of rational numbers is a separable metric space, since the subset of rational numbers consisting of the natural numbers is a metric space.
  
  
  ## Proof
  
  The proof is by contradiction. Suppose that there exists a separable metric space that does not contain every countable subset. Let S be a countable subset of that space. Since S is separable, there exists a sequence in S converging to some point x in S. Since x is not in S, there must exist a point y in S such that x and y are not in the same metric space. But this is a contradiction, since the metric spaces consisting of the rational numbers and the points x, y are the same.
  
  
  ## See also
  
   separable metric space
  
  
  ## References
  
  [1] Poul Lau. "The Lau theorem." Bull. Amer. Math. Soc. 78 (1972): 1063-1064.
  `
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
        <div className='buttoncontainer'>
        <button class="button1" role="button"><span>WIKIPEDIA</span></button>
        </div>
        <div className='buttoncontainer'>
        <button class="button2" role="button"><span>AI GENERATED</span></button> 
        </div>
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
