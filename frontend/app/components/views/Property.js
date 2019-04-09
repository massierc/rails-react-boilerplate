import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { propertiesActions } from '../../store/actions';

function Property({
  name, description,
  // fullAddress, user,
}) {
  useEffect(() => {

  }, []);
  return (
    <div>
      <h1>{name}</h1>
      {/* <p>{`Owner: ${user.first_name} ${user.last_name}`}</p> */}
      <p>{description}</p>
      {/* <p>{fullAddress}</p> */}
    </div>
  );
}

Property.propTypes = {
  // name: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // fullAddress: PropTypes.string.isRequired,
  // user: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const properties = state.getIn(['propertiesReducer', 'properties']);
  const key = properties.findKey(prop => prop.get('id') === parseInt(id, 10));
  const prop = properties.get(key);

  return ({
    name: prop.get('name'),
    description: prop.get('description'),
    // fullAddress: prop.get('full_address'),
    // user: prop.get('user'),
  });
};

export default connect(mapStateToProps, propertiesActions)(Property);
