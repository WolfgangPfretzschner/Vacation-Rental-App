import React, { Component } from 'react';

class NoteEditor extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.note.title,
            body: this.props.note.body
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title
        const body = this.state.body 
        const user_id = 1
        const id = this.props.note.id
        const url = 'http://localhost:3000/api/v1/notes/'
        fetch(url+id, {
            method: 'PATCH',
            body: JSON.stringify({
                title,
                body,
                user_id
            }), 
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
        .then( () => this.props.update(this.props.note.id))
    }

    render() {
        return (
        <form className="note-editor">
            <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
            <textarea name="body" value={this.state.body} onChange={this.onChange} />
            <div className="button-row">
            <input className="button" type="submit" value="Save" onClick={this.handleSubmit} />
            <button type="button" onClick={this.props.func} >Cancel</button>
            </div>
        </form>
        );
    }
}

export default NoteEditor;
