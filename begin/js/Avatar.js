var Avatar = React.createClass({
    getDefaultProps: function() {
        return {
            path: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F147%2F147141.png&f=1'
        };
    },

    render: function() {
        return (
            <a href={this.props.path} >
                <div>
                    <img src={this.props.path} />
                </div>
            </a>
        )
    }
});

React.render(<Avatar path="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.neemgold.com%2Fimages%2Fclients%2Ft-1.png&f=1" />, document.body)