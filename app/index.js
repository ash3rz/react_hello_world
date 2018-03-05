import Badge from "./githubBadge"

var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
    render: function () {
        return (
            <div>Hello World!</div>
        )
    }
});

ReactDOM.render(
    <Hello />,
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