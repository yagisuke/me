import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class ReadNext extends Component {
  render() {
    return (
      <div>
        <hr className="border-primary" />
        <Link to="/works/" className="mt-3 btn btn-outline-primary btn-block">
          一覧へ
        </Link>
      </div>
    )
  }
}
