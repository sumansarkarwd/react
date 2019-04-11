var GistAddForm = React.createClass({

    getInitialState: function() {
        return {
            username: ''
        }
    },

    onChange: function(e) {
        this.setState({
            username: e.target.value
        })
    },

    addGist: function(e) {
        e.preventDefault();

        this.props.onAdd(this.state.username);

        this.setState({
            username: ''
        })
    },

    render: function() {
        return (
            <div>
                <form onSubmit={this.addGist}>
                    <input className="input" value={this.state.username} onChange={this.onChange} />
                    <button className="button is-info is-outlined">Add Gist</button>
                </form>
            </div>
        )
    }
});