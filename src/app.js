console.log('app.js is running')

const template = (
<div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <p>More info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
)

const nickTemplate = (
    <div>
        <h1>Ya</h1>
        <p>ya</p>
        <p>yaaaaaaaaa</p>
    </div>
)

// Get the root element
const appRoot = document.getElementById('app')

// render the JSX
ReactDOM.render(nickTemplate, appRoot)