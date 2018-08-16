import React, {Component} from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';

class ListItem extends Component {
	render() {
		return (
			<div className={`list-group-item ${this.props.additionalClass}`}>
				<div className="list-group-item-header">
				<div className="list-view-pf-expand">
					<span className="fa fa-angle-right"></span>
				</div>
				<div className="list-view-pf-checkbox">
					<input type="checkbox" />
				</div>
				<div className="list-view-pf-actions">
					<button className="btn btn-primary btn-rounded">Action</button>
					<div className="dropdown pull-right dropdown-kebab-pf">
						<button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						<span className="fa fa-ellipsis-v"></span>
						</button>
						<ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight11">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another Action</a></li>
							<li><a href="#">Something Else Here</a></li>
							<li role="separator" className="divider"></li>
							<li><a href="#">Separated Link</a></li>
						</ul>
					</div>
				</div>
				<div className="list-view-pf-main-info">
					<div className="list-view-pf-left">
						<span className="fa fa-gamepad list-view-pf-icon-sm"></span>
					</div>
					<div className="list-view-pf-body">
						<div className="list-view-pf-description">
							<div className="list-group-item-heading">Event Three</div>
							<div className="list-group-item-text">
							The following snippet of text is <a href="#">rendered as link text</a>.
							</div>
						</div>
						<div className="list-view-pf-additional-info">
							<div className="list-view-pf-additional-info-item">
							<span className="pficon pficon-screen"></span>
							<strong>4</strong> Hosts
							</div>
							<div className="list-view-pf-additional-info-item">
							<span className="pficon pficon-cluster"></span>
							<strong>2</strong> Clusters
							</div>
							<div className="list-view-pf-additional-info-item">
							<span className="pficon pficon-container-node"></span>
							<strong>10</strong> Nodes
							</div>
							<div className="list-view-pf-additional-info-item">
							<span className="pficon pficon-image"></span>
							<strong>6</strong> Images
							</div>
						</div>
					</div>
				</div>
				</div>
				<div className={`list-group-item-container container-fluid ${this.props.additionalClass ? '' : 'hidden'} `}>
				<div className="close">
					<span className="pficon pficon-close"></span>
				</div>
				<div className="row">
					<div className="col-md-3">
						<div id="utilizationDonutChart31" className="example-donut-chart-utilization"></div>
						<div className="pct-donut-chart-pf example-donut-chart-utilization">
							<div className="pct-donut-chart-pf-chart">
							<div id="utilizationDonutChart32"></div>
							</div>
							<span className="pct-donut-chart-pf-label">
							60 MHz of 100 MHz used
							</span>
						</div>
						<div className="example-donut-chart-utilization">
							<span className="pct-donut-chart-pf pct-donut-chart-pf-left">
							<div className="pct-donut-chart-pf-chart">
								<div id="utilizationDonutChart33"></div>
							</div>
							<span className="pct-donut-chart-pf-label text-right">
							60 MHz of 100 MHz used
							</span>
							</span>
						</div>
						<div className="example-donut-chart-utilization">
							<span className="pct-donut-chart-pf pct-donut-chart-pf-right">
							<div className="pct-donut-chart-pf-chart">
								<div id="utilizationDonutChart34"></div>
							</div>
							<span className="pct-donut-chart-pf-label text-left">
							60 MHz of 100 MHz
							</span>
							</span>
						</div>
					</div>
					<div className="col-md-9">
						<dl className="dl-horizontal">
							<dt>Host Name</dt>
							<dd>Hostceph1</dd>
							<dt>Device Path</dt>
							<dd>/dev/disk/pci-0000.05:00-sas-0.2-part1</dd>
							<dt>Time</dt>
							<dd>January 15, 2016 10:45:11 AM</dd>
							<dt>Severity</dt>
							<dd>Warning</dd>
							<dt>Cluster</dt>
							<dd>Cluster 1</dd>
						</dl>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				</div>
			</div>
		)
	}
}
export default ListItem
