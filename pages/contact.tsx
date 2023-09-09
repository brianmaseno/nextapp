const Contact = () => {
    return (  
        <>

<div className="contactUs">
    <div className="title">
      <h2>Get In Touch</h2>
    </div>
    <div className="box">
      

      <div className="contact form">
        <h3>Send a Message</h3>
        <form>
          <div className="formBox"> 
            <div className="row50">
              <div className="inputBox">
                <span>First Name</span>
                <input type="text" placeholder="Daltone"></input>
              </div>
              <div className="inputBox">
                <span>Last Name</span>
                <input type="text" placeholder="Otieno"></input>
              </div>
            </div>
            <div className="row50">
              <div className="inputBox">
                <span>Email</span>
                <input type="text" placeholder="daltoneotieno@gmail.com"></input>
              </div>
              <div className="inputBox">
                <span>Phone</span>
                <input type="text" placeholder="+254 746 999 900"></input>
              </div>
            </div>

            <div className="row100">
              <div className="inputBox">
                <span>Message</span>
                <textarea placeholder="Write your message here..."></textarea>
              </div>
            </div>
            
            <div className="row100">
              <div className="inputBox">
                <input type="submit" value="Send"></input>
              </div>
              <a href="DiraAIfarm.html">Back</a>
            </div>

          </div>
        </form>
      </div>
      
      <div className="contact info">
        <h3>Contact Info</h3>
        <div className="infoBox">
          <div>
            {/* <span><ion-icon name="location"></ion-icon></span> */}
            <p>Chandaria Innovation and Incubation centre - Kenyatta University, Nairobi <br />Kenya</p>
          </div>
          <div>
            {/* <span><ion-icon name="mail"></ion-icon></span> */}
            <a href="mailto:info@dirafarm@gmail.com">info@dirafarm@gmail.com</a>
          </div>
          <div>
            {/* <span><ion-icon name="call"></ion-icon></span> */}
            <a href="tel:+254746999900">+254 746 999 900</a>
          </div>
        </div>
        
        {/* <ul className="sci">
          <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
        </ul> */}
      </div>
      <br/>
      
      <div className="contact map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.969126916468!2d36.93415797382441!3d-1.1821486355187836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f78ac09fe1d%3A0x4ccb672abfe3ea40!2sChandaria%20Business%20Innovation%20And%20Incubation!5e0!3m2!1sen!2ske!4v1688213915484!5m2!1sen!2ske"  height={1000} width={400} loading="lazy" ></iframe>
      </div>
    </div>
  </div>

        </>
    );
}
 
export default Contact;