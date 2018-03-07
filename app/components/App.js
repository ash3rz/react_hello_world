var React = require('react');
var Popular = require('./Popular');

// the div uses className because class is already a keyword
class App extends React.Component {
    render () {
        return (
            <div className='container'>
                <Popular/>
            </div>
        )
    }
}

module.exports = App;