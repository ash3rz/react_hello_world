var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

function PlayerPreview(props) {
    return (
        <div>
            <div className='column'>
                <img
                    className='avatar'
                    src={props.avatar}
                    alt={'Avatar for ' + props.username}
                />
                <h2 className='username'>@{props.username}</h2>
            </div>
            <button
                className='reset'
                onClick={props.onReset.bind(null, props.id)}>
                Reset
            </button>
        </div>
    )
}

PlayerPreview.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

class PlayerInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Every time the value in the input field changes, we call this method
    // This method updates the state
    // When the state gets updated, the value of the input field gets updated

    //This is called a controlled component - React is controlling the value of the input field
    // An uncontrolled component would be the opposite - pulling the value directly
    // from the DOM
    handleChange(event) {
        var value = event.target.value;

        this.setState(function () {
            return {
                username: value
            };
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(
            this.props.id,
            this.state.username
        )
    }

    // htmlFor is the equivalent of for.  for allows you to tie
    // a label to a specific input
    render() {
        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <label className='header' htmlFor='username'>
                    {this.props.label}
                </label>
                <input
                    id='username'
                    placeholder='github username'
                    type='text'
                    autoComplete='off'
                    value={this.state.username}
                    onChange={this.handleChange}>
                </input>
                <button
                    className='button'
                    type='submit'
                    disabled={!this.state.username}>
                    Submit
                </button>
            </form>
        )
    }
}

PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

class Battle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(id, username) {
        this.setState(function () {
            var newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
            return newState;
        })
    }

    handleReset(id) {
        this.setState(function () {
            var newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Image'] = null;

            return newState;
        })
    }

    render() {
        var playerOneName = this.state.playerOneName;
        var playerTwoName = this.state.playerTwoName;
        var playerOneImage = this.state.playerOneImage;
        var playerTwoImage = this.state.playerTwoImage;
        var match = this.props.match;  //should be "/battle"

        return (
            <div>
                <div className='row'>
                    {!playerOneName && <PlayerInput
                        id='playerOne'
                        label='Player One'
                        onSubmit={this.handleSubmit}/>}
                    {playerOneImage !== null && <PlayerPreview
                        username={playerOneName}
                        avatar={playerOneImage}
                        onReset={this.handleReset}
                        id='playerOne'/>}

                    {!playerTwoName && <PlayerInput
                        id='playerTwo'
                        label='Player Two'
                        onSubmit={this.handleSubmit}/>}
                    {playerTwoImage !== null && <PlayerPreview
                        username={playerTwoName}
                        avatar={playerTwoImage}
                        onReset={this.handleReset}
                        id='playerTwo'/>}
                </div>
                {playerOneImage && playerTwoImage &&
                <Link className='button'
                      to={{
                          pathname: match.url + '/results',
                          search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                      }}>
                    Battle
                </Link>
                }
            </div>
        )
    }
}

module.exports = Battle;