import React from 'react';
import { EntryForm } from './Entryform';

class App1 extends React.Component{
  render(){
    return (
      <div>
      <h1>Calorie Calculator</h1>
      <div className='box'>
      <EntryForm />
      </div>
      <footer class="footer">
        <small>© Jacob Crawley, 2020</small>
        <br></br>
        <small>Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></small>
      </footer>
      </div>
    );
  }
}



export default App1;