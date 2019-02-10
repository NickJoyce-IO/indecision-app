'use strict';

console.log('app.js is running');

// Define the app object
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []

    // Define the main template 
    // if the subtitle exists render, if not dont
    // if options exist render one thing, otherwise other
};var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    // gets the element text
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderDOM();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    renderDOM();
};

var renderDOM = function renderDOM() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderDOM();
