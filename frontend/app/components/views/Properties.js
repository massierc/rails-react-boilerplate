import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import actions from '../../store/actions';

const { propertiesActions } = actions;

function Properties({ fetchProperties, properties }) {
  useEffect(() => fetchProperties(), []);

  return (<div>Properties (react)</div>);
}

const mapStateToProps = state => ({
  properties: state.getIn(['propertiesReducer', 'properties']),
});

export default connect(mapStateToProps, propertiesActions)(Properties);
