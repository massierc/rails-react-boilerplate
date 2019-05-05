import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { propertiesActions } from '../../store/actions';
import { findIn } from '../../utils';

function Property({ getProperty, property, id }) {
  useEffect(() => getProperty(id), []);

  return (
    <div>
      <h1>{property.get('name')}</h1>
      <p>{`Owner: ${property.getIn(['user', 'first_name'])} ${property.getIn(['user', 'last_name'])}`}</p>
      <p>{property.get('description')}</p>
      <p>{property.get('fullAddress')}</p>
    </div>
  );
}

Property.propTypes = {
  getProperty: PropTypes.func.isRequired,
  property: PropTypes.instanceOf(Map),
  id: PropTypes.string.isRequired,
};

Property.defaultProps = {
  property: Map(),
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const property = findIn(state.getIn(['propertiesReducer', 'properties']), id);

  return ({ id, property });
};

export default connect(mapStateToProps, propertiesActions)(Property);
