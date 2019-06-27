
const app = document.getElementById('app')

let visibility = false

// flip visibility to the opposite of what is currently is
const toggleVisibility = () => {
    visibility = !visibility
    renderTemplate()
}

const renderTemplate = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>

            {
                // and operator syntax to show only when visibility is set to true
            }
            {visibility &&

                <p>I am now showing stuff</p>

            }

        </div>
    )

    ReactDOM.render(template, app)
}

renderTemplate()