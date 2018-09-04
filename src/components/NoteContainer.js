import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
// import '../assets/css/brooke.css'

class NoteContainer extends Component {
    state = {
        notes: [],
        searchTerm: '',
        activeNote: [],
        view: "view",
        name: ''
    }
    componentDidMount(){
        // var docRef = db.collection("properties").doc("banyan")

        // docRef.get().then(function(doc) {
        //     if (doc.exists) {
        //         console.log("Document data:", doc.data());
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // })
    }
    
    update = (id) => {
        fetch('http://localhost:3000/api/v1/notes')
        .then(res => res.json())
        .then(res => this.setState({notes: res}))
        .then(() => this.editSelectedNote(id) )
    } 
    
    updateNoId = () => {
        fetch('http://localhost:3000/api/v1/notes')
        .then(res => res.json())
        .then(res => this.setState({notes: res,filteredNotes: res}))
    }

    getUpdatedSearchterm = (term) => {
        this.setState({searchTerm: term}, () => this.runFilter(term))
    }

    runFilter = () => {
        const filteredNotes = this.state.notes.filter(note => note.title.includes(this.state.searchTerm) )
        return  <Sidebar notes={filteredNotes} func={this.viewSelectedNote} addNewDefaultNote={this.addNewDefaultNote}/>
    }
    
    viewSelectedNote = (id) => {
        const foundNote = this.state.notes.find(note => note.id === id)
        this.setState({activeNote: foundNote, view: "view"})
    }
    
    editSelectedNote = (id) => {
        const foundNote = this.state.notes.find(note => note.id === id)
        this.setState({activeNote: foundNote, view: "edit"})
    }

    addNewDefaultNote = () => {
        // console.log("%cclicked","color:green;font-size:18px",)
    }
    
    changeView = () => {
        this.state.view === "edit" ? 
        this.setState({view:"view"}) :
        this.setState({view:"edit"})
    }

    render() {
        console.log(this.state.notes);
        
        return (
        <Fragment>
            <Search searchTerm={this.state.searchTerm} onSearchChange={this.getUpdatedSearchterm}/>
            <div className='container'>
                {this.runFilter()}
                <h2>{this.state.name}</h2>
                <Content note={this.state.activeNote} changeView={this.changeView} view={this.state.view} update={this.update}/>
            </div>
        </Fragment>
        );
    }
}

export default NoteContainer;
