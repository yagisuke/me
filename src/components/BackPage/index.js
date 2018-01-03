import React, { Component } from 'react'

export default class ReadNext extends Component {
  render() {
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
