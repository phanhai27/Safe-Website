import Head from 'next/head'

function IndexPage() {
    const styling = {
        backgroundImage: "url('/static/img/banner-bk.jpg')",
      }
    return (
      <div>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>SafeWeb - Protect your project</title>

            <meta name="description" content="Effective remote work collaboration" />
    
            <meta itemprop="name" content="SafeWeb - Protect your project"/>
            <meta itemprop="description" content="Effective remote work collaboration"/>
            <meta itemprop="image" content="/static/img/safeweb-app-tracking.jpg"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://safeweb.app"/>
            <meta property="og:title" content="SafeWeb - Protect your project"/>
            <meta property="og:description" content="Effective remote work collaboration"/>
            <meta property="og:image" content="/static/img/safeweb-app-tracking.jpg"/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://safeweb.app"/>
            <meta property="twitter:title" content="SafeWeb - Protect your project"/>
            <meta property="twitter:description" content="Effective remote work collaboration"/>
            <meta property="twitter:image" content="/static/img/safeweb-app-tracking.jpg"/>
            
            <link rel="icon" href="/static/img/favicon.png" sizes="32x32" type="image/png"/>
            <link rel="stylesheet" href="/static/css/custom.css"/>
            <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/static/font-awesome-4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="/static/css/aos.css"></link>
            
            <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script type="text/javascript" async src="https://www.googletagmanager.com/gtag/js?id=G-9F4WMSXE2C"></script>
            <script type="text/javascript" src="https://www.google.com/recaptcha/api.js?render=6LcUv5MaAAAAAFdSHhVVXoQTYoHRr2SKSSMqHU0F"></script>
            <script type="text/javascript" src="/static/js/myscript.js"></script>
            <script type="text/javascript" src="/static/js/aos.js"></script>
        </Head>
        
    <div class="jumbotron jumbotron-fluid" id="banner">
        <div class="container text-center text-md-left">
            <header>
                <div class="row justify-content-between">
                    <div class="col-2">
                        <img src="/static/img/logo.png" alt="logo"/>
                    </div>
                    <div class="col-6 align-self-center text-right">
                        <a href="https://admin.safeweb.app/login" class="btn my-4 font-weight-bold atlas-cta cta-white">Sign in</a>
						<a href="https://admin.safeweb.app/register" class="btn my-4 font-weight-bold atlas-cta cta-blue">Try it FREE</a>
                    </div>
                </div>
            </header>
            <h1 data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" class="display-3 text-white font-weight-bold my-5">
            	A New Way<br/>
            	To Work Remotely
            </h1>
            <p data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" class="lead text-white my-4">
                Working in a virtual office environment, each person sitting in a remote place.
                <br/> Not wasting time, everyone was highly focused.
            </p>
            <a href="https://safeweb.app/download" target="_blank" data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" class="btn my-4 font-weight-bold atlas-cta cta-green">Get Started</a>
        </div>
    </div>
    <style JSX>{`
    #banner {        
        background: url('/static/img/banner-bk.jpg');
    }
    `}</style>

    <div class="container my-5 py-2">
        <h2 class="text-center font-weight-bold my-5">Highly focused on your project</h2>
        <div class="row">
            <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" data-aos-once="true" class="col-md-4 text-center">
                <img src="/static/img/smart-protect-1.jpg" alt="Anti-spam" class="mx-auto"/>
                <h4>High efficiency work</h4>
                <p>When you lose focus, the app will remind you.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" class="col-md-4 text-center">
                <img src="/static/img/smart-protect-2.jpg" alt="Phishing Detect" class="mx-auto"/>
                <h4>Avoid wasting time</h4>
                <p>App assists you in getting rid of useless things.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true" class="col-md-4 text-center">
                <img src="/static/img/smart-protect-3.jpg" alt="Smart Scan" class="mx-auto"/>
                <h4>Real-time reporting</h4>
                <p>The App actively sends warnings to the leader.</p>
            </div>
        </div>
    </div>

    <div class="jumbotron jumbotron-fluid feature" id="feature-first">
        <div class="container my-5">
            <div class="row justify-content-between text-center text-md-left">
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" class="col-md-6">
                    <h2 class="font-weight-bold">Take a look inside</h2>
                    <p class="my-4">Team transparency in the project,
                        <br/> details of the work that members are trying to develop.</p>
                    <a href="#" class="btn my-4 font-weight-bold atlas-cta cta-blue">Learn More</a>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" class="col-md-6 align-self-center">
                    <img src="/static/img/feature-1.png" alt="Take a look inside" class="mx-auto d-block" />
                </div>
            </div>
        </div>
    </div>

    <div class="jumbotron jumbotron-fluid feature" id="feature-last">
        <div class="container">
            <div class="row justify-content-between text-center text-md-left">
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" class="col-md-6 flex-md-last">
                    <h2 class="font-weight-bold">Safe and reliable</h2>
                    <p class="my-4">
                        App runs smoothly, does not affect your work.
                        <br/> You can control multiple apps remotely at the same time.
                    </p>
                    <a href="#" class="btn my-4 font-weight-bold atlas-cta cta-blue">Learn More</a>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" class="col-md-6 align-self-center flex-md-first">
                    <img src="/static/img/feature-2.png" alt="Safe and reliable" class="mx-auto d-block" />
                </div>
            </div>
        </div>
    </div>

    <div class="container my-5 py-2" id="price-table">
        <h2 class="text-center font-weight-bold d-block mb-3">Check our pricing</h2>
        <div class="row">
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" class="col-md-4 text-center py-4 mt-5">
                <h4 class="my-4">FREE</h4>
                <p class="font-weight-bold">$ <span class="display-2 font-weight-bold">0</span> / MO.</p>
                <ul class="list-unstyled">
                    <li>Up to 30 Reports</li>
                    <li>Up to 30 Real-time</li>
                    <li>4 team Members</li>
                    <li>Limited Support</li>
                </ul>
                <a href="#" class="btn my-4 font-weight-bold atlas-cta cta-ghost">Get Free</a>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" class="col-md-4 text-center py-4 mt-5 rounded" id="price-table__premium">
                <h4 class="my-4">STANDARD</h4>
                <p class="font-weight-bold">$ <span class="display-2 font-weight-bold">7</span> / MO.</p>
                <ul class="list-unstyled">
                    <li>Up to 100 Reports</li>
                    <li>Up to 100 Real-time</li>
                    <li>30 team Members</li>
                    <li>Limited Support</li>
                </ul>
                <a href="#" class="btn my-4 font-weight-bold atlas-cta cta-green">Buy Now</a>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" class="col-md-4 text-center py-4 mt-5">
                <h4 class="my-4">PREMIUM</h4>
                <p class="font-weight-bold">$ <span class="display-2 font-weight-bold">14</span> / MO.</p>
                <ul class="list-unstyled">
                    <li>1000 Reports</li>
                    <li>1000 Real-time</li>
                    <li>100 Members</li>
                    <li>Unlimited Support</li>
                </ul>
                <a href="#" class="btn my-4 font-weight-bold atlas-cta cta-ghost">Buy Now</a>
            </div>
        </div>
    </div>

    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="/static/img/client-1.png" class="mx-auto d-block"/>
                </div>
                <div class="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="/static/img/client-2.png" class="mx-auto d-block" />
                </div>
                <div class="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="/static/img/client-3.png" class="mx-auto d-block" />
                </div>
                <div class="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="/static/img/client-4.png" class="mx-auto d-block" />
                </div>
                <div class="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="/static/img/client-5.png" class="mx-auto d-block" />
                </div>
                <div class="col-sm-4 col-md-2 py-2 align-self-center">
                    <img src="/static/img/client-6.png" class="mx-auto d-block" />
                </div>
            </div>
        </div>
    </div>

    <div class="jumbotron jumbotron-fluid" id="contact">
        <div class="container my-5">
            <div class="row justify-content-between">
                <div class="col-md-6 text-white">
                    <h2 class="font-weight-bold">Contact Us</h2>
                    <p class="my-4">
                        If you want to add features or buy an on-premise version,
                        <br /> please contact the address below.
                    </p>
                    <ul class="list-unstyled">
                        <li>Email : qa@safeweb.app</li>
                        <li>Phone : +84-989-550-390</li>
                        <li>Address : Hanoi, Vietnam</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <form>
                    	<div class="row">
	                        <div class="form-group col-md-6">
	                            <label for="name">Your Name</label>
	                            <input type="name" class="form-control" id="name" />
	                        </div>
	                        <div class="form-group col-md-6">
	                            <label for="Email">Your Email</label>
	                            <input type="email" class="form-control" id="email" />
	                        </div>
	                    </div>
	                    <div class="form-group">
	                        <label for="message">Message</label>
	                        <textarea class="form-control" id="message" rows="3"></textarea>
	                    </div>
                        <button type="submit" class="btn font-weight-bold atlas-cta atlas-cta-wide cta-green my-3" id="gocontact">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <style JSX>{`
    #contact {        
        background: url('/static/img/contact-bk.jpg');
    }
    `}</style>

    <div class="jumbotron jumbotron-fluid" id="copyright">
        <div class="container">
            <div class="row justify-content-between">
            	<div class="col-md-6 text-white align-self-center text-center text-md-left my-2">
                    Copyright © 2021 SafeWeb.
                </div>
                <div class="col-md-6 align-self-center text-center text-md-right my-2" id="social-media">
                    <a href="#" class="d-inline-block text-center ml-2">
                    	<i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#" class="d-inline-block text-center ml-2">
                    	<i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#" class="d-inline-block text-center ml-2">
                    	<i class="fa fa-medium" aria-hidden="true"></i>
                    </a>
                    <a href="#" class="d-inline-block text-center ml-2">
                    	<i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default IndexPage