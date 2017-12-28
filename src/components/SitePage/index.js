import React, { Component } from 'react'

export default class SitePage extends Component {
  render() {
    const post = this.props.data.post
    return <div dangerouslySetInnerHTML={{ __html: post.html }} />
  }
}
