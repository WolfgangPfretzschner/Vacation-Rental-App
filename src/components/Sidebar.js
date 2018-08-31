import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='master-detail-element sidebar'>
                <NoteList  notes={this.props.notes} func={this.props.func}/>
                <button onClick={this.props.addNewDefaultNote} >New</button>
            </div>
        );
    }
}
 
export default Sidebar;
