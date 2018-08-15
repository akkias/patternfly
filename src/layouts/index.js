import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faPaintBrush, faTasks, faCheckCircle, faClipboardCheck, faBell, faTimes, faTimesCircle, faCaretDown, faChevronDown, faSync, faPencilAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import '../../node_modules/patternfly/dist/css/patternfly.css'
import '../../node_modules/patternfly/dist/css/patternfly-additions.css'
import '../scss/style.scss'
import favicon from '../../static/assets/images/fav.png'

library.add(faTasks,faBell,faTimesCircle,faChevronDown, faSync, faPencilAlt,faTimes, faExclamationTriangle, faCheckCircle)
const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Sidebar />
    <div className="ascension-commons-content">
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
