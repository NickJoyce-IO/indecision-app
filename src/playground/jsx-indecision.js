console.log('app.js is running')

// Define the app object
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

// Define the main template 
// if the subtitle exists render, if not dont
// if options exist render one thing, otherwise other
const onFormSubmit = (e) => {
    e.preventDefault()

    // gets the element text
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderDOM()
    }
}

// Function to remove all input options
const removeAll = () => {
    app.options = []
    renderDOM()
}

// Function that makes the decision
const onMakeDecision = () => {
    const randomNum = Math.floor((Math.random() * app.options.length))
    const option = app.options[randomNum]
    alert(option)
}

// Function that renders everything to the screen
const renderDOM = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>

            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')

renderDOM()


