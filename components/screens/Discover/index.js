import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Text } from 'react-native';
import ScreenView from '../../ScreenView';
import OppList from '../../OppList';

let DiscoverScreen = ({ opps }) =>
  <ScreenView>
    <OppList opps={opps} > 
      <Text>Bookmark</Text>
      <Text>Hide</Text>
    </OppList>
  </ScreenView>

let mapStateToProps = ({ opps }) => ({ opps });

let enhance = compose(
  connect(mapStateToProps, null)
);

export default enhance(DiscoverScreen);