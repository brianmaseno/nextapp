import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Dira = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    return ( 
        <>
            <div className="header">
                        <nav className="header-nav navbar navbar-default navbar-fixed-top">
                            <div className="container-fluid">
                    
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#ishamba-navbar" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="header-brand">
                        <a href="#promo-video">
                            <Image src={'/DIRA_AI_FARM-removebg-preview.png' } height={30} width={30} alt={'logo'} style={{width:"170px",height:"170px"} }>
                            </Image></a>
                        <a className="header-brand-text" href="#promo-video">DiraFarm</a>
                        
                    </div>
                    </div>

                   
                    <div className="header-navbar collapse navbar-collapse" >
                    <ul className="header-navbar-nav nav navbar-nav">
                        <li className="header-navbar-active">
                        <a href={'/'}>Home</a>
                        </li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="#plans-and-pricing">Plans</a></li>
                        <li className="header-navbar-logo">
                        <a href="/#promo-video">
                        <Image src={'/DIRA_AI_FARM-removebg-preview.png' } height={30} width={530} alt={'logo'}
                        style={{width:"170px",height:"170px"} }
                        ></Image>
                        </a>
                        </li>
                        <li><a href="#call-to-action">Sign-up</a></li>
                        
                

                <li className="">
                    <a href="/partners/">Partners</a>
                </li>

                <li className="">
                    <a href="contact.html">Contact Us</a>
                </li>

                <li className="">
                    <a href="/blog/">Blog</a>
                </li>


                    </ul>
                    </div>
                </div>
                </nav>
            </div>


            <div className ="js-home content-container hero"  >
            <div className="container">
            <div className="row hero-row">
                <div className="col-xs-12 col-md-7 responsive-object">
                    <iframe width="356" height="200" src="https://www.youtube.com/embed/QeEEy1QGXzU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="hero-strap-line col-xs-12 col-sm-8 col-sm-offset-2 col-md-4">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1 className="hero-strap-line-header">DiraFarm: The farmers' virtual assistant.</h1>
                            <div className="hero-strap-line-paragraph">
                                <p data-block-key="avznb">DiraFarm uses AI technology to help farmers improve their farms and get better yields. Sign up to DiraFarm and turn your farm into a profitable business of the 21st century.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            </div>

            <div className="js-home content-container mod-services">
                    <div className="container">
                    <div className="heading">
                        <hr className="hr-heading"></hr>
                        <h1>Our Services</h1>
                        <div className="heading-subheader">
                            <p data-block-key="xsth7">At Dira Farm, we are revolutionizing the agricultural industry by providing farmers with cutting-edge AI-powered solutions. Our comprehensive range of services is designed to empower farmers, increase productivity, and drive sustainable growth.</p>
                        </div>
                    </div>
                    </div>

                    <div className="row card-row" data-module="card">

    <div className="col-xs-12 col-sm-6 col-md-4 card-column">

       
         <div className="card">
             <div className="card-header">
                 <div className="row">
                     <div className="col-xs-12 col-md-8">
                         <h2 className="card-header-title mod-services">Dira Farm Diagnosis</h2>
                     </div>
                     <div className="col-xs-12 col-md-4">
                        <Image src={"/Market_Prices_RnZUMi8.2e16d0ba.fill-75x75.png"} alt='logo'width={130} height={139} style={{width:"200px",height:"200px"}}></Image>
                         {/* <img alt="call centre" height="75" src="/Market_Prices_RnZUMi8.2e16d0ba.fill-75x75.png" width="75"></img> */}
                     </div>
                 </div>
             </div>
    
             
              <div className="card-content">
                  <p data-block-key="w6bdu">Sign up to Dira Farm Diagnosis and get to leverage the use AI in diagnosimg your farm crop diseases</p>
                  <div className="row">
                      <div className="col-xs-12 card-action">
                          <a  href="javascript:void(0)" className="js-btn-show" data-rel="1">read more</a>
                      </div>
                  </div>
              </div>
    
             
             <div className="card-reveal" data-rel="1">
                 <button type="button" className="close" data-rel="1" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                 <p data-block-key="zxet2">Dira Farm is an advanced AI-based solution that enables farmers to capture and analyze images of their crops through a user-friendly mobile application or web interface. The AI model embedded in Dira Farm is trained on vast datasets of crop diseases, pests, and nutrient deficiencies. By leveraging this technology, Dira Farm can quickly identify the type of crop pest infestation and offer meaningful recommendations to address the issue promptly.
                    <a href="#plans-and-pricing">Click here </a>for more information on Dira Farm Plans.</p>
             </div>
    
         </div>
      </div>
      <div className="col-xs-12 col-sm-6 col-md-4 card-column">

       
         <div className="card">
             <div className="card-header">
                 <div className="row">
                     <div className="col-xs-12 col-md-8">
                         <h2 className="card-header-title mod-services">Agri Tips</h2>
                     </div>
                     <div className="col-xs-12 col-md-4">
                        <Image src="/Agri_Tips_3VrV7IE.2e16d0ba.fill-75x75.png" height={30} width={530} alt={'logo'} style={{width:"200px",height:"200px"}}></Image>
                         {/* <img alt="Market Prices" height="75" src="/Agri_Tips_3VrV7IE.2e16d0ba.fill-75x75.png" width="75"></img> */}
                     </div>
                 </div>
             </div>
    
            
              <div className="card-content">
                  <p data-block-key="hl1iq">Get weekly crop market prices on your phone from major markets countrywide.</p>
                  <div className="row">
                      <div className="col-xs-12 card-action">
                          <a  href="javascript:void(0)" className="js-btn-show" data-rel="5">read more</a>
                      </div>
                  </div>
              </div>
    
             
             <div className="card-reveal" data-rel="5">
                 <button type="button" className="close" data-rel="5" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                 <p data-block-key="6y463">Want to avoid the hassle of negotiating with brokers and middlemen? Let Dira Farm Market Analysis guide you on when and where to sell your produce and, how much to sell it for.</p>
             </div>
    
         </div>
      </div>
     
      <div className="col-xs-12 col-sm-6 col-md-4 card-column">

       
         <div className="card">
             <div className="card-header">
                 <div className="row">
                     <div className="col-xs-12 col-md-8">
                         <h2 className="card-header-title mod-services">Donate to Dira Farm</h2>
                     </div>
                     <div className="col-xs-12 col-md-4">
                        <Image src={"/donate.png"} alt='logo' height="75" width="75" style={{width:"200px",height:"200px"}}> 

                        </Image>
                         {/* <img alt="agri_tips" height="75" src="/donate.png" width="75"></img> */}
                     </div>
                 </div>
             </div>
    
            
              <div className="card-content">
                  <p data-block-key="bwhk8">Farmers can now register with Dira Farm and make deals with their potential buyers directly without involving any third party. Register today and get access to sell your products through our well organized market at your finger tip.</p>
                  <div className="row">
                      <div className="col-xs-12 card-action">
                          <a  href="javascript:void(0)" className="js-btn-show" data-rel="3">read more</a>
                      </div>
                  </div>
              </div>
    
             
             <div className="card-reveal" data-rel="3">
                 <button type="button" className="close" data-rel="3" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                 <p data-block-key="fv6we">Dira Farm Market gives the opportunty to explore the digital space and the farming of the 21st century by making sure that your agribusiness reach the largest audience within and outside the country.</p>
             </div>
    
         </div>
      </div>
    
     

        </div>

            </div>

            <div className="js-home content-container mod-plans-pricing">
            <div className="container">
            <div className="heading mod-plans-pricing">
                <hr className="hr-heading"></hr>
                <h1>Plans and Pricing</h1>
            </div>

            

<div className="container">
    <div className="row content-container-row">
        
            <div className="col-xs-12 col-sm-6 col-md-4 col-md-offset-2">
                <div className="panel panel-premium">

    

    <div className="panel-heading">
        <h3 className="panel-title">
            Premium
        </h3>
    </div>
    <div className="panel-body">
        <div className="panel-body-price">
            
            <h2 data-block-key="o6rz2">KSH 1,000 per season</h2><p data-block-key="988w3"></p>
        </div>
        {/* <table className="table">
             
                 <tr className="">
                     <td className="panel-table-premium">
                         <p data-block-key="ywf6n">Unlimitted access to Dira Farm AI Diagnosis tool<br/></p>
                     </td>
                 </tr>
             
                 <tr className="active">
                     <td className="panel-table-premium">
                         <p data-block-key="ei5tu">Agri tips on up to 5 crops<br/></p>
                     </td>
                 </tr>
             
                 <tr className="">
                     <td className="panel-table-premium">
                         <p data-block-key="5xvc7">Access to Dira Farm call centre of experts</p>
                     </td>
                 </tr>
             
                 <tr className="active">
                     <td className="panel-table-premium">
                         <p data-block-key="jfhl1">Alerts on farmer events in your area<br/></p>
                     </td>
                 </tr>
             
                 <tr className="">
                     <td className="panel-table-premium">
                         <p data-block-key="cujuh">Occasional SMS from Dira Farm partners<br/></p>
                     </td>
                 </tr>
             
        </table> */}

<div className="panel panel-premium">
      <div className="panel-heading">
        <h3 className="panel-title">Premium</h3>
      </div>
      <div className="panel-body">
        <div className="panel-body-price">
          <h2>KSH 1,000 per season</h2>
          <p></p>
        </div>

        <p>Unlimited access to Dira Farm AI Diagnosis tool</p>
        <p>Agri tips on up to 5 crops</p>
        <p>Access to Dira Farm call centre of experts</p>
        <p>Alerts on farmer events in your area</p>
        <p>Occasional SMS from Dira Farm partners</p>

        
      </div>
      <div className="panel-footer">
        <a
          href="#"
          className="btn btn-block mod-price-plan-premium"
          data-toggle="modal"
          data-target="#payment-modal"
        >
          Select
        </a>
      </div>
    </div>







    </div>
    <div className="panel-footer">
        
            <a href="#" className="btn btn-block mod-price-plan-premium" data-toggle="modal" data-target="#payment-modal">Select</a>
        
    </div>
</div>

            </div>
        
            <div className="col-xs-12 col-sm-6 col-md-4 ">
                <div className="panel panel-free">

    

    <div className="panel-heading">
        <h3 className="panel-title">
            Economy
        </h3>
    </div>
    <div className="panel-body">
        <div className="panel-body-price">
            
            <p data-block-key="xfpcf">KSH 600 per season</p>
        </div>
        {/* <table className="table">

            <tr className="" >
                <td className="">
                    <p data-block-key="hgjex"></p><p data-block-key="1swed">Access to Dira Farm AI Diagnosis for 2 months</p><p data-block-key="uodpd"></p>
                </td>
            </tr>
             
                 <tr className="">
                     <td className="">
                         <p data-block-key="hgjex"></p><p data-block-key="1swed">Access to Dira Farm call centre of experts</p><p data-block-key="uodpd"></p>
                     </td>
                 </tr>
             
                 <tr className="active">
                     <td className="">
                         <p data-block-key="z607z">Agri tips on up to 4 crops</p>
                     </td>
                 </tr>
             
                 <tr className="">
                     <td className="">
                         <p data-block-key="r4qfx">Alerts on farmer events in your area</p>
                     </td>
                 </tr>
             
                 <tr className="">
                     <td className="">
                         <p data-block-key="l9vdi">Occasional SMS from Dira Farm partners</p>
                     </td>
                 </tr>
             
        </table> */}
    <div className="panel panel-free">
      <div className="panel-heading">
        <h3 className="panel-title">Economy</h3>
      </div>
      <div className="panel-body">
        <div className="panel-body-price">
          <p>KSH 600 per season</p>
        </div>
        <p>Access to Dira Farm AI Diagnosis for 2 months</p>
        <p>Access to Dira Farm call centre of experts</p>
        <p>Agri tips on up to 4 crops</p>
        <p>Alerts on farmer events in your area</p>
        <p>Occasional SMS from Dira Farm partners</p>


        {/* <table className="table">
          <tbody>
            <tr>Access to Dira Farm AI Diagnosis for 2 months</tr>
            <tr>Access to Dira Farm call centre of experts</tr>
            <tr>Agri tips on up to 4 crops</tr>
            <tr>Alerts on farmer events in your area</tr>
            <tr>Occasional SMS from Dira Farm partners</tr>
            
          </tbody>
        </table> */}
      </div>
      <div className="panel-footer">
        <a href="#call-to-action" className="btn btn-block mod-price-plan-free" role="button">
          Select
        </a>
      </div>
    </div>

    <p data-block-key="hgjex"></p><p data-block-key="1swed">Access to Dira Farm AI Diagnosis for 2 months</p><p data-block-key="uodpd"></p>
    <p data-block-key="hgjex"></p><p data-block-key="1swed">Access to Dira Farm call centre of experts</p><p data-block-key="uodpd"></p>
    <p data-block-key="z607z">Agri tips on up to 4 crops</p>
    <p data-block-key="r4qfx">Alerts on farmer events in your area</p>
    <p data-block-key="l9vdi">Occasional SMS from Dira Farm partners</p>

{/* <table className="table">
    <tbody>

<tr className="" >
    <td className="">
        <p data-block-key="hgjex"></p><p data-block-key="1swed">Access to Dira Farm AI Diagnosis for 2 months</p><p data-block-key="uodpd"></p>
    </td>
</tr>
 
     <tr className="">
         <td className="">
             <p data-block-key="hgjex"></p><p data-block-key="1swed">Access to Dira Farm call centre of experts</p><p data-block-key="uodpd"></p>
         </td>
     </tr>
 
     <tr className="active">
         <td className="">
             <p data-block-key="z607z">Agri tips on up to 4 crops</p>
         </td>
     </tr>
 
     <tr className="">
         <td className="">
             <p data-block-key="r4qfx">Alerts on farmer events in your area</p>
         </td>
     </tr>
 
     <tr className="">
         <td className="">
             <p data-block-key="l9vdi">Occasional SMS from Dira Farm partners</p>
         </td>
     </tr>
     </tbody>
 
</table> */}
    </div>
    <div className="panel-footer">
        
            <a href="#call-to-action" className="btn btn-block mod-price-plan-free" role="button">Select</a>
        
    </div>
</div>

            </div>
        
       
        <div className="modal fade" id="payment-modal"  role="dialog" aria-labelledby="payment-modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h2 className="modal-title">Subsribe to iShamba premium</h2>
                    </div>
                    <div className="modal-body">
                        <p data-block-key="byks4"><b>Payment Instructions</b></p><ol><li data-block-key="3o0m8">Go to<b> M-PESA</b> Menu</li><li data-block-key="5lwxm">Go to <b>Lipa na M-PESA</b></li><li data-block-key="48zzy">Go to <b>Buy Goods and Services</b></li><li data-block-key="udf3f">Under <b>Till number</b>, enter <b>889535</b></li><li data-block-key="iqi84">Under <b>Amount</b>, enter <b>800</b></li><li data-block-key="x5wn3">Enter <b>PIN</b> and confirm transaction</li></ol><p data-block-key="psbmv">Once you have completed the payment, we will call you back to complete your premium registration. <b>Please note that iShamba premium is only payable via Till number 889535</b>. Do not make payments via any other number</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>

            </div>

            <div className="js-home content-container mod-cta">

            <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-7 col-md-offset-2">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="card-header-title mod-cta">Subscribe to Dira Farm</h1>
                        </div>
                        <div className="card-content">
                            <p data-block-key="39nsl"></p><p data-block-key="u7amx">Once you subscribe, you will be able to access our services. You will receive Agri tips and weekly weather updates. You will also get access to our AI-powered Dira Farm Diagnosis, Market Analysis, Dira Market and our Call Centre staffed by our excellent agricultural experts, for the period of your subscription.</p><p data-block-key="vngqt"></p><p data-block-key="zqs2n"></p><p data-block-key="e5q69"></p><p data-block-key="4qsi2"></p><p data-block-key="y3337"></p>
                            <form className="form-inline" id="cta">
                                <input type="hidden" name="csrfmiddlewaretoken" value="eTNmVbXenu34CEshwYVBSIjrwZKTYm66Drp4ZTcssCHj6Syy7jIsDxRtck88PeF9"></input>
                                <div className="js-results"></div>
                                <div className="form-group mod-cta">
                                    <div className="inputBox">
                                        <input type="text" placeholder="Email"></input>
                                      </div>
                                      <div className="inputBox">
                                        <input type="password" placeholder="Password"></input>
                                      </div>
                                      <div className="inputBox">
                                        <input type="password" placeholder="Confirm password"></input>
                                      </div>
                                    {/* <tr><th></th><td> */}
                                        {/* <input type="text" name="phone" className="form-control mod-cta" placeholder="Enter your phone number" id="cta-phone" onChange="grecaptcha.execute()" required></input> */}
                                        <input type="text" name="phone" className="form-control mod-cta" placeholder="Enter your phone number" id="cta-phone"  required></input>
                                        {/* </td></tr> */}
{/* <tr><th></th><td> */}
    <input type="text" name="name" className="form-control mod-cta" placeholder="Enter your name" id="cta-name"  required></input>
    {/* </td></tr> */}

                                </div>
                                <div className="form-group mod-cta">
                                    <button className="btn btn-lg mod-cta"
                                           disabled={isButtonDisabled}
                                            id="user_signup"
                                            data-module="join"
                                            type="submit"
                                            data-action='submit'><a href="registration.html">Sign up</a></button>
                                            
                                </div>
                                <div className="g-recaptcha"
                                     data-size="invisible"
                                     data-sitekey="6LdoaTYbAAAAAEKyMUjOeX2PZNlVZNp6I0EV0hsq"
                                     data-callback="recaptcha_callback"></div>
                            </form>
                            <div className="disclaimer">
                                This site is protected by reCAPTCHA and the Google
                                <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                                <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>

            <footer>
            <div className="footer-container">
    <ul className="footer-logos">
      


    <li className="footer-logo-item">
        <a href="DiraAIfarm.html">
            <Image src={'/DIRA_AI_FARM-removebg-preview.png'} height={30} width={530} alt='logo' style={{width:"200px",height:"200px"}}></Image>
            {/* <img alt="ishamba logo" height="105" src="/DIRA_AI_FARM-removebg-preview.png" width="100"></img> */}
        </a>
    </li>

    <li className="footer-logo-item">
        <a href="DiraAIfarm.html">
            <Image src={'/DIRA_AI_FARM-removebg-preview.png'} height={30} width={530} alt='logo' style={{width:"200px",height:"200px"}}></Image>
            {/* <img alt="Mediae logo" height="105" src="/DIRA_AI_FARM-removebg-preview.png" width="100"></img> */}
        </a>
    </li>

    <li className="footer-logo-item">
        <a href="DiraAIfarm.html">
            <Image src={'/Agri_Tips_3VrV7IE.2e16d0ba.fill-75x75.png'} height={30} width={30} alt={"logo"} style={{width:"200px",height:"200px"}}>

            </Image>
            {/* <img alt="Shamba Shape Up logo" height="105" src="/DIRA_AI_FARM-removebg-preview.png" width="100"></img> */}
        </a>
    </li>


    </ul>
    <div className="row" data-module="tooltips">
    <div className="footer-social col-xs-12 col-sm-3 col-sm-offset-3">
      <h4>Stay connected</h4>
        <a className="footer-social-icon footer-social-icon-facebook" href="https://web.facebook.com/mcgiljovian.dalton" target="_blank"
            data-toggle="tooltip" title="facebook" data-placement="left">
            <i className="fa fa-facebook-square fa-3x"></i>
        </a>
        <a className="footer-social-icon footer-social-icon-twitter" href="https://twitter.com/dalton_o_n" target="_blank"
            data-toggle="tooltip" title="twitter" data-placement="left">
            <i className="fa fa-twitter-square fa-3x"></i>
        </a>
    </div>
    <div className="footer-contact col-xs-12 col-sm-5">
        <h4>Contact us</h4>
        <span className="footer-contact-phone">
          <i className="fa fa-phone-square"></i> <a href="contact.html">Talk to us</a>
        </span>
        <span className="footer-contact-email">
          <i className="fa fa-envelope"></i> dirafarm.com
        </span>
    </div>
  </div>
  <p className="footer-copyright">&copy; 2023 Dira Farm, All Rights Reserved.</p>
</div>
            </footer>




            





        </>
     );
}


  




 
export default Dira;