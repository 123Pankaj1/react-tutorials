//1. Functional Components:

function Democomponent() {
    return <h1>Welcome Message!</h1>;
};

// 2.Class Components

class Democomponent extends React.Component {
    render() {
        return <h1>Welcome Message!</h1>;
    }
}

// Rendering Components

const elementName = <ComponentName />;

// full component rendering

import React from 'react'; //import react dependancy
import ReactDOM from 'react-dom';

// This is a functional component 
function Welcome() {
    return <h1>Hello World!</h1>
}

//render A component

ReactDOM.render(
    <Welcome />,
    document.getElementById("root")
);

// React Component lifecycle

import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: "World!" };
    }

    componentWillMount() {
        console.log("componentWillMount()");
    }

    componentDidMount() {
        console.log("componentDidMount()");
    }

    changeState() {
        this.setState({ hello: "Geek!" });
    }

    render() {
        return (
            <div> 
			<h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1> 
			<h2> 
			<a onClick={this.changeState.bind(this)}>Press Here!</a> 
			</h2> 
			</div>);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate()");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
}

ReactDOM.render(<Test />, document.getElementById('root'));


// Use of React js Props

import React from 'react';
import ReactDOM from 'react-dom';

// sample component to illustrate props 
class DemoComponent extends React.Component {
    render() {
        return (

            <div> 
					{/*accessing information from props */} 
					<h2>Hello {this.props.user}</h2> 
					<h3>Welcome to GeeksforGeeks</h3> 
				</div>
        );
    }
}

ReactDOM.render(
    // passing props 
    <DemoComponent user = "Harsh Agarwal" />,
    document.getElementById("root")
);

//pass props to a function-based component

import React from 'react';
import ReactDOM from 'react-dom';

// functional component to illustrate props 
function DemoComponent(props) {
    return (
        <div> 
			{/*accessing information from props */} 
			<h2>Hello {props.user}</h2> 
			<h3>Welcome to GeeksforGeeks</h3> 
		</div>
    );
}

ReactDOM.render(
    // passing props 
    <DemoComponent user = "Harsh Agarwal" />,
    document.getElementById("root")
);

// Define default props

import React from 'react';
import ReactDOM from 'react-dom';

// Component 
class ExampleClass extends React.Component {
    render() {
        return (
            <div> 
                    {/* using default prop - title */} 
                    <h1>This is {this.props.title}'s Website!</h1> 
                </div>
        );
    }
}

// Creating default props for  
// ExampleClass Component 
ExampleClass.defaultProps = {
    title: "GeeksforGeeks"
}

ReactDOM.render(
    <ExampleClass />,
    document.getElementById("root")
);


// use of proptypes and validation of props in react js

import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

// Component 
class ComponentExample extends React.Component {
    render() {
        return (
            <div> 
					{/* printing all props */} 
					<h1> 
						{this.props.arrayProp} 
						<br /> 

						{this.props.stringProp} 
						<br /> 

						{this.props.numberProp} 
						<br /> 

						{this.props.boolProp} 
						<br /> 
					</h1> 
				</div>
        );
    }
}

// validating prop types 
ComponentExample.propTypes = {
    arrayProp: PropTypes.array,
    stringProp: PropTypes.string,
    numberProp: PropTypes.number,
    boolProp: PropTypes.bool,
}

// creating default props 
ComponentExample.defaultProps = {

    arrayProp: ['Ram', 'Shyam', 'Raghav'],
    stringProp: "GeeksforGeeks",
    numberProp: "10",
    boolProp: true,
}

ReactDOM.render(
    <ComponentExample />,
    document.getElementById("root")
);


// use of refs in react js

// callback used inside ref 
class App extends React.Component {
    constructor() {
        super();
        this.state = { sayings: "" };
    }
    update(e) {
        this.setState({ sayings: this.a.value });
    }
    render() {
        return (
            <div> 
	Mukul Says <input type="text"
	ref={(call_back) => {this.a = call_back}} onChange = 
	{this.update.bind(this)}/> 
<br/> 
<em>{this.state.sayings}</em> 
</div>
        );
    }
}
ReactDOM.render( < App / > , document.getElementById('root'));


//Rendering lists inside Components


import React from 'react';
import ReactDOM from 'react-dom';

// Component that will return an 
// unordered list 
function Navmenu(props) {
    const list = props.menuitems;

    const updatedList = list.map((listItems) => {
        return <li>{listItems}</li>;
    });

    return (
        <ul>{updatedList}</ul>
    );
}

const menuItems = [1, 2, 3, 4, 5];

ReactDOM.render(
    <Navmenu menuitems = {menuItems} />,
    document.getElementById('root')
);


// HTTP requests calling  in react js

//simple get request

fetch("https://api.example.com/items")
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                items: result.items
            });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    )

//simple post request
fetch('https://mywebsite.com/endpoint/', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
    }),
});


//http calling using axios third party library

//get method

axios.get('/user', {
        params: {
            ID: 12345
        }
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })
    .then(function() {
        // always executed
    });

// post method calling

axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });

//Performing multiple concurrent requests

function getUserAccount() {
    return axios.get('/user/12345');
}

function getUserPermissions() {
    return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function(acct, perms) {
        // Both requests are now complete
    }));