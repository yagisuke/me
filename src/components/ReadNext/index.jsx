import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

export default class ReadNext extends Component {
  render() {
    const data = this.props.data
    const title = get(data, 'meta.title')
    const author = get(data, 'meta.author')

    return (
      <div>
        <hr className="border-primary" />
        <p>
          {title}
          <Link to="/">
            <br />
            <strong>{author}</strong> on Profile
          </Link>
        </p>
      </div>
    )
  }
}
