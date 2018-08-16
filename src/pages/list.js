import React from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import ListItem from './ListItem'

const List = () => (
	<div className="container">
		<div id="pf-list-simple-expansion" className="list-group list-view-pf list-view-pf-view">
			<ListItem />
			<ListItem additionalClass="list-view-pf-expand-active" />
			<ListItem />
		</div>
	</div>
)

export default List
