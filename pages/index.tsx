import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faGoogle } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  
  return (  
    <>
    <Head>
      <title>Home</title>
    </Head>
    <div>
      <h1>Home</h1>
      <p>Welcome home to the best website ever</p>
      <FontAwesomeIcon icon={faGoogle} size="2xl" />
      


      <Link href={'/about'}>About</Link>
      <Link href={'/login'}>Login</Link>
      <Link href={'/contact'}>Contact</Link>
      <Link href={'/dira'}>Dira</Link>
    </div>
    </>
  );
}
 
export default Home;

function iconToSVG(faGoogle: IconDefinition, arg1: { height: number; }) {
  throw new Error("Function not implemented.");
}
