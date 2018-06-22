import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Text } from 'react-native';
import ScreenView from '../../ScreenView';
import OppList from '../../OppList';

let HomeScreen = ({ opps }) =>
  <ScreenView>
    <OppList opps={opps} >
      <Text>Skills</Text>
      <Text>Plan</Text>
    </OppList>
  </ScreenView>

let mapStateToProps = ({ opps }) => ({ opps: opps.filter(({ bookmarked }) => bookmarked) });

let enhance = compose(
  connect(mapStateToProps, null)
);

export default enhance(HomeScreen);