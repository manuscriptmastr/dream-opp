import React from 'react';
import ScreenView from '../../../ScreenView';
import ToolList from '../../../ToolList';
import { connect } from 'react-redux';
import { compose } from 'recompose';

let ToolsScreen = ({ tools }) =>
  <ScreenView>
    <ToolList tools={tools} />
  </ScreenView>

let mapStateToProps = ({ tools }) => ({ tools });

let enhance = compose(
  connect(mapStateToProps)
);

export default enhance(ToolsScreen);