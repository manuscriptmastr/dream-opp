import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ScreenView from '../../ScreenView';
import OppList from '../../OppList';

let HomeScreen = ({ opps }) =>
  <ScreenView>
    <OppList opps={opps} />  
  </ScreenView>

let mapStateToProps = ({ opps }) => ({ opps });

let enhance = compose(
  connect(mapStateToProps, null)
);

export default enhance(HomeScreen);