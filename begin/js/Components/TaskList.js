var TaskList = React.createClass({
    
    render: function () {

        var displayTasks = function(task) {
            return <li> {task} </li>
        };
    
        return (
            <ul>
                {this.props.items.map(displayTasks)}
            </ul>
        );
    }

});