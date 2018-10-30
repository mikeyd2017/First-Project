import React, { Component } from 'react'
import './Admin.css';

class Admin extends Component {
    state = {

    };
  
    render() {
      return (
        <div class="ui card">
          <div class="content">
            <div class="header">Add an Item</div>
          </div>
          <div class="content">
          <input type="file" onChange={this.fileChangedHandler}></input>
          <div class="ui input focus">
          <input type="text" placeholder="Item Name"></input>
          </div>
          <div class="ui input focus">
          <input type="text" placeholder="Picture Height"></input>
          </div>
          <div class="ui input focus">
          <input type="text" placeholder="Picture Width"></input>
          </div>
          <div class="ui input focus">
          <input type="text" placeholder="Cost"></input>
          </div>
          <button class="ui primary button" onClick={this.uploadHandler}>
          Upload!
          </button>
  
          </div>
        </div>
      )
    }
  }

  export default Admin