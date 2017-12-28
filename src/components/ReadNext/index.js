import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import { Route, Switch, Redirect } from 'react-router'

export default class ReadNext extends Component {
  render() {
    const data = this.props.data
    const title = get(data, 'meta.title')
    const author = get(data, 'meta.author')

    return (
      <div>
        <hr className="border-primary" />
        <a
          href="javascript:history.back();"
          className="mt-3 btn btn-outline-primary btn-block"
        >
          戻る
        </a>
      </div>
    )
  }
}
