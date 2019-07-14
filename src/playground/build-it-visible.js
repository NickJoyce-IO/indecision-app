class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !this.state.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>

                {
                    // and operator syntax to show only when visibility is set to true
                }
                {this.state.visibility &&

                    <p>I am now showing stuff</p>

                }

            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

