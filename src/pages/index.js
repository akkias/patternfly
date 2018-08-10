import React from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import Select, {components} from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: '1chocolate', label: 'Chocolate1'},
  { value: '1strawberry', label: 'Strawberry1'},
  { value: '1vanilla', label: 'Vanilla1'},
  { value: '2chocolate', label: 'Chocolate2'},
  { value: '2strawberry', label: 'Strawberry2'},
  { value: '2vanilla', label: 'Vanilla2'},
  { value: '3chocolate', label: 'Chocolate3'},
  { value: '3strawberry', label: 'Strawberry3'},
  { value: '3vanilla', label: 'Vanilla3'},
  { value: '4chocolate', label: 'Chocolate4'},
  { value: '4strawberry', label: 'Strawberry4'},
  { value: '4vanilla', label: 'Vanilla4' }
]
const Input = (props) => {
  return (
    <div className="react-select__value-container-input">
        <components.Input {...props}/>
    </div>
  );
};

const IndexPage = () => (
  <div className="container m-t-8">
    <div className="row">
      <div className="col-md-6">
        <button className="btn btn-primary m-r-2">Label</button>
        <button className="btn btn-primary m-r-2">Label</button>
        <button className="btn btn-primary m-r-2">Label</button>
        <button className="btn btn-secondary m-r-2">Label</button>
        <button className="btn btn-primary btn-rounded m-r-2">Label</button>
        <button className="btn btn-secondary btn-rounded m-r-2">Label</button>
        <button className="btn btn-tertiary btn-rounded m-r-2">Label</button>
        <button className="btn btn-tertiary m-r-2">Label</button>
        <button className="btn btn-has-left-icon btn-primary m-r-2"><FontAwesomeIcon icon="bell" />Label</button>
        <button className="btn btn-has-right-icon btn-primary m-r-2">Label<FontAwesomeIcon icon="bell" /></button>
        <button className="btn btn-tertiary btn-icon m-r-2"><FontAwesomeIcon icon="tasks" /></button>
        <button className="btn btn-primary btn-icon btn-icon-circle m-r-2"><FontAwesomeIcon icon="tasks" /></button>
      </div>
			<div className="col-md-6">
				<div className="row row-cards-pf">
					<div className="col-md-6">
						<div className="card-pf card-pf-tertiary">
							<div className="card-pf-heading">
								<h2 className="card-pf-title">Top Utilized Clusters</h2>
							</div>
							<div className="card-pf-body">
								<div className="form-horizontal">
									<div className="form-group form-group-sm" id="name-field">
										<label className="col-sm-2 control-label">Name</label>
										<div className="col-sm-10 form-control-pf-editable">
											<span className="spinner spinner-sm"></span>
											<button type="button" className="form-control-pf-value">
												<span className="sr-only">Edit Name: </span>
												<span>Mike</span>
												<i className="glyphicon glyphicon-pencil" aria-hidden="true"></i>
											</button>
											<div className="form-control-pf-textbox">
												<input type="text" value="Mike" className="form-control form-control-pf-editor" autocomplete="off" aria-label="name" />>
												<button type="button" className="form-control-pf-empty" aria-label="Clear Value">
													<span className="fa fa-times-circle fa-lg"></span>
												</button>
											</div>
											<button type="button" className="btn btn-primary form-control-pf-save" disabled="" aria-label="Save"><i className="glyphicon glyphicon-ok"></i></button>
											<button type="button" className="btn btn-default form-control-pf-cancel" aria-label="Cancel"><i className="glyphicon glyphicon-remove"></i></button>
										</div>
									</div>
									<div className="form-group form-group-sm" id="name-field">
										<label className="col-sm-2 control-label">Name</label>
										<div className="col-sm-10 form-control-pf-editable">
											<span className="spinner spinner-sm"></span>
											<button type="button" className="form-control-pf-value">
												<span className="sr-only">Edit Name: </span>
												<span>Mike</span>
												<i className="glyphicon glyphicon-pencil" aria-hidden="true"></i>
											</button>
											<div className="form-control-pf-textbox">
												<input type="text" value="Mike" className="form-control form-control-pf-editor" autocomplete="off" aria-label="name" />>
												<button type="button" className="form-control-pf-empty" aria-label="Clear Value">
													<span className="fa fa-times-circle fa-lg"></span>
												</button>
											</div>
											<button type="button" className="btn btn-primary form-control-pf-save" disabled="" aria-label="Save"><i className="glyphicon glyphicon-ok"></i></button>
											<button type="button" className="btn btn-default form-control-pf-cancel" aria-label="Cancel"><i className="glyphicon glyphicon-remove"></i></button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
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
								<li className="list-group-item">
									<a href="#0">
										<span className="list-group-item-value">Dashboard</span>
									</a>
								</li>
								<li className="list-group-item">
									<ul className="recent-tasks">
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
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
    </div>
    <div className="row m-y-4">
      <div className="col-md-12">
        <button className="btn btn-success m-r-2">Label</button>
        <button className="btn btn-success m-r-2">Label</button>
        <button className="btn btn-success m-r-2">Label</button>
        <button className="btn btn-success btn-success-secondary m-r-2">Label</button>
        <button className="btn btn-success btn-rounded m-r-2">Label</button>
        <button className="btn btn-success btn-success-secondary btn-rounded m-r-2">Label</button>
      </div>
    </div>
    <div className="row m-y-4">
      <div className="col-md-12">
        <button className="btn btn-danger m-r-2">Label</button>
        <button className="btn btn-danger m-r-2">Label</button>
        <button className="btn btn-danger m-r-2">Label</button>
        <button className="btn btn-danger btn-danger-secondary m-r-2">Label</button>
        <button className="btn btn-danger btn-rounded m-r-2">Label</button>
        <button className="btn btn-danger btn-danger-secondary btn-rounded m-r-2">Label</button>
      </div>
    </div>
    <div className="row m-y-4">
      <div className="col-md-12">
        <button className="btn btn-sm btn-primary m-r-2">Label</button>
        <button className="btn btn-sm btn-success m-r-2">Label</button>
        <button className="btn btn-sm btn-danger m-r-2">Label</button>
        <button className="btn btn-sm btn-danger btn-danger-secondary m-r-2">Label</button>
        <button className="btn btn-sm btn-tertiary m-r-2">Label</button>
        <button className="btn btn-sm btn-secondary btn-rounded m-r-2">Label</button>
        <button className="btn btn-sm btn-success-secondary btn-rounded m-r-2">Label</button>
        <button className="btn btn-sm btn-tertiary btn-rounded m-r-2">Label</button>
        <button className="btn btn-sm btn-has-left-icon btn-tertiary m-r-2"><FontAwesomeIcon icon="plus-circle" />Label</button>
      </div>
    </div>
    <div className="row">
    <div className="col-md-2">
        <div className="btn-group">
          <button type="button" className="btn btn-default">Left</button>
          <button type="button" className="btn btn-default">Middle</button>
          <button type="button" className="btn btn-default">Right</button>
        </div>
      </div>
      <div className="col-md-2">
        <div className="btn-group btn-group-sm">
          <button type="button" className="btn btn-secondary active">Left</button>
          <button type="button" className="btn btn-secondary">Middle</button>
          <button type="button" className="btn btn-secondary">Right</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="dropdown open" role="group" aria-label="...">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li><a href="#">Dropdown link</a></li>
              <li><a href="#">Dropdown link</a></li>
            </ul>
          </div>
      </div>
    </div>
    <hr className="m-y-8" />
    <div className="row">
      <div className="col-md-6">
        <form className="form-horizontal m-b-0">
          <div className="form-group">
            <label className="col-sm-2 control-label" for="textInput-markup">Default</label>
            <div className="col-sm-10">
              <input placeholder="label" type="text" id="textInput-markup" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label" for="textInputDisabled-markup">Disabled</label>
            <div className="col-sm-10">
              <input placeholder="label" type="text" id="textInputDisabled-markup" className="form-control" disabled />
            </div>
          </div>
          <div className="form-group has-error">
            <label className="col-sm-2 control-label" for="inputError-markup">With error</label>
            <div className="col-sm-10">
              <input placeholder="label" type="text" id="inputError-markup" className="form-control" />
              <span className="help-block">Please correct the error</span>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label" for="inputError-markup">Textarea</label>
            <div className="col-sm-10">
              <textarea className="form-control" rows="3"></textarea>
            </div>
          </div>
          <div className="form-group m-b-0">
            <label className="col-sm-2 control-label" for="inputError-markup">Textarea</label>
            <div className="col-sm-10">
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
    <hr className="m-y-8" />
    <div className="row">
      <div className="col-md-6">
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
    <hr className="m-y-8" />
    <div className="row row-cards-pf">
    <div className="col-md-6">
        <div className="card-pf p-a-4">
          <div className="card-pf-body">
            <span className="badge">20</span>
            <span className="tag">20</span>
            <span className="tag tag-has-close-icon tag-primary">20<FontAwesomeIcon icon="times-circle" className="m-l-1" /> </span>
            <span className="tag tag-primary-light">20</span>
            <span className="tag tag-success">20</span>
            <span className="tag tag-success-light">20</span>
            <span className="tag tag-danger">20</span>
            <span className="tag tag-warning">20</span>
            <span className="tag tag-warning-light">20</span>
          </div>
        </div>
        <div className="card-pf p-a-4">
          <div className="card-pf-heading">
            <h2 className="card-pf-title">Top Utilized Clusters</h2>
          </div>
          <div className="card-pf-body">
          <div className="row">
            <div className="col-md-6">
              <Select className="m-b-4 react-select-container" classNamePrefix="react-select" isMulti={true} options={options} components={{ Input }} />
            </div>
            <div className="col-md-6">
              <Select className="m-b-4 react-select-container" classNamePrefix="react-select" isMulti={false} options={options} components={{ Input }} />
            </div>
          </div>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-pf-footer text-center"><a href="#">footer action</a></div>
        </div>
      </div>
    </div>
    <hr className="m-y-8" />
    <div className="row">
      <div className="col-md-6">
        <div className="subheader flex">
          <button className="btn btn-secondary btn-sm btn-sm-icon btn-icon-circle m-r-1"><FontAwesomeIcon icon="sync" /></button>
          <h2>Case 01828735</h2>
          <div className="subheader-actions">
            <div className="btn-group">
              <button type="button" className="btn btn-default">Left</button>
              <button type="button" className="btn btn-default">Middle</button>
              <button type="button" className="btn btn-default">Right</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="m-y-8" />
    <div className="row">
      <div className="col-md-3">
        <div className="nav-pf-vertical">
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
					<li className="list-group-item">
						<a href="#0">
							<span className="list-group-item-value">Dashboard</span>
						</a>
					</li>
  			</ul>
        </div>
      </div>
      <div className="col-md-3">
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
						<li className="list-group-item">
							<a href="#0">
								<span className="list-group-item-value">Dashboard</span>
							</a>
						</li>
					</ul>
        </div>
      </div>
    </div>
    <hr className="m-y-8" />
		<div className="row">
      <div className="col-md-6">asd</div>
		</div>
  </div>
)

export default IndexPage
