import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions'

class Content extends Component {
    constructor(props){
        super(props)
    }

    renderContent = () => {
        if (this.props.view === "edit") {
            return <NoteEditor note={this.props.note} func={this.props.changeView} update={this.props.update}/>;
        } else if (this.props.view ==="view" && this.props.note.id) {
            return <NoteViewer note={this.props.note} func={this.props.changeView}/>;
        } else {
            return <Instructions />;
        }
    }
    
    render() {
        return (
            <div className='master-detail-element detail'>
            {this.renderContent()}
        </div>
        );
    }
}

export default Content;
