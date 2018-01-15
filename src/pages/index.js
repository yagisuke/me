import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Profile extends Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <section id="profile" className="text-center">
          <div className="container">
            <img
              src={`${pathPrefix}/img/profile.jpg`}
              className="rounded-circle mx-auto d-block u-img-popup"
              width="120"
              height="120"
            />
            <h1>yagi_suke</h1>
            <p className="lead text-muted text-center">
              週末は登山かプログラミングか
            </p>
            <div>
              <a
                ref="twButton"
                href="https://twitter.com/yagi_suke"
                className="twitter-follow-button"
                data-show-count="false"
              >
                Follow @yagi_suke
              </a>
            </div>
          </div>
        </section>
        <section id="features" className="bg-primary text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="u-font-mono">Features</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-8">
                <p className="text-center">
                  バックエンドとフロントエンドを隔てなく開発してきました。
                  最近では、フロントエンドの高品質化に注力し、マネジメント業務も担当。
                  今後は開発の立場から、事業の成長に貢献していきたいと考えています。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="works" className="text-center color-inverse">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="u-font-mono">Works</h2>
                <hr className="border-primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row c-works">
              <div className="col-sm-6 col-md-4 c-works__list">
                <div className="card">
                  <div className="card-body">
                    <div className="c-works__top">
                      <img
                        src={`${pathPrefix}/img/work/work-1.png`}
                        alt="RegionUP"
                        className="c-works__top__img"
                      />
                    </div>
                    <div className="c-works__skills">
                      <span className="badge badge-primary text-white">
                        Java
                      </span>
                      <span className="badge badge-primary text-white">
                        JavaScript
                      </span>
                      <span className="badge badge-primary text-white">
                        jQuery
                      </span>
                      <span className="badge badge-primary text-white">
                        HTML
                      </span>
                      <span className="badge badge-primary text-white">
                        CSS
                      </span>
                    </div>
                    <Link
                      to="/regionup/"
                      className="btn btn-outline-primary btn-block"
                    >
                      もっと見る
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 c-works__list">
                <div className="card">
                  <div className="card-body">
                    <div className="c-works__top">
                      <img
                        src={`${pathPrefix}/img/work/work-2.png`}
                        alt="ゼクシィ"
                        className="c-works__top__img"
                      />
                    </div>
                    <div className="c-works__skills">
                      <span className="badge badge-primary text-white">
                        JavaScript
                      </span>
                      <span className="badge badge-primary text-white">
                        jQuery
                      </span>
                      <span className="badge badge-primary text-white">
                        HTML
                      </span>
                      <span className="badge badge-primary text-white">
                        CSS
                      </span>
                    </div>
                    <Link
                      to="/zexy/"
                      className="btn btn-outline-primary btn-block"
                    >
                      もっと見る
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 c-works__list">
                <div className="card">
                  <div className="card-body">
                    <div className="c-works__top">
                      <img
                        src={`${pathPrefix}/img/work/work-3.png`}
                        alt="HOT PEPPER Beauty"
                        className="c-works__top__img"
                      />
                    </div>
                    <div className="c-works__skills">
                      <span className="badge badge-primary text-white">
                        Java
                      </span>
                      <span className="badge badge-primary text-white">
                        Oracle
                      </span>
                    </div>
                    <Link
                      to="/hotpepper-beauty/"
                      className="btn btn-outline-primary btn-block"
                    >
                      もっと見る
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 c-works__list">
                <div className="card">
                  <div className="card-body">
                    <div className="c-works__top">
                      <img
                        src={`${pathPrefix}/img/work/work-4.png`}
                        alt="careertrek"
                        className="c-works__top__img"
                      />
                    </div>
                    <div className="c-works__skills">
                      <span className="badge badge-primary text-white">
                        Java
                      </span>
                      <span className="badge badge-primary text-white">
                        MySQL
                      </span>
                    </div>
                    <Link
                      to="/careertrek/"
                      className="btn btn-outline-primary btn-block"
                    >
                      もっと見る
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 c-works__list">
                <div className="card">
                  <div className="card-body">
                    <div className="c-works__top">
                      <img
                        src={`${pathPrefix}/img/work/work-5.png`}
                        alt="じゃらん"
                        className="c-works__top__img"
                      />
                    </div>
                    <div className="c-works__skills">
                      <span className="badge badge-primary text-white">
                        JavaScript
                      </span>
                      <span className="badge badge-primary text-white">
                        React/Redux
                      </span>
                      <span className="badge badge-primary text-white">
                        HTML
                      </span>
                      <span className="badge badge-primary text-white">
                        CSS
                      </span>
                    </div>
                    <Link
                      to="/jalan-business-support/"
                      className="btn btn-outline-primary btn-block"
                    >
                      もっと見る
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="bg-primary text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="u-font-mono">Skills</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center c-skills">
              <div className="col-lg-3 col-6">
                <div
                  className="c-skills__box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Java"
                >
                  <i
                    className="devicon-java-plain-wordmark c-skills__img"
                    data-emergence="hidden"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="c-skills__box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="MySQL"
                >
                  <i
                    className="devicon-mysql-plain-wordmark c-skills__img"
                    data-emergence="hidden"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="c-skills__box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ORACLE"
                >
                  <i
                    className="devicon-oracle-original c-skills__img"
                    data-emergence="hidden"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="c-skills__box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="HTML5"
                >
                  <i
                    className="devicon-html5-plain-wordmark c-skills__img"
                    data-emergence="hidden"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center c-skills">
              <div className="col-lg-3 col-6">
                <div
                  className="c-skills__box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="CSS3"
                >
                  <i
                    className="devicon-css3-plain-wordmark c-skills__img"
                    data-emergence="hidden"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="c-skills__box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="JavaScript"
                >
                  <i
                    className="devicon-javascript-plain c-skills__img"
                    data-emergence="hidden"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="c-skills__box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="React"
                >
                  <i
                    className="devicon-react-original-wordmark c-skills__img"
                    data-emergence="hidden"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="c-skills__box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="jQuery"
                >
                  <i
                    className="devicon-jquery-plain-wordmark c-skills__img"
                    data-emergence="hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
