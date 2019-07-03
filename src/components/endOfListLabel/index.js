import React from 'react';
import './styles.scss';

export default ({ label }) => (
  <div className="end-of-list-label">
    { label || 'End Of List'}
  </div>
);
