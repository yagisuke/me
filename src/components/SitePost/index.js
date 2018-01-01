import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import size from 'lodash/size'
import moment from 'moment'
import BackPage from '../BackPage'

export default class SitePost extends Component {
  startEnd(start, end) {
    if (!start) return

    const startText = moment(start).format('YYYY/MM/DD')
    const endText = end ? moment(end).format('YYYY/MM/DD') : '現在'

    return (
      <span className="startEnd">
        {startText} 〜 {endText}
      </span>
    )
  }

  categories(data) {
    if (!data) return

    return data.map((category, i) => {
      return (
        <span className="badge badge-primary text-white" key={i}>
          {category}
        </span>
      )
    })
  }

  description(body) {
    let test = body.replace(/<blockquote>/g, '<blockquote class="blockquote">')
    if (test.match('<!--more-->')) {
      test = test.split('<!--more-->')
      if (typeof test[0] !== 'undefined') {
        return test[0]
      }
    }
    return test
  }

  more(path) {
    if (!path) return

    return (
      <Link to={path} className="readmore">
        <span className="btn btn-outline-primary btn-block">もっと見る</span>
      </Link>
    )
  }

  render() {
    const { site, data, isIndex } = this.props

    const title = get(data, 'frontmatter.title')
    const path = get(data, 'frontmatter.path')
    const date = get(data, 'frontmatter.date')
    const startEnd = this.startEnd(
      get(data, 'frontmatter.start'),
      get(data, 'frontmatter.end')
    )
    const cate =
      get(data, 'frontmatter.category') || get(data, 'frontmatter.categories')
    const categories = cate ? this.categories(cate) : ''
    const html = get(data, 'html')
    const content = isIndex ? this.description(html) : html
    const more = isIndex ? this.more(path) : ''
    const backPage = isIndex ? '' : <BackPage data={site} />

    return (
      <div className="container">
        <div className="articles col-md-12">
          <div className="article-wrap" key={path}>
            <div className="page-header">
              <Link to={path} style={{ boxShadow: 'none' }}>
                <h1>{title}</h1>
                {startEnd}
              </Link>
              {categories}
            </div>
            <div
              className="page-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {more}
            {backPage}
          </div>
        </div>
      </div>
    )
  }
}
