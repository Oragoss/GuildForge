import React, {Component} from 'react';
import Chat from '../Chat/Chat'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMessagesOn : true,
            isFriendsOn : false,
            isChatOn : false,
            isLoggedIn : false
        };

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
        let pageSection
        if(state.isChatOn) {
            pageSection = <Chat />
        }
        else if(state.isMessagesOn) {
            pageSection =
            <div className="ui raised very padded text container segment">
                <h2 className="ui header center aligned">Welcome to guild forge</h2>
                <p className ="ui center aligned grid">Forge Your Guild Now!</p>
            </div>
        }
        else if(state.isFriendsOn) {
            pageSection =
            <div className="ui raised text container">
                <iframe title="discord-friends-list" src="https://discordapp.com/widget?id=428211209855172629&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0"></iframe>
            </div>
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
                    {pageSection}
                </div>
            </div>
        );
    }
}

export default Home