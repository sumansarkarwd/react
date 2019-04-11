var GistBox = React.createClass({

    getInitialState: function() {
        return {
            gists: [{username: 'sumansarkarwd', url: 'http://www.google.com'}]
        }
    },

    addGist: function(username) {
        var url = `https://api.github.com/users/${username}/gists`;

        $.get(url, function(result) {
            // console.log(this);
            var username = result[0].owner.login;
            var url = result[0].html_url;

            var gists = this.state.gists.concat({username: username, url: url});
            this.setState({
                gists
            })
            // this.setState({
            //     gists: gists
            // })
        }.bind(this));
    },

    render: function() {
        
        var newGist = function(gist) {
            return <Gist username={gist.username} url={gist.url} />
        };

        return (
            <div className="content">
                <h1>GistBox</h1>

                <GistAddForm onAdd={this.addGist} />

                <ol>
                    {this.state.gists.map(newGist)}
                </ol>
            </div>
        )
    }

});

React.render(<GistBox />, document.querySelector('#app'));