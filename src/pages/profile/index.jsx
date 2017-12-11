import React from 'react'

class Profile extends React.Component {
  render() {
    const pathPrefix = process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div>
        <section className="text-center">
          <div className="container">
            <img
              src={pathPrefix + '/img/profile.jpg'}
              className="rounded-circle mx-auto d-block"
              width="120px"
            />
            <h1>yagi_suke</h1>
            <p className="lead text-muted">週末は登山かプログラミングか</p>
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
                <h2 className="section-heading">SKILL</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Java"
                  >
                  <i className="devicon-java-plain-wordmark" data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="MySQL"
                  >
                  <i className="devicon-mysql-plain-wordmark" data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="AWS"
                  >
                  <i className="devicon-amazonwebservices-plain-wordmark" data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="HTML5"
                  >
                  <i className="devicon-html5-plain-wordmark" data-emergence="hidden" />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="CSS3"
                  >
                  <i className="devicon-css3-plain-wordmark" data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="JavaScript"
                  >
                  <i className="devicon-javascript-plain" data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="React"
                  >
                  <i className="devicon-react-original-wordmark" data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="jQuery"
                  >
                  <i className="devicon-jquery-plain-wordmark" data-emergence="hidden" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">Features</h2>
                <hr className="border-primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-8">
                <p>
                  学生時代のバイトでWEBエンジニアになりました。<br />
                  主にフロントエンドを仕事にしていますが、バックエンドの開発もやってます。
                  趣味はNode.jsを使ったIoTとアプリの開発です。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-primary text-white text-center color-inverse"
          id="concept"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">WORKS</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 slide-left" data-emergence="hidden">
                <img
                  src={pathPrefix + '/img/work1.png'}
                  alt="work1"
                  className="rounded-circle mx-auto"
                />
                <p>Yomu</p>
              </div>
              <div className="col-md-6 slide-right" data-emergence="hidden">
                <img
                  src={pathPrefix + '/img/work2.png'}
                  alt="work2"
                  className="rounded-circle mx-auto"
                />
                <p>Detector</p>
              </div>
            </div>
          </div>
        </section>

        <section id="repos">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <h2 className="section-heading">Repositories</h2>
              </div>
              <div className="col-md-6 text-left">
                <li>
                  <a href="https://github.com/jaxx2104/gatsby-starter-bootstrap">
                    gatstrap
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jaxx2104/gulp-sample">
                    gulp-sample
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jaxx2104/irm">irm</a>
                </li>
                <li>
                  <a href="https://github.com/jaxx2104/mt-dataapi-php">
                    mt-dataapi-php
                  </a>
                </li>
              </div>
            </div>
          </div>
        </section>
        <section id="features">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src={pathPrefix + '/img/work3.png'}
                  className="img-rounded img-responsive"
                  title=""
                  alt=""
                />
              </div>
              <div className="col-md-6 text-center align-middle">
                <h2 className="section-heading">Degree Works</h2>
                <p>
                  過去の制作は<a href="https://old.jaxx2104.info/">こちら</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile
