import React, { Component } from 'react'
import Link from 'gatsby-link'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'
import Footer from '../components/Footer'
import emergence from 'emergence.js'

import './gatsrap.scss'
import 'animate.css/animate.css'
import 'prismjs/themes/prism-okaidia.css'
import 'devicon/devicon.min.css'

export default class Template extends Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children } = this.props

    return (
      <div>
        <SiteNavi title={siteMetadata.title} {...this.props} />
        {children()}
        <Footer author={siteMetadata.author} />
      </div>
    )
  }
}
