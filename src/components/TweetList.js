import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

class TweetList extends Component {

  componentDidMount() {
    // TODO: load the tweets and set up an interval
    // that loads the tweets again every 2500 ms
    // Think about how you'd be able to load tweets
    // without doing additional imports...
    console.log('attempting to load tweets from tweet list')
    this.props.loadTweets()
  }

  componentWillUnmount() {
    // TODO: when the component is about to unmount
    // clear the interval (the one running every 2500 ms
    // ie stop  the refreshing)
  }

  render() {
    // TODO: render out your  tweets (use the Tweet component with
    // appropriate arguments `id` to represent  the tweetId and
    // a key for react
    // ultimate html should look like
    // <div class="col-md-12">
    //  ...bunch o tweets
    // </div>

    let cells = this.props.ids.map( (x, counter) => {
         return <Tweet id={x} key={counter}/>
    })

     return (<div className="col-md-12">
       {cells}
     </div>)

  }
}

const mapStateToProps = state => state.tweetList;


export default connect(
  mapStateToProps,
  null
)(TweetList);
