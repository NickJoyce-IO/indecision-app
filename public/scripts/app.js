'use strict';

console.log('app.js is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
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

var nickTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Ya'
    ),
    React.createElement(
        'p',
        null,
        'ya'
    ),
    React.createElement(
        'p',
        null,
        'yaaaaaaaaa'
    )
);

// Get the root element
var appRoot = document.getElementById('app');

// render the JSX
ReactDOM.render(nickTemplate, appRoot);
