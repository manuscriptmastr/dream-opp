import React from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bookmarkOpp, unbookmarkOpp } from '../../actions/opp';
import Ionicons from 'react-native-vector-icons/Ionicons';

let toggleBookmark = (opp) => opp.bookmarked ? unbookmarkOpp(opp) : bookmarkOpp(opp);
let getBookmarkColor = ({ bookmarked }) => bookmarked ? 'black' : 'lightgray';

let OppBookmark = ({ opp, toggleBookmark }) =>
  <Ionicons
    name="ios-bookmark"
    size={25} color={getBookmarkColor(opp)}
    style={styles.oppBookmark}
    onPress={() => toggleBookmark(opp)}
  />

let mapDispatchToProps = {
  toggleBookmark
}

let enhance = compose(
  connect(null, mapDispatchToProps)
);

export default enhance(OppBookmark);