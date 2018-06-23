import React from 'react';
import ScreenView from '../../../ScreenView';
import TeamList from '../../../TeamList';
import { connect } from 'react-redux';
import { compose } from 'recompose';

let TeamsScreen = ({ teams }) =>
  <ScreenView>
    <TeamList teams={teams} />
  </ScreenView>

let mapStateToProps = ({ dream: { teams } }) => ({ teams });

let enhance = compose(
  connect(mapStateToProps)
);

export default enhance(TeamsScreen);