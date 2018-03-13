var React = require('react');
var PropTypes = require('prop-types');

class Friends extends React.Component {
    render() {
        let myFriends = this.props.list.filter(function(user) {
            return user.friend === true;
        });

        let myEnemies = this.props.list.filter(function(user) {
            return user.friend !== true;
        });

        return (
            <div>
                <h3>Friends</h3>
                <ul>
                    {myFriends.map(function(user) {
                        return <li key={user.name}> {user.name} </li>
                    })
                }
                </ul>

                <hr/>

                <h3>Non-Friends</h3>
                <ul>
                    {myEnemies.map(function(user){
                        return <li key={user.name}> {user.name} </li>
                    })}
                </ul>
            </div>
        )
    }
}

Friends.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        friend: PropTypes.bool
    }))
};

module.exports = Friends;