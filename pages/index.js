import { getFontDefinitionFromNetwork } from 'next/dist/next-server/server/font-utils'
import Head from 'next/head'
import homeData from '../homepage.json'

function IndexPage() {
    return (
      <div>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>{homeData.title}</title>

            <meta name="description" content={homeData.meta.description} />
    
            <meta itemProp="name" content={homeData.title}/>
            <meta itemProp="description" content={homeData.meta.description}/>
            <meta itemProp="image" content={homeData.meta.image}/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={homeData.meta.url}/>
            <meta property="og:title" content={homeData.title}/>
            <meta property="og:description" content={homeData.meta.description}/>
            <meta property="og:image" content={homeData.meta.image}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={homeData.meta.url}/>
            <meta property="twitter:title" content={homeData.title}/>
            <meta property="twitter:description" content={homeData.meta.description}/>
            <meta property="twitter:image" content={homeData.meta.image}/>
            
            <link rel="icon" href="/static/img/favicon.png" sizes="32x32" type="image/png"/>
            <link rel="stylesheet" href="/static/css/custom.css"/>
            <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/static/font-awesome-4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="/static/css/aos.css"></link>
            
            <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script type="text/javascript" async src="https://www.googletagmanager.com/gtag/js?id=G-9F4WMSXE2C"></script>
            <script type="text/javascript" src="https://www.google.com/recaptcha/api.js?render=6LcUv5MaAAAAAFdSHhVVXoQTYoHRr2SKSSMqHU0F"></script>
            <script type="text/javascript" src="/static/js/aos.js"></script>
            <script type="text/javascript" src="/static/js/ga.js"></script>
            <script type="text/javascript" src="/static/js/myscript.js"></script>
        </Head>
        
    <div className="jumbotron jumbotron-fluid" id="banner">
        <div className="container text-center text-md-left">
            <header>
                <div className="row justify-content-between">
                    <div className="col-2">
                        <img src="/static/img/logo.png" alt="logo"/>
                    </div>
                    <div className="col-6 align-self-center text-right">
                        <a href="https://admin.safeweb.app/login" className="btn my-4 font-weight-bold atlas-cta cta-white">Sign in</a>
						<a href="https://admin.safeweb.app/register" className="btn my-4 font-weight-bold atlas-cta cta-blue">Try it FREE</a>
                    </div>
                </div>
            </header>
            <h1 data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" className="display-3 text-white font-weight-bold my-5">
            	{homeData.header.part1}<br/>{homeData.header.part2}
            </h1>
            <p data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" className="lead text-white my-4">
                {homeData.header.part3}<br/> {homeData.header.part4}
            </p>
            <a href="https://safeweb.app/download" target="_blank" data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" className="btn my-4 font-weight-bold atlas-cta cta-green">Get Started</a>
        </div>
    </div>
    <style jsx>{`
    #banner {        
        background: url('/static/img/banner-bk.jpg');
    }
    `}</style>

    <div className="container my-5 py-2">
        <h2 className="text-center font-weight-bold my-5">{homeData.topic.head}</h2>
        <div className="row">
            <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center">
                <img src="/static/img/smart-protect-1.jpg" alt="Anti-spam" className="mx-auto"/>
                <h4>{homeData.topic.part1}</h4>
                <p>{homeData.topic.message1}</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center">
                <img src="/static/img/smart-protect-2.jpg" alt="Phishing Detect" className="mx-auto"/>
                <h4>{homeData.topic.part2}</h4>
                <p>{homeData.topic.message2}</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center">
                <img src="/static/img/smart-protect-3.jpg" alt="Smart Scan" className="mx-auto"/>
                <h4>{homeData.topic.part3}</h4>
                <p>{homeData.topic.message3}</p>
            </div>
        </div>
    </div>

    <div className="jumbotron jumbotron-fluid feature" id="feature-first">
        <div className="container my-5">
            <div className="row justify-content-between text-center text-md-left">
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="col-md-6">
                    <h2 className="font-weight-bold">{homeData.feature.part1.head}</h2>
                    <p className="my-4">{homeData.feature.part1.message}<br/>{homeData.feature.part1.detail}</p>
                    <a href="./blog/kid-control" className="btn my-4 font-weight-bold atlas-cta cta-blue">Learn More</a>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className="col-md-6 align-self-center">
                    <img src="/static/img/feature-1.png" alt="Take a look inside" className="mx-auto d-block" />
                </div>
            </div>
        </div>
    </div>

    <div className="jumbotron jumbotron-fluid feature" id="feature-last">
        <div className="container">
            <div className="row justify-content-between text-center text-md-left">
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className="col-md-6 flex-md-last">
                    <h2 className="font-weight-bold">{homeData.feature.part2.head}</h2>
                    <p className="my-4">{homeData.feature.part2.message}<br/>{homeData.feature.part2.detail}</p>
                    <a href="./blog/safeweb-remote-tagui-rpa" className="btn my-4 font-weight-bold atlas-cta cta-blue">Learn More</a>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="col-md-6 align-self-center flex-md-first">
                    <img src="/static/img/feature-2.png" alt="Safe and reliable" className="mx-auto d-block" />
                </div>
            </div>
        </div>
    </div>

    <div className="container my-5 py-2" id="price-table">
        <h2 className="text-center font-weight-bold d-block mb-3">Check our pricing</h2>
        <div className="row">
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center py-4 mt-5">
                <h4 className="my-4">{homeData.payment.free.type}</h4>
                <p className="font-weight-bold">$ <span className="display-2 font-weight-bold">{homeData.payment.free.price}</span> / MO.</p>
                <ul className="list-unstyled">
                    <li>{homeData.payment.free.service1}</li>
                    <li>{homeData.payment.free.service2}</li>
                    <li>{homeData.payment.free.service3}</li>
                    <li>{homeData.payment.free.service4}</li>
                </ul>
                <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-ghost">{homeData.payment.free.button}</a>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center py-4 mt-5 rounded" id="price-table__premium">
            <h4 className="my-4">{homeData.payment.standard.type}</h4>
                <p className="font-weight-bold">$ <span className="display-2 font-weight-bold">{homeData.payment.standard.price}</span> / MO.</p>
                <ul className="list-unstyled">
                    <li>{homeData.payment.standard.service1}</li>
                    <li>{homeData.payment.standard.service2}</li>
                    <li>{homeData.payment.standard.service3}</li>
                    <li>{homeData.payment.standard.service4}</li>
                </ul>
                <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-green">{homeData.payment.standard.button}</a>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center py-4 mt-5">
            <h4 className="my-4">{homeData.payment.premium.type}</h4>
                <p className="font-weight-bold">$ <span className="display-2 font-weight-bold">{homeData.payment.premium.price}</span> / MO.</p>
                <ul className="list-unstyled">
                    <li>{homeData.payment.premium.service1}</li>
                    <li>{homeData.payment.premium.service2}</li>
                    <li>{homeData.payment.premium.service3}</li>
                    <li>{homeData.payment.premium.service4}</li>
                </ul>
                <a href="#" className="btn my-4 font-weight-bold atlas-cta cta-ghost">{homeData.payment.premium.button}</a>
            </div>
        </div>
    </div>

    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="/static/img/client-1.png" className="mx-auto d-block"/>
                </div>
                <div className="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="/static/img/client-2.png" className="mx-auto d-block" />
                </div>
                <div className="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="/static/img/client-3.png" className="mx-auto d-block" />
                </div>
                <div className="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="/static/img/client-4.png" className="mx-auto d-block" />
                </div>
                <div className="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="/static/img/client-5.png" className="mx-auto d-block" />
                </div>
                <div className="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="/static/img/client-6.png" className="mx-auto d-block" />
                </div>
            </div>
        </div>
    </div>

    <div className="jumbotron jumbotron-fluid" id="contact">
        <div className="container my-5">
            <div className="row justify-content-between">
                <div className="col-md-6 text-white">
                    <h2 className="font-weight-bold">Contact Us</h2>
                    <p className="my-4">
                        {homeData.footer.part1}<br/>{homeData.footer.part2}
                    </p>
                    <ul className="list-unstyled">
                        <li>Email : {homeData.footer.email}</li>
                        <li>Phone : {homeData.footer.phone}</li>
                        <li>Address : {homeData.footer.address}</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <form>
                    	<div className="row">
	                        <div className="form-group col-md-6">
	                            <label htmlFor="name">Your Name</label>
	                            <input type="name" className="form-control" id="name" />
	                        </div>
	                        <div className="form-group col-md-6">
	                            <label htmlFor="Email">Your Email</label>
	                            <input type="email" className="form-control" id="email" />
	                        </div>
	                    </div>
	                    <div className="form-group">
	                        <label htmlFor="message">Message</label>
	                        <textarea className="form-control" id="message" rows="3"></textarea>
	                    </div>
                        <button type="submit" className="btn font-weight-bold atlas-cta atlas-cta-wide cta-green my-3" id="gocontact">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <style jsx>{`
    #contact {        
        background: url('/static/img/contact-bk.jpg');
    }
    `}</style>

    <div className="jumbotron jumbotron-fluid" id="copyright">
        <div className="container">
            <div className="row justify-content-between">
            	<div className="col-md-6 text-white align-self-center text-center text-md-left my-2">
                    Copyright © 2021 SafeWeb.
                </div>
                <div className="col-md-6 align-self-center text-center text-md-right my-2" id="social-media">
                    <a href="#" className="d-inline-block text-center ml-2">
                    	<i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="d-inline-block text-center ml-2">
                    	<i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="d-inline-block text-center ml-2">
                    	<i className="fa fa-medium" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="d-inline-block text-center ml-2">
                    	<i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default IndexPage