var React = require('react');
var Badge = require('./githubBadge');
var Friends = require('./friends');

class Samples extends React.Component {
    render() {
        return (
            <div>
                <Badge user={this.props.user}/>
                <Friends list={this.props.list}/>
            </div>
        )
    }
}

module.exports = Samples;