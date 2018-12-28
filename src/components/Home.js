import React from 'react';
import ReactDOM from 'react-dom';
import "../App.css";

const Home = () => {
    return(
        <div className="Home">
            <div className="Homediv">
                <h1>Your post</h1>
                <Post/>
            </div>
            <Feed/>
        </div>
    );
};
class Post extends React.Component{
    constructor(){
        super();
        this.clearPost = this.clearPost.bind(this);
    }
    clearPost(){
        var _post = document.getElementById("post");
        ReactDOM.findDOMNode(_post).value = "";
    }
    render(){
        return(
            <div  className="postDiv">
                <div className="postDiv_row">
                    <textarea rows="5" id="post" draggable="false"
                        placeholder="What's on your mood"></textarea>
                </div>
                <div className="postDiv_row">
                    <button className="button">Post</button>
                    <button className="button" onClick={this.clearPost}>Clear</button>
                </div>
            </div>
        );
    }
}
class Feed extends React.Component{
    constructor(){
        super();
        this.state = {
            data : [
                {
                    name: "CHIRAG AGRAWAL",
                    date: "28 Dec 2018",
                    time: "",
                    votes: 0,
                    myVote: 0,
                    post: "The state should be avoided as much as possible. It is a good practice to centralize the state and pass it down the component tree as props. Whenever we have a group of components that need the same data, we should set a container element around them that will hold the state. Flux pattern is a nice way of handling the state in React apps."
                },
                {
                    name: "CHIRAG AGRAWAL",
                    date: "28 Dec 2018",
                    time: "",
                    votes: 0,
                    myVote: 0,
                    post: "The PropTypes should always be defined. This will help is track all props in the app and it will also be useful for any developer working on the same project."
                },
                {
                    name: "CHIRAG AGRAWAL",
                    date: "28 Dec 2018",
                    time: "",
                    votes: 0,
                    myVote: 0,
                    post: "Most of the app's logic should be moved inside the render method. We should try to minimize logic in component lifecycle methods and move that logic in the render method. The less state and props we use, the cleaner the code will be. We should always make the state as simple as possible."
                },
                {
                    name: "CHIRAG AGRAWAL",
                    date: "28 Dec 2018",
                    time: "",
                    votes: 0,
                    myVote: 0,
                    post: "The PropTypes should always be defined. This will help is track all props in the app and it will also be useful for any developer working on the same project."
                },
                {
                    name: "CHIRAG AGRAWAL",
                    date: "28 Dec 2018",
                    time: "",
                    votes: 0,
                    myVote: 0,
                    post: "Most of the app's logic should be moved inside the render method. We should try to minimize logic in component lifecycle methods and move that logic in the render method. The less state and props we use, the cleaner the code will be. We should always make the state as simple as possible."
                },
                {
                    name: "CHIRAG AGRAWAL",
                    date: "28 Dec 2018",
                    time: "",
                    votes: 0,
                    myVote: 0,
                    post: "The PropTypes should always be defined. This will help is track all props in the app and it will also be useful for any developer working on the same project."
                },
                {
                    name: "CHIRAG AGRAWAL",
                    date: "28 Dec 2018",
                    time: "",
                    votes: 0,
                    myVote: 0,
                    post: "Most of the app's logic should be moved inside the render method. We should try to minimize logic in component lifecycle methods and move that logic in the render method. The less state and props we use, the cleaner the code will be. We should always make the state as simple as possible."
                },
                {
                    name: "CHIRAG AGRAWAL",
                    date: "28 Dec 2018",
                    time: "",
                    votes: 0,
                    myVote: 0,
                    post: "The PropTypes should always be defined. This will help is track all props in the app and it will also be useful for any developer working on the same project."
                },
                {
                    name: "CHIRAG AGRAWAL",
                    date: "28 Dec 2018",
                    time: "",
                    votes: 0,
                    myVote: 0,
                    post: "Most of the app's logic should be moved inside the render method. We should try to minimize logic in component lifecycle methods and move that logic in the render method. The less state and props we use, the cleaner the code will be. We should always make the state as simple as possible."
                }
            ]
        }
    }
    render(){
        return(
            <div className="FeedDiv">
                <h1>DAILY FEED</h1>
                {this.state.data.map((person,id) => <Item key={id} data={person}/>)}
            </div>
        );
    }
}
class Item extends React.Component{
    render(){
        return(
            <div className="item">
                <div className="item-row">
                    <a className="UName">{this.props.data.name}</a>
                    <a className="UDT">{this.props.data.date}</a>
                    <a>Votes : </a>
                    <a>{this.props.data.votes}</a>
                </div>
                <hr></hr>
                <div className="item-row">
                    <p>{this.props.data.post}</p>
                </div>
                <hr></hr>
                <div className="item-row">
                    <button className="button">Up Vote</button>
                    {/* <button className="button">Down Vote</button> */}
                </div>
            </div>
        );
    }
}
export default Home;