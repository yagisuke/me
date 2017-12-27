import React, { Component } from 'react'
import moment from 'moment'
import Link from 'gatsby-link'

export default class Footer extends Component {
  render() {
    const { location, title } = this.props

    return (
      <footer className='bd-footer text-muted'>
        <div className='container-fluid p-3 p-md-5'>
          <ul className='bd-footer-links'>
            <li><a href='https://github.com/yagisuke' target='_blank'>GitHub</a></li>
            <li><a href='https://twitter.com/yagi_suke' target='_blank'>Twitter</a></li>
            <li><a href='https://www.facebook.com/yusuke.yagishita.1' target='_blank'>Facebook</a></li>
            <li><a href='http://yagisuke.hatenadiary.com/' target='_blank'>Hatena</a></li>
            <li><a href='https://www.instagram.com/_yagisuke/' target='_blank'>Instagram</a></li>
          </ul>
          <p>
            <small>© { moment().format('YYYY') } Yagisuke</small>
          </p>
        </div>
      </footer>
    )
  }
}
