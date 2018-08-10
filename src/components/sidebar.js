import React from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';

const Sidebar = () => (
  <div className="nav-pf-vertical nav-pf-vertical-light">
    <ul className="list-group">
        <li className="list-group-item active">
            <a href="#0">
                <span className="list-group-item-value">Dashboard</span>
            </a>
        </li>
        <li className="list-group-item">
            <a href="#0">
                <span className="list-group-item-value">Dashboard</span>
            </a>
        </li>
        <li className="list-group-item active">
            <a href="#0">
                <span className="list-group-item-value">Dashboard</span>
            </a>
            <ul className="recent-tasks m-x-4 m-t-2">
                <li className="task active">
                    <button className="task-decline"><FontAwesomeIcon icon="times" /></button>
                    <a className="task-content">
                        <strong>API Test Summary ...</strong>
                        <p>
                            <span>Case 01828735</span>
                            <FontAwesomeIcon icon="exclamation-triangle" className="m-l-2 m-r-1" />
                            <span>-5000</span>
                        </p>
                        <span>Owned Case</span>
                    </a>
                </li>
                <li className="task">
                    <button className="task-decline"><FontAwesomeIcon icon="times" /></button>
                    <a className="task-content">
                        <strong>API Test Summary ...</strong>
                        <p>
                            <span>Case 01828735</span>
                            <FontAwesomeIcon icon="exclamation-triangle" className="m-l-2 m-r-1" />
                            <span>-5000</span>
                        </p>
                        <span>Owned Case</span>
                    </a>
                </li>
                <li className="task">
                    <button className="task-decline"><FontAwesomeIcon icon="times" /></button>
                    <a className="task-content">
                        <strong>API Test Summary ...</strong>
                        <p>
                            <span>Case 01828735</span>
                            <FontAwesomeIcon icon="exclamation-triangle" className="m-l-2 m-r-1" />
                            <span>-5000</span>
                        </p>
                        <span>Owned Case</span>
                    </a>
                </li>
                <li className="task">
                    <button className="task-decline"><FontAwesomeIcon icon="times" /></button>
                    <a className="task-content">
                        <strong>API Test Summary ...</strong>
                        <p>
                            <span>Case 01828735</span>
                            <FontAwesomeIcon icon="exclamation-triangle" className="m-l-2 m-r-1" />
                            <span>-5000</span>
                        </p>
                        <span>Owned Case</span>
                    </a>
                </li>
                <li className="task">
                    <button className="task-decline"><FontAwesomeIcon icon="times" /></button>
                    <a className="task-content">
                        <strong>API Test Summary ...</strong>
                        <p>
                            <span>Case 01828735</span>
                            <FontAwesomeIcon icon="exclamation-triangle" className="m-l-2 m-r-1" />
                            <span>-5000</span>
                        </p>
                        <span>Owned Case</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
	</div>
)

export default Sidebar
