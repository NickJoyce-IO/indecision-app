console.log('app.js is running')


// app object sets up the app
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

// get the div that will contain the template
const appRoot = document.getElementById('app')

// adds options to the app.options array, prevents default behaviour
// only do this if there is a value in the box
const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    
    if(option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderTemplate()
    } 
 
}

// Removes options, by clearing the array
const onRemoveAll = () => {
    app.options = []
    renderTemplate()
}

// creates a random number between 0 and the length of the array
// then returns the option at the index of that random number
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}


const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            
            <ol>
               {app.options.map((option)=> <li key={option}>{option}</li>)}
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add option</button>

            </form>

        </div>
    )

    ReactDOM.render(template, appRoot)
}


renderTemplate()


