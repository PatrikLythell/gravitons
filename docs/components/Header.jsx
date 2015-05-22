
var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <header className="py2">
        <h1 className="m0">{this.props.title}</h1>
        <p className="m0">{this.props.description}</p>
      </header>
    )
  }

});

module.exports = Header;

