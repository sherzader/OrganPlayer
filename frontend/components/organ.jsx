var React = require('react'),
    Key = require('./Key'),
    TONES = require('../constants/Tones');

var Organ = React.createClass({
  render: function(){
    return(
      <div className="Organ">
        {Object.keys(TONES).map(function(key){
          return (<Key key={key} noteName={key}/>)
        })}
      </div>
    )
  }
});

module.exports = Organ;
