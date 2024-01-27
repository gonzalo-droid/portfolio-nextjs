import Image from "next/image";
import styles from "./page.module.css";
import '../css/style.css';
import '../scss/style.scss';
import ExternalScripts from '../js/externalJs';



export default function Home() {
  return (
    <main >

      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">GonzDev</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a href="index.html" className="nav-link">Hi 👋</a></li>              
              <li className="nav-item"><a href="project.html" className="nav-link">Project 💻</a></li>                            
              <li className="nav-item"><a href="contact.html" className="nav-link">Contact 🤙</a></li>
            </ul>
          </div>
        </div>
      </nav>


      <section className="home-slider owl-carousel bg-white">
        <div className="slider-item ">
          <div className="container">
            <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-end">
              <div className="one-third order-md-last img "
                style={{ backgroundImage: "url(/images/bg_1.jpg)" }}>
              </div>
              <div className="one-forth d-flex align-items-center ">
                <div className="text">
                  <h1 className="mb-4">We Love <br />Modern Designs</h1>
                  <p>A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
                    your mouth.</p>
                  <p><a href="#" className="btn btn-primary px-4 py-3 mt-3">Descargar CV</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftc-no-pb">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-5 p-md-5 img img-2" style={{ backgroundImage: "url(images/bg_3.jpg)" }}>
            </div>
            <div className="col-md-7 wrap-about pb-md-5 ">
              <div className="heading-section mb-5 pl-md-5">
                <div className="pl-md-5 ml-md-5">
                  <span className="subheading subheading-with-line"><small
                    className="pr-2 bg-white">About</small></span>
                  <h2 className="mb-4">We are the best Interior, Exterior &amp; Architecture Firm</h2>
                </div>
              </div>
              <div className="pl-md-5 ml-md-5 mb-5">
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it
                  would have been rewritten a thousand times and everything that was left from its origin
                  would be the word and the Little Blind Text should turn around and return to its own,
                  safe country. But nothing the copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged
                  her into their agency, where they abused her for their.</p>
                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the
                  skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of
                  her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she
                  continued her way.</p>
                <p><a href="#" className="btn-custom">Learn More <span className="ion-ios-arrow-forward"></span></a></p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: "url(images/bg_3.jpg)" }}
        data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row d-md-flex align-items-center justify-content-end">
            <div className="col-lg-10">
              <div className="row d-md-flex align-items-center">
                <div className="col-md d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="18">0</strong>
                      <span>Years of Experienced</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="351">0</strong>
                      <span>Happy Clients</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="564">0</strong>
                      <span>Finished Projects</span>
                    </div>
                  </div>
                </div>
                <div className="col-md d-flex justify-content-center counter-wrap ">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="300">0</strong>
                      <span>Working Days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-services">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-5">
            <div className="col-md-4 heading-section ">
              <h2 className="mb-4">Our Work Flow</h2>
            </div>
            <div className="col-md-8 pl-md-5 ">
              <div className="pl-md-4 border-line">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                  there live the blind texts. Separated they live in.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-idea"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Perfectly Design</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-compass-symbol"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Carefully Planned</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-layers"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Smartly Execute</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-start mt-5 py-5">
            <div className="col-md-4 heading-section ">
              <h2 className="mb-4">Our Services</h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                unorthographic.</p>
            </div>
            <div className="col-md-8 ">
              <div className="row d-flex">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-layers"></span>
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">Design</h3>
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an
                        almost unorthographic.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-layers"></span>
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">Industrial Design</h3>
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an
                        almost unorthographic.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-layers"></span>
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">Architecture Support</h3>
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an
                        almost unorthographic.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="flaticon-layers"></span>
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">Renovation</h3>
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an
                        almost unorthographic.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-2">
            <div className="col-md-4 heading-section ">
              <span className="subheading subheading-with-line"><small className="pr-2 bg-white">Projects</small></span>
              <h2 className="mb-4">Featured Projects</h2>
            </div>
            <div className="col-md-8 pl-md-5 heading-section ">
              <div className="pl-md-4 border-line">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                  there live the blind texts. Separated they live in. A small river named Duden flows by their
                  place and supplies it with the necessary regelialia. It is a paradisematic country, in which
                  roasted parts of sentences fly into your mouth.</p>
                <p className="category mt-5">
                  <span className="active mr-2"><a href="#">All Work</a></span>
                  <span className="mr-2"><a href="#">Interior</a></span>
                  <span className="mr-2"><a href="#">Exterior</a></span>
                  <span className="mr-2"><a href="#">Landscape</a></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-wrap">
          <div className="row no-gutters">
            <div className="col-md-6 col-lg-3 ">
              <div className="project">
                <Image src="/src/images/work_1.jpg" className="img-fluid" alt="Colorlib Template"
                  width={500}
                  height={500} />
                <div className="text">
                  <span>Interior Design</span>
                  <h3><a href="project.html">Office Interior Design</a></h3>
                </div>
                <a href="images/work_1.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center">
                  <span className="icon-expand"></span>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="project">
                <Image src="/images/work_2.jpg" className="img-fluid" alt="Colorlib Template" width={500}
                  height={500} />
                <div className="text">
                  <span>Interior Design</span>
                  <h3>Office Interior Design</h3>
                </div>
                <a href="images/work-2.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center">
                  <span className="icon-expand"></span>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="project">
                <Image src="/images/work-3.jpg" className="img-fluid" alt="Colorlib Template" width={500}
                  height={500} />
                <div className="text">
                  <span>Interior Design</span>
                  <h3>Office Interior Design</h3>
                </div>
                <a href="images/work-3.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center">
                  <span className="icon-expand"></span>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="project">
                <Image src="/images/work-4.jpg" className="img-fluid" alt="Colorlib Template" width={500}
                  height={500} />
                <div className="text">
                  <span>Interior Design</span>
                  <h3>Office Interior Design</h3>
                </div>
                <a href="images/work-4.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center">
                  <span className="icon-expand"></span>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="project">
                <Image src="/images/work-5.jpg" className="img-fluid" alt="Colorlib Template" width={500}
                  height={500} />
                <div className="text">
                  <span>Landscape Design</span>
                  <h3>Office Interior Design</h3>
                </div>
                <a href="images/work-5.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center">
                  <span className="icon-expand"></span>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="project">
                <Image src="/images/work-6.jpg" className="img-fluid" alt="Colorlib Template" width={500}
                  height={500} />
                <div className="text">
                  <span>Exterior Design</span>
                  <h3>Office Interior Design</h3>
                </div>
                <a href="images/work-6.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center">
                  <span className="icon-expand"></span>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="project">
                <Image src="/images/work-7.jpg" className="img-fluid" alt="Colorlib Template" width={500}
                  height={500} />
                <div className="text">
                  <span>Exterior Design</span>
                  <h3>Office Interior Design</h3>
                </div>
                <a href="images/work-7.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center">
                  <span className="icon-expand"></span>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="project">
                <Image src="/images/work-8.jpg" className="img-fluid" alt="Colorlib Template" width={500}
                  height={500} />
                <div className="text">
                  <span>Interior Design</span>
                  <h3>Office Interior Design</h3>
                </div>
                <a href="images/work-8.jpg"
                  className="icon image-popup d-flex justify-content-center align-items-center">
                  <span className="icon-expand"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section testimony-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ">
              <span className="subheading subheading-with-line"><small className="pr-2 bg-light">Testimony</small></span>
              <h2 className="mb-4">Our satisfied customer says</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                live the blind texts. Separated they live in</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel">
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5" style={{ backgroundImage: "url(images/person_1.jpg)" }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind texts.</p>
                      <div className="pl-5">
                        <p className="name">Garreth Smith</p>
                        <span className="position">CEO Founder of Commercial Building</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5" style={{ backgroundImage: "url(images/person_2.jpg)" }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind texts.</p>
                      <div className="pl-5">
                        <p className="name">Garreth Smith</p>
                        <span className="position">CEO Founder of Interior Design</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5" style={{ backgroundImage: "url(images/person_3.jpg)" }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind texts.</p>
                      <div className="pl-5">
                        <p className="name">Garreth Smith</p>
                        <span className="position">Exterior Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5" style={{ backgroundImage: "url(images/person_1.jpg)" }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind texts.</p>
                      <div className="pl-5">
                        <p className="name">Garreth Smith</p>
                        <span className="position">Landscape Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div className="user-img mb-5" style={{ backgroundImage: "url(images/person_1.jpg)" }}>
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text">
                      <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind texts.</p>
                      <div className="pl-5">
                        <p className="name">Garreth Smith</p>
                        <span className="position">System Analyst</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section ">
              <span className="subheading subheading-with-line"><small className="pr-2 bg-white">Expert
                Team</small></span>
              <h2 className="mb-4">Our Architect Team</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                live the blind texts. Separated they live in</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 ">
              <div className="staff">
                <div className="img" style={{ backgroundImage: "url(images/team-1.jpg)" }}></div>
                <div className="text px-4 pt-4">
                  <h3>John Wilson</h3>
                  <span className="position mb-2">Co-Founder / CEO</span>
                  <div className="faded">
                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    <ul className="ftco-social d-flex">
                      <li className=""><a href="#"><span className="icon-twitter"></span></a></li>
                      <li className=""><a href="#"><span className="icon-facebook"></span></a></li>
                      <li className=""><a href="#"><span className="icon-google-plus"></span></a></li>
                      <li className=""><a href="#"><span className="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="staff">
                <div className="img" style={{ backgroundImage: "url(images/team-2.jpg)" }}></div>
                <div className="text px-4 pt-4">
                  <h3>David Smith</h3>
                  <span className="position mb-2">Achitect</span>
                  <div className="faded">
                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    <ul className="ftco-social d-flex">
                      <li className=""><a href="#"><span className="icon-twitter"></span></a></li>
                      <li className=""><a href="#"><span className="icon-facebook"></span></a></li>
                      <li className=""><a href="#"><span className="icon-google-plus"></span></a></li>
                      <li className=""><a href="#"><span className="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="staff">
                <div className="img" style={{ backgroundImage: "url(images/team-3.jpg)" }}></div>
                <div className="text px-4 pt-4">
                  <h3>David Smith</h3>
                  <span className="position mb-2">Achitect</span>
                  <div className="faded">
                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    <ul className="ftco-social d-flex">
                      <li className=""><a href="#"><span className="icon-twitter"></span></a></li>
                      <li className=""><a href="#"><span className="icon-facebook"></span></a></li>
                      <li className=""><a href="#"><span className="icon-google-plus"></span></a></li>
                      <li className=""><a href="#"><span className="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="staff">
                <div className="img" style={{ backgroundImage: "url(images/team-4.jpg)" }}></div>
                <div className="text px-4 pt-4">
                  <h3>David Smith</h3>
                  <span className="position mb-2">Achitect</span>
                  <div className="faded">
                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    <ul className="ftco-social d-flex">
                      <li className=""><a href="#"><span className="icon-twitter"></span></a></li>
                      <li className=""><a href="#"><span className="icon-facebook"></span></a></li>
                      <li className=""><a href="#"><span className="icon-google-plus"></span></a></li>
                      <li className=""><a href="#"><span className="icon-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-2">
            <div className="col-md-4 heading-section ">
              <span className="subheading subheading-with-line"><small className="pr-2 bg-white">Blog</small></span>
              <h2 className="mb-4">Recent Blog</h2>
            </div>
            <div className="col-md-8 pl-md-5 heading-section ">
              <div className="pl-md-4 border-line">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                  there live the blind texts.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ">
              <div className="blog-entry">
                <a href="blog-single.html" className="block-20"
                  style={{ backgroundImage: "url('images/image_1.jpg');" }}>
                </a>
                <div className="text d-flex py-4">
                  <div className="meta mb-3">
                    <div><a href="#">Jan. 20, 2019</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                  </div>
                  <div className="desc pl-3">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the
                      blind texts</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="blog-entry" data-aos-delay="100">
                <a href="blog-single.html" className="block-20"
                  style={{ backgroundImage: "url('images/image_2.jpg');" }}>
                </a>
                <div className="text d-flex py-4">
                  <div className="meta mb-3">
                    <div><a href="#">Jan. 20, 2019</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                  </div>
                  <div className="desc pl-3">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the
                      blind texts</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="blog-entry" data-aos-delay="200">
                <a href="blog-single.html" className="block-20"
                  style={{ backgroundImage: "url('images/image_3.jpg');" }}>
                </a>
                <div className="text d-flex py-4">
                  <div className="meta mb-3">
                    <div><a href="#">Jan. 20, 2019</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                  </div>
                  <div className="desc pl-3">
                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the
                      blind texts</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="ftco-footer ftco-bg-dark ftco-section">

      </footer>
      <ExternalScripts />
    </main>
  );
}
