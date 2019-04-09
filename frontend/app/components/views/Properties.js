import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { propertiesActions } from '../../store/actions';

function Properties({ fetchProperties, properties }) {
  useEffect(() => fetchProperties(), []);

  return (
    <div>
      <p>Properties (react)</p>
      <ul>
        {properties.map(prop => <li key={prop.get('id')}>{prop.get('name')}</li>)}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  properties: state.getIn(['propertiesReducer', 'properties']),
});

export default connect(mapStateToProps, propertiesActions)(Properties);
