import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/EditItem.css';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
        this.toggleHidden = this.toggleHidden.bind(this);
    }

    toggleHidden(){
        document.querySelector('#EditItemContainer').classList.toggle('hidden');
        // console.log('toggle hidden')
    }
    
    render() {
        console.log(this.props, '  on edititem')
        return (
            <div className='hidden' id='EditItemContainer'>

                <span onClick={()=>{this.toggleHidden()}} id='close'>X</span>
                <label for='title'>Title</label>
                <input id='title' value='david' type='text'></input>
                <label for='details'>Details</label>
                <input id='details' type='textfield'></input>
            </div>
        );
    }
}

export default connect()(EditItem);