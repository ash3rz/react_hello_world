var React = require('react');

class Popular extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: 'All'
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState(function() {
            return {
                selectedLanguage: lang
            }
        });
    }

    render() {
        var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        console.log('Render function!', this);
        return (
            <ul className='languages'>
                {languages.map(function (lang) {
                    console.log("I'm in the map function, new context!", this);
                    return (
                        <li
                            style={lang === this.state.selectedLanguage ? { color: '#d0021b' } : null}
                            onClick={this.updateLanguage.bind(null, lang)}
                            key={lang}>
                            {lang}
                        </li>
                    )
                }, this)}
            </ul>
        )
    }
    // NOTE: We're passing in 'this' as a secondary parameter to the map function.
    // This moves the outer context into the inner function
}

module.exports = Popular;