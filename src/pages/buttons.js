import React from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';

const Buttons = () => (
<div className="subheader flex">
  <button className="btn btn-secondary btn-sm btn-sm-icon btn-icon-circle m-r-1"><FontAwesomeIcon icon="sync" /></button>
  <h1>Buttons</h1>
  <div className="subheader-actions">
    <div className="btn-group">
      <button type="button" className="btn btn-secondary">Left</button>
      <button type="button" className="btn btn-secondary">Middle</button>
      <button type="button" className="btn btn-secondary">Right</button>
    </div>
  </div>
</div>
)

export default Buttons
