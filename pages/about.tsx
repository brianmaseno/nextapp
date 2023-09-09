import Head from 'next/head'
import Link from 'next/link'

const About = () => {
    return (  
        <>
        <Head>
            <title>About</title>
        </Head>
        <div>
            
            <h1>About</h1>
            <p>How may we help you</p>
            <Link href={'/'}>Home</Link>

            <div className='hero'>
            <div className="heading">
                <h1>About Us</h1>
                </div>

 <div className="container2">
      <div className="hero-content">
        <h2>DiraFarm: The farmers' virtual assistant.</h2>
        <p>Dira Farm is a cutting-edge virtual assistant for farmers, revolutionizing the agricultural industry through advanced AI technology. As a comprehensive platform, Dira Farm empowers farmers by providing them with a wide range of indispensable tools and resources. </p>

         <p> By subscribing to Dira Farm, farmers gain access to AI-generated market analysis, enabling them to make informed decisions about their produce. They receive real-time insights into market trends, demand patterns, and pricing dynamics, empowering them to optimize their sales and maximize profitability. 
          
          <br></br> Weather updates play a crucial role in agricultural planning, and Dira Farm ensures that farmers are well-equipped with accurate and timely information. Farmers can rely on the platform to receive weather forecasts tailored to their specific regions, enabling them to plan their farming activities effectively. <br></br>
          
          <br></br>One of the standout features of Dira Farm is the "Dira Farm Diagnosis" functionality. Through this innovative tool, farmers can capture images of their crops using their smartphones or upload existing photos. Dira Farm's AI-powered model analyzes the images and identifies potential diseases affecting the crops. Farmers receive comprehensive diagnoses, including the name of the disease, recommended treatment procedures, information on available medicines, and guidance on where to obtain them. Additionally, the platform connects farmers with agricultural experts who can provide further assistance and guidance. <br></br>
          
          <br></br>To further support farmers, Dira Farm offers a call center staffed by agricultural experts. Farmers can seek instant help by SMS or phone calls, receiving valuable advice and solutions to their farming queries. Additionally, Dira Farm provides regular updates and agricultural tips covering various aspects of crop and livestock farming, ensuring that farmers stay well-informed and equipped with the latest knowledge. <br></br>

          <br></br>In efforts to eradicate poverty and hunger, Dira farm also enables users and well wishers to  little money to support vulnerable communities in Africa which are affected by disasters such as floods and drought. This money acts as a charity to these families to enable them make ends meet and the surplus is used in sponsoring outstanding, vulnerable and bright students through the <br></br>
          
          <br></br> With Dira Farm, farmers can embrace technology and leverage AI advancements to enhance their productivity, profitability, and overall success. By providing a comprehensive suite of tools, resources, and expert support, Dira Farm empowers farmers to thrive in the dynamic and challenging agricultural landscape of the 21st century.<br></br></p> 
          
          <a href="/"><button className="cta-button">Learn More</button></a>

      </div>
      <div className="hero-image">
        
      </div>
    </div>

            </div>
        </div>
        </>
    );
}
 
export default About;