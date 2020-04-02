import React from 'react';
import './style.css';


class Contact extends React.Component { 
    state = {
        status : false,
    }
    render() {
        const {avatar,name} = this.props
        const {status} = this.state
        return (
            <div className="Contact">
                <img className="avatar" src={avatar} alt={name}/>
                <div>
                    <h4 className="name">{name}</h4>
                    <div className="status">
                        <span className={status ? 'status-online' : 'status-offline'}></span>
                        <button onClick={() => this.setState({status: !status})}>{status ? 'online' : 'offline'}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;