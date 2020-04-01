import React from 'react';
import './style.css';


class Contact extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        status : true,
      };
    }
    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
                <div>
                    <h4 className="name">{this.props.name}</h4>
                    <div className="status">
                        <span className={this.props.status ? 'status-online' : 'status-offline'}></span>
                        <button onClick={event => {const newStatus = !this.state.status; this.setState({status: newStatus});}}>{this.props.online ? 'online' : 'offline'}</button>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Contact;
