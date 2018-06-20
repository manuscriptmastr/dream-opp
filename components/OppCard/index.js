import React from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { View, Text, Image } from 'react-native';
import { bookmarkOpp, unbookmarkOpp } from '../../actions/opp';
import Ionicons from 'react-native-vector-icons/Ionicons';

let toggleBookmark = (opp) => opp.bookmarked ? unbookmarkOpp(opp) : bookmarkOpp(opp);
let getBookmarkColor = ({ bookmarked }) => bookmarked ? 'black' : 'lightgray';

let OppCard = ({ opp, toggleBookmark }) =>
  <View style={styles.opp} >
    <Ionicons
      name="ios-bookmark"
      size={25} color={getBookmarkColor(opp)}
      style={styles.oppBookmark}
      onPress={() => toggleBookmark(opp)}
    />
    <View style={styles.oppHeader}>
      <Image style={styles.oppAvatar} source={{ uri: opp.team.imgUrl }} />
      <Text style={styles.oppTitle}>{opp.team.name} wants you for their next {opp.role}.</Text>
    </View>
    <Text>{opp.description}</Text>
  </View>

let mapDispatchToProps = {
  toggleBookmark
}

let enhance = compose(
  connect(null, mapDispatchToProps)
);

export default enhance(OppCard);