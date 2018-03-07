import Badge from "./githubBadge"
import Friends from "./friends"
require('./index.css');

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

ReactDOM.render(
    <Badge user={{
        name: 'Ashley',
        img: 'https://avatars3.githubusercontent.com/u/8909156',
        username: 'ash3rz'
    }}/>,
    document.getElementById('badge')
);

ReactDOM.render(
    <Friends list={[
        { name: 'Tom Riddle', friend: false },
        { name: 'Dumbledore', friend: true },
        { name: 'Harry', friend: true },
        { name: 'Hermione', friend: true },
        { name: 'Ron', friend: true },
        { name: 'Voldemort', friend: false } ]}
    />,
    document.getElementById('friends')
);