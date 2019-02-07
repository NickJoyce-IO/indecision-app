console.log('app.js is running')

// Define the app object
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
}

// Define the main template
const template = (
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <p>More info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
)

// Get the root element
const appRoot = document.getElementById('app')

// render the JSX
ReactDOM.render(template, appRoot)