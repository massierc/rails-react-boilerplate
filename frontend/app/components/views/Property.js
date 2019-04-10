import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { propertiesActions } from '../../store/actions';

function Property({
  fetchProperty, property, id,
}) {
  useEffect(() => {
    fetchProperty(id);
  }, []);

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
  fetchProperty: PropTypes.func.isRequired,
  property: PropTypes.instanceOf(Map),
  id: PropTypes.string.isRequired,
};

Property.defaultProps = {
  property: Map(),
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const index = state
    .getIn(['propertiesReducer', 'properties'])
    .findIndex(el => el.get('id') === parseInt(id, 10));

  return ({
    id,
    property: state.getIn(['propertiesReducer', 'properties', index]),
  });
};

export default connect(mapStateToProps, propertiesActions)(Property);
