import React, { Component } from 'react';
import { connect } from 'react-redux';


class Flashes extends Component {
  constructor() {
    super();
  }

  render() {
    // TODO: ultimate html structure will look like
    // <div>
    //  <div class="alert alert-danger">${message.toString()}. Click to dismiss.</div>
    //  <div class="alert alert-info">${message.toString()}. Click to dismiss.</div>
    //  ...
    // </div>



    let cells = this.props.messages.map( (x, counter) => {
      if(x.messageType === 'error'){
         return <div className="alert alert-danger" id={counter}
          onClick={() => this.props.remove(counter)}>{x.message.toString()}. Click to dismiss.</div>
      }else{
        return <div className="alert alert-info" id={counter}
        onClick={() => this.props.remove(counter)}>{x.message.toString()}. Click to dismiss.</div>
      }
    })

    return(
      <div>
          {cells}
      </div>
    )
}
}

// TODO:  needs  to somehow listen to the state of messageReducer via its props.
// you could almost say you're mapping the state to props...

const mapStateToProps = (state) => {
  console.log(state.messageReducer);
  return state.messageReducer;
}

const mapDispatchToProps = dispatch => {
  return {
    remove: (index) => dispatch({
      type: 'DISMISS',
      index: index
    })
  }
}


// TODO: map a prop `dispatch` that will dispatch an  action
// { type: 'DISMISS',  idx: someIndex }
// ultimate call to it should look like this.props.dismiss(idx)

export default connect(mapStateToProps, mapDispatchToProps)(Flashes);
