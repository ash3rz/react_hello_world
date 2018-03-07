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
                {languages.map((lang) => {
                    console.log("I'm in the map function, new context!", this);
                    return (
                        <li
                            style={lang === this.state.selectedLanguage ? { color: '#d0021b' } : null}
                            onClick={this.updateLanguage.bind(null, lang)}
                            key={lang}>
                            {lang}
                        </li>
                    )
                })}
            </ul>
        )
    }
    // The arrow function ALWAYS makes it so that the outer context
    // is supplied to the inner context
}

module.exports = Popular;