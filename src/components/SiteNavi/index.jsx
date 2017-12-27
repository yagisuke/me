import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class SiteNavi extends Component {
  render() {
    const { location, title } = this.props

    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
                >
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li
                className={
                  location.pathname === '/works/' ? 'nav-item active' : 'nav-item'
                }
                >
                <Link to="/works/" className="nav-link">Works</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}
