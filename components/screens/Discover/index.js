import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ScreenView from '../../ScreenView/index';
import OppList from '../../OppList/index';

let DiscoverScreen = ({ opps }) =>
  <ScreenView>
    <OppList opps={opps} />  
  </ScreenView>

let mapStateToProps = ({ opps }) => ({ opps });

let enhance = compose(
  connect(mapStateToProps, null)
);

export default enhance(DiscoverScreen);