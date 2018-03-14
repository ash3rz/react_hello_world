var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Samples = require('./Samples');
var Results = require('./Results');

// the div uses className because class is already a keyword
class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/battle' component={Battle}/>
                        <Route path='/battle/results' component={Results}/>
                        <Route path='/popular' component={Popular}/>
                        <Route path='/samples' component={() => (
                            <Samples user={{
                                name: 'Ashley',
                                img: 'https://avatars3.githubusercontent.com/u/8909156',
                                username: 'ash3rz'
                            }} list={
                                [
                                    {name: 'Tom Riddle', friend: false},
                                    {name: 'Dumbledore', friend: true},
                                    {name: 'Harry', friend: true},
                                    {name: 'Hermione', friend: true},
                                    {name: 'Ron', friend: true},
                                    {name: 'Voldemort', friend: false}
                                ]
                            }/>)}/>
                        <Route render={function() {
                            return <p>Not Found</p>
                        }}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;