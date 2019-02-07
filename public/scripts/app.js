'use strict';

console.log('app.js is running');

// Define the app object
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'

    // Define the main template
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        'More info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

// Get the root element
var appRoot = document.getElementById('app');

// render the JSX
ReactDOM.render(template, appRoot);
