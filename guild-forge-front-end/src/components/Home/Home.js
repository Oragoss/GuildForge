import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            isMessagesOn : false,
            isFriendsOn : false,
            isChatOn : true,
            isLoggedIn : false
        };

        // This binding is necessary to make `this` work in the callback
        this.loginClick = this.loginClick.bind(this);
        this.chatClick = this.chatClick.bind(this)
        this.messagesClick = this.messagesClick.bind(this)
        this.friendsClick = this.friendsClick.bind(this)
      }

    loginClick(e) {
      e.preventDefault()
      this.setState(prevState => ({
        isLoggedIn: !prevState.isLoggedIn
      }));
    }

    chatClick(e) {
        e.preventDefault()
        this.setState(prevState => ({
            isChatOn: true,
            isMessagesOn: false,
            isFriendsOn: false
        }))
    }
    messagesClick(e) {
        e.preventDefault()
        this.setState(prevState => ({
            isChatOn: false,
            isMessagesOn: true,
            isFriendsOn: false
        }))
    }
    friendsClick(e) {
        e.preventDefault()
        this.setState(prevState => ({
            isChatOn: false,
            isMessagesOn: false,
            isFriendsOn: true
        }))
    }

    render() {
        const state = this.state
        let paragraph
        if(state.isChatOn) {
            paragraph = <div className="ui raised very padded text container segment">
                            <h2 className="ui header center aligned">Welcome to guild forge</h2>
                            <p className ="ui center aligned grid">Forge Your Guild Now!</p>
                        </div>
        }
        else if(state.isMessagesOn) {
            paragraph = `<p>
            Messages ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nulla vero, accusantium et dicta labore amet cumque porro, aliquam similique eaque obcaecati non error deserunt a aut rem modi asperiores.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nulla vero, accusantium et dicta labore amet cumque porro, aliquam similique eaque obcaecati non error deserunt a aut rem modi asperiores.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nulla vero, accusantium et dicta labore amet cumque porro, aliquam similique eaque obcaecati non error deserunt a aut rem modi asperiores.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nulla vero, accusantium et dicta labore amet cumque porro, aliquam similique eaque obcaecati non error deserunt a aut rem modi asperiores.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nulla vero, accusantium et dicta labore amet cumque porro, aliquam similique eaque obcaecati non error deserunt a aut rem modi asperiores.
            </p>`
        }
        else if(state.isFriendsOn) {
            paragraph = `<p>
            Friends ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nulla vero, accusantium et dicta labore amet cumque porro, aliquam similique eaque obcaecati non error deserunt a aut rem modi asperiores.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nulla vero, accusantium et dicta labore amet cumque porro, aliquam similique eaque obcaecati non error deserunt a aut rem modi asperiores.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nulla vero, accusantium et dicta labore amet cumque porro, aliquam similique eaque obcaecati non error deserunt a aut rem modi asperiores.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nulla vero, accusantium et dicta labore amet cumque porro, aliquam similique eaque obcaecati non error deserunt a aut rem modi asperiores.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nulla vero, accusantium et dicta labore amet cumque porro, aliquam similique eaque obcaecati non error deserunt a aut rem modi asperiores.
            </p>`
        }

        return (
            <div>
                <div className="ui secondary pointing menu">
                    <a href="/" onClick={this.chatClick} className={state.isChatOn ? "item active":"item"}>
                        Chat
                    </a>
                    <a href="/" onClick={this.messagesClick} className={state.isMessagesOn ? "item active":"item"}>
                        Messages
                    </a>
                    <a href="/" onClick={this.friendsClick} className={state.isFriendsOn ? "item active":"item"}>
                        Friends
                    </a>
                    <div href="/" onClick={this.loginClick} className="right menu">
                        <a className="ui item">
                        {state.isLoggedIn ? "Logout" : "Login"}
                        </a>
                    </div>
                </div>
                <div className="ui segment">
                    {paragraph}
                </div>
            </div>
        );
    }
}

export default Home