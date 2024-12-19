import Head from 'next/head'
import React from 'react'
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';
import LanguageMenu from '../../components/LanguageMenu';
import { reCaptchaScript } from '../../lib/googleRecaptcha'
import ENV from '../../../env.json'
import $ from 'jquery';

function IndexPage({ language, homeData, externalUrls }) {
    const adminLang = language !== "vi" ? "en" : "vi";

    React.useEffect(() => {
        reCaptchaScript();

        var aoScript = document.createElement('script');
        aoScript.type = 'text/javascript';
        aoScript.src = "/static/js/aos.js";
    
        document.head.appendChild(aoScript);
        aoScript.onload = () => {
            AOS.init({});
        };

        var discountScript = document.createElement('script');
        discountScript.type = 'text/javascript';
        discountScript.src = "/static/js/discountPopup.js";
    
        document.head.appendChild(discountScript);
        discountScript.onload = () => {
        };

        $("#gocontact").click(function(e){
            e.preventDefault();
            
            grecaptcha.ready(function() {
                grecaptcha.execute('6LcUv5MaAAAAAFdSHhVVXoQTYoHRr2SKSSMqHU0F', {action: 'contact'}).then(function(token) {
                    var formData = {
                        "fullname": $("#name").val(),
                        "email": $("#email").val(),
                        "message": $("#message").val(),
                        "token": token,
                    };
                    $.ajax({
                        type: "POST",
                        url: "/api/v1/website/contact/submit",
                        data: JSON.stringify(formData),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                    })
                    .done(function (data) {
                        if (data.error == 0) {
                            $("form").html('<div class="alert alert-success">' + data.message + "</div>");
                        } else {
                            $("form").html('<div class="alert alert-danger">' + data.message + "</div>");
                        }
                    })
                    .fail(function (data) {
                        $("form").html('<div class="alert alert-danger">Could not reach server, please try again later.</div>');
                    });
                });
            });
        });
        
    }, [])

    const stylingImg1 = {
        width: "250px",
        height: "250px",
    }

    const stylingImg2 = {
        width: "250px",
        height: "350px",
    }
    
    return (
      <div>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>{homeData.title}</title>

            <meta name="description" content={homeData.meta.description} />
    
            <meta itemProp="name" content={homeData.title}/>
            <meta itemProp="description" content={homeData.meta.description}/>
            <meta itemProp="image" content={ENV.BASE_URL + homeData.meta.image}/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={ENV.BASE_URL + "/" + language + "/"}/>
            <meta property="og:title" content={homeData.title}/>
            <meta property="og:description" content={homeData.meta.description}/>
            <meta property="og:image" content={ENV.BASE_URL + homeData.meta.image}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={ENV.BASE_URL + "/" + language + "/"}/>
            <meta property="twitter:title" content={homeData.title}/>
            <meta property="twitter:description" content={homeData.meta.description}/>
            <meta property="twitter:image" content={ENV.BASE_URL + homeData.meta.image}/>
            
            <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/png"/>
            <link rel="stylesheet" href="/static/css/custom.css"/>
            <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
            {/* <link rel="stylesheet" href="/static/font-awesome-4.7.0/css/font-awesome.min.css"/> */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="/static/css/aos.css"></link>
            <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        </Head>

    <div className="top-lighthouse">
    <header>
        <div className="row justify-content-between">
            <div className="col-2 logo-img d-flex align-items-center pl-5 pt-3">
                <img style={{display: 'block', maxWidth: "200px"}} src="/static/img/logo.png" alt="logo"/>
            </div>
            <div className="col-6 text-right menu-main">
                <a href={externalUrls.SignUp + "?lang=" + adminLang} className="btn my-2 font-weight-bold atlas-cta cta-blue menu-item signUp">{homeData.header.button2}</a>
                <a href={externalUrls.SignIn + "?lang=" + adminLang} className="btn my-2 font-weight-bold atlas-cta cta-white menu-item">{homeData.header.button1}</a>
                <a className="btn font-weight-bold language-link menu-item"><LanguageMenu/></a>
            </div>
        </div>
    </header>
    </div>
    <div className="jumbotron jumbotron-fluid" id="banner">
        <div className="container text-center text-md-left">
            <h1 data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" className="display-3 text-white font-weight-bold my-5">
            	{homeData.header.part1}<br/>{homeData.header.part2}
            </h1>
            <p data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" className="lead text-white my-4">
                {homeData.header.part3}<br/> {homeData.header.part4}
            </p>
            <a href={"/" + language + "/download"} target="_blank" data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" className="btn my-4 font-weight-bold atlas-cta cta-green">{homeData.header.button3}</a>
        </div>
    </div>
    <style jsx>{`
    #banner {        
        background: url('/static/img/banner-bk.jpg');
    }
    .top-lighthouse {
        background: #26314a
    }
    @media screen and (max-width: 992px) {
        .menu-main {
            display: flex;
            align-items: center;
            flex-wrap: wrap
        }
        .language-link {
            order: -1
        }
        .menu-item {
            display: block;
            width: 100%
        }
        .menu-item > div {
            justify-content: center
        }
        .signUp.menu-item {
            width: auto;
            margin: auto
        }


	}
    `}</style>

    <div className="container my-5 py-2">
        <h2 className="text-center font-weight-bold my-5">{homeData.topic.head}</h2>
        <div className="row">
            <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center">
                <div className="about-img">
                    <img src="/static/img/smart-protect-1.png" alt="Anti-spam" className="mx-auto"/>
                </div>
                <h4>{homeData.topic.part1}</h4>
                <p>{homeData.topic.message1}</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center">
                <div className="about-img">
                    <img src="/static/img/smart-protect-2.png" alt="Phishing Detect" className="mx-auto"/>
                </div>
                <h4>{homeData.topic.part2}</h4>
                <p>{homeData.topic.message2}</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center">
                <div className="about-img">
                    <img src="/static/img/smart-protect-6.png" alt="Smart Scan" className="mx-auto"/>
                </div>
                <h4>{homeData.topic.part3}</h4>
                <p>{homeData.topic.message3}</p>
            </div>
        </div>
    </div>

    <div className="jumbotron jumbotron-fluid feature" id="feature-begin">
        <div className="container my-5">
            <div className="row justify-content-between text-center text-md-left">
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="col-md-6">
                    <h2 className="font-weight-bold">{homeData.feature.part1.head}</h2>
                    <p className="my-4">{homeData.feature.part1.message}<br/>{homeData.feature.part1.detail}</p>
                    <a href={"/" + language + "/" + homeData.feature.part1.url} className="btn my-4 font-weight-bold atlas-cta cta-blue">{homeData.feature.part1.button}</a>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className="col-md-6 align-self-center">
                    <img src="/static/img/safe-kid.jpg" alt="Take a look inside" className="mx-auto d-block" />
                </div>
            </div>
        </div>
    </div>

    <div className="jumbotron jumbotron-fluid feature" id="feature-mid">
        <div className="container">
            <div className="row justify-content-between text-center text-md-left">
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className="col-md-6 flex-md-last">
                    <h2 className="font-weight-bold">{homeData.feature.part2.head}</h2>
                    <p className="my-4">{homeData.feature.part2.message}<br/>{homeData.feature.part2.detail}</p>
                    <a href={"/" + language + "/" + homeData.feature.part2.url} className="btn my-4 font-weight-bold atlas-cta cta-blue">{homeData.feature.part2.button}</a>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" className="col-md-6 align-self-center flex-md-first">
                    <img src="/static/img/kid-focus.jpg" alt="Safe and reliable" className="mx-auto d-block"/>
                </div>
            </div>
        </div>
    </div>

    <div className="container my-5 py-2" id="price-table">
        <h2 className="text-center font-weight-bold d-block mb-3"><a href="#price-table">{homeData.payment.title}</a></h2>
        {/* <div className="toggle d-flex justify-content-center">
            <div className="toggle-main d-flex align-items-center">
                <div><span id="monthly">{homeData.payment.monthly}</span> </div>
                <div className="toggle-btn ml-3 mr-3 mt-3">
                    <input type="checkbox" className="switch" id="checkbox" />
                    <label className="sub" id="sub" htmlFor="checkbox">
                    <div className="circle"></div>
                    </label>
                </div>
                <div> <span id="yearly">{homeData.payment.yearly}</span></div>
            </div>
        </div> */}
        <div className="row">
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center py-4 mt-5">
                <h4 className="my-4">{homeData.payment.free.type}</h4>
                <p className="font-weight-bold"><span className="display-4 font-weight-bold">{homeData.payment.free.price}</span></p>
                <p className='font-weight-bold'>(<span id='free-period'>{homeData.payment.monthly}</span>)</p>
                <ul className="list-unstyled">
                    <li>{homeData.payment.free.service1}</li>
                    <li>{homeData.payment.free.service2}</li>
                    <li>{homeData.payment.free.service3}</li>
                    <li>{homeData.payment.free.service4}</li>
                    <li>{homeData.payment.free.service5}</li>
                    <li>{homeData.payment.free.service6}</li>
                </ul>
                <a href={externalUrls.SignUp} className="btn my-4 font-weight-bold atlas-cta cta-ghost">{homeData.payment.free.button}</a>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center py-4 mt-5 rounded" id="price-table__premium">
            <h4 className="my-4">{homeData.payment.standard.type}</h4>
                <p className="font-weight-bold"><span id="standard-price" className="display-4 font-weight-bold">{homeData.payment.standard.price}</span></p>
                <p className='font-weight-bold'>(<span id='standard-period'>{homeData.payment.monthly}</span>)</p>
                <ul className="list-unstyled">
                    <li>{homeData.payment.standard.service1}</li>
                    <li>{homeData.payment.standard.service2}</li>
                    <li>{homeData.payment.standard.service3}</li>
                    <li>{homeData.payment.standard.service4}</li>
                    <li>{homeData.payment.standard.service5}</li>
                    <li>{homeData.payment.standard.service6}</li>
                </ul>
                <a href={externalUrls.SignUp} target="_blank" className="btn my-4 font-weight-bold atlas-cta cta-green">{homeData.payment.standard.button}</a>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" className="col-md-4 text-center py-4 mt-5">
            <h4 className="my-4">{homeData.payment.premium.type}</h4>
                <p className="font-weight-bold"><span id="preminum-price" className="display-4 font-weight-bold">{homeData.payment.premium.price}</span></p>
                <p className='font-weight-bold'>(<span id='preminum-period'>{homeData.payment.monthly}</span>)</p>
                <ul className="list-unstyled">
                    <li>{homeData.payment.premium.service1}</li>
                    <li>{homeData.payment.premium.service2}</li>
                    <li>{homeData.payment.premium.service3}</li>
                    <li>{homeData.payment.premium.service4}</li>
                    <li>{homeData.payment.premium.service5}</li>
                    <li>{homeData.payment.premium.service6}</li>
                </ul>
                <a href={externalUrls.SignUp} target="_blank" className="btn my-4 font-weight-bold atlas-cta cta-ghost">{homeData.payment.premium.button}</a>
            </div>
        </div>
    </div>

    <div className="jumbotron jumbotron-fluid" id="contact">
        <div className="container my-5">
            <div className="row justify-content-between">
                <div className="col-md-6 text-white">
                    <h2 className="font-weight-bold">{homeData.footer.title}</h2>
                    <p className="my-4">
                        {homeData.footer.part1}<br/>{homeData.footer.part2}
                    </p>
                    <ul className="list-unstyled">
                        <li>{homeData.footer.part3} : {homeData.footer.company}</li>
                        <li>{homeData.footer.part4} : {homeData.footer.taxcode}</li>
                        <li>{homeData.footer.part5} : {homeData.footer.address}</li>
                        <li>{homeData.footer.part6} : {homeData.footer.email}</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <form>
                    	<div className="row">
	                        <div className="form-group col-md-6">
	                            <label htmlFor="name">{homeData.submit.name}</label>
	                            <input type="name" className="form-control" id="name" />
	                        </div>
	                        <div className="form-group col-md-6">
	                            <label htmlFor="Email">{homeData.submit.email}</label>
	                            <input type="email" className="form-control" id="email" />
	                        </div>
	                    </div>
	                    <div className="form-group">
	                        <label htmlFor="message">{homeData.submit.message}</label>
	                        <textarea className="form-control" id="message" rows="3"></textarea>
	                    </div>
                        <button type="submit" className="btn font-weight-bold atlas-cta atlas-cta-wide cta-green my-3" id="gocontact">{homeData.submit.button}</button>
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
                    Copyright © 2021-2024 SafeWeb.
                    <br/>
                    <a href={"/" + language + "/privacy-policy/"}>Privacy Policy</a>, <a href={"/" + language + "/eula/"}>EULA</a>
                </div>
                <div className="col-md-6 align-self-center text-center text-md-right my-2" id="social-media">
                    <a href="https://www.facebook.com/groups/safewebapp" className="d-inline-block text-center ml-2">
                        <i className="fa-solid fa-user-group"></i>
                    </a>
                    <a href="https://www.facebook.com/safeweb.app.vn" className="d-inline-block text-center ml-2">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://x.com/SafeWeb_app" className="d-inline-block text-center ml-2">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UC9t4hpAS5jSzPfD2JIIEvrw" className="d-inline-block text-center ml-2">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="mailto:qa@safeweb.app" className="d-inline-block text-center ml-2">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export async function getStaticPaths() {
	const paths = getAllLanguageSlugs();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
    const fs = require('fs');
    const path = require('path');
    const matter = require("gray-matter");
	const lang = getLanguage(params.lang);

    const filepath = path.join(process.cwd(),"src", "locales", lang, "index.md");
    const text = fs.readFileSync(filepath, "utf8");
    const homepageData = matter(text);
    
    const ENV = require('../../../env.json');
    const externalUrls = {
        "SignIn": ENV.SIGN_IN_URL,
        "SignUp": ENV.SIGN_UP_URL
    };

    return {
		props: {
            language: lang,
            homeData: homepageData.data,
            externalUrls: externalUrls,
		},
	};
}

export default IndexPage


