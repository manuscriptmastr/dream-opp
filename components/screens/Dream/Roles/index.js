import React from 'react';
import ScreenView from '../../../ScreenView';
import RoleList from '../../../RoleList';
import { connect } from 'react-redux';
import { compose } from 'recompose';

let RolesScreen = ({ roles }) =>
  <ScreenView>
    <RoleList roles={roles} />
  </ScreenView>

let mapStateToProps = ({ roles }) => ({ roles });

let enhance = compose(
  connect(mapStateToProps)
);

export default enhance(RolesScreen);