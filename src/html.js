import React from 'react'
import Helmet from 'react-helmet'

let stylesStr
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

export default class HTML extends React.Component {
  render() {
    const head = Helmet.rewind()
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html lang="ja-JP">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          {css}
          <link
            href="/img/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />
          <meta name="robots" content="noindex,noimageindex" />
        </head>
        {true ? (
          <body>
            <h1>ただいま停止中</h1>
            <p>
              問い合わせは<a href="https://twitter.com/yagi_suke">こちら</a>まで
            </p>
          </body>
        ) : (
          <body>
            <div
              id="___gatsby"
              dangerouslySetInnerHTML={{ __html: this.props.body }}
            />
            {this.props.postBodyComponents}
          </body>
        )}
      </html>
    )
  }
}
