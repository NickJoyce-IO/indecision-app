
const app = document.getElementById('app')

let visibility = false

const toggleVisibility = () => {
  visibility = !visibility
  renderTemplate()
}

const renderTemplate = () => {


const template = (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>

    {visibility && 
        
        <p>I am now showing stuff</p>
        
    }
    
   </div>
)

ReactDOM.render(template, app)
}

renderTemplate()