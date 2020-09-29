import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.css'

/* An example React component */
class Main extends Component {
  render() {
    return (
      <div>
        <h3>Все посты</h3>
        <p>Пост 1</p>
        <p>Пост 2</p>
      </div>
    );
  }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
  ReactDOM.render(<Main />, document.getElementById('root'));
}
