import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List } from 'immutable';
import { propertiesActions } from '../../store/actions';

function Properties({ fetchProperties, properties }) {
  useEffect(() => fetchProperties(), []);

  return (
    <div>
      <h1>Properties (react)</h1>
      <ul>
        {properties.map(prop => (
          <li key={`prop_${prop.get('id')}`}>
            <Link to={`/properties/${prop.get('id')}`}>
              {prop.get('name')}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Properties.propTypes = {
  fetchProperties: PropTypes.func.isRequired,
  properties: PropTypes.instanceOf(List).isRequired,
};

const mapStateToProps = state => ({
  properties: state.getIn(['propertiesReducer', 'properties']),
});

export default connect(mapStateToProps, propertiesActions)(Properties);
