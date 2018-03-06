var React = require('react');
import PropTypes from 'prop-types';

class Avatar extends React.Component {
    render() {
        return (
            <img src={this.props.img} />
        )
    }
}

class NameLabel extends React.Component {
    render() {
        return (
            <h3>Name: {this.props.name}</h3>
        )
    }
}

class Username extends React.Component {
    render() {
        return (
            <h5>Username: {this.props.username}</h5>
        )
    }
}

class Badge extends React.Component {
    render() {
        return (
            <div>
                <Avatar img={this.props.user.img}/>
                <NameLabel name={this.props.user.name}/>
                <Username username={this.props.user.username}/>
            </div>
        )
    }
}

Badge.propTypes = {
    user: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })
};

export default Badge;