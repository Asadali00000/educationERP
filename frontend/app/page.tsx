import BottomBanner from "./component/BottomBanner";
import Features from "./component/Features";
import Footer from "./component/Footer";
import MainHome from "./component/MainHome";
import Navbar from "./component/Navbar";
export default function Home() {
  return (
  <div  >
	 <Navbar/>
	 <MainHome/>
	 <Features/>
	 <BottomBanner/>
	 <Footer/>
	</div>

  );
}
