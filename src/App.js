import React from 'react';
import './App.css';
import List from './list';
import Title from './title';
import Contents from './Contents';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      memos: [
        {
          title: 'how to use',
          contents: ['create new memo', 'edit title', 'add new contents', 'did contents style line-through', 'can be deleted']
        }
      ]
    }
  }

  render() {
    return (
      <div class="grid-container">
        <div class="item1">Solo-List</div>
        <div class="item2">Memo List<List title = {this.state.memos[0].title}/></div>
        <div class="item3"><Title /></div>
        <div class="item5"><Contents /></div>
      </div>
    )
  }
}

export default App;
