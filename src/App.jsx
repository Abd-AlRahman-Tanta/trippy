import { Route, Routes } from "react-router"
import Nav from "./components/Nav/Nav"
import { FaBars, FaBehance, FaFacebook, FaHome, FaInstagram, FaTwitter } from "react-icons/fa"
import { IoIosInformationCircle, IoMdContact } from "react-icons/io"
import { MdOutlineMedicalServices } from "react-icons/md"
import Hero from "./components/Hero/Hero"
import Titles from "./components/Titles/Titles"
import Descripton from "./components/Description/Descripton"
import HomeSection1 from "./components/HomeSection1/HomeSection1"
import HomeSection2 from "./components/HomeSection2/HomeSection2"
import Cards from "./components/Cards/Cards"
import Footer from "./components/Footer/Footer"
import Social from "./components/Social/Social"
import FooterColumns from "./components/FooterColumns/FooterColumns"
import AboutSection from "./components/AboutSection/AboutSection"
import Form from "./components/Form/Form"


function App() {
  return (
    <div className="container">
      <header>
        <Nav image={"Trippy"} items={[
          { url: "/", title: "Home", icon: <FaHome /> },
          { url: "/about", title: "About", icon: <IoIosInformationCircle /> },
          { url: "/services", title: "Services", icon: <MdOutlineMedicalServices /> },
          { url: "/contact", title: "Contact", icon: <IoMdContact /> }]}
          btn={"SignIn"}
          bars={<FaBars />}
        />
        <Routes>
          <Route path="/" element={<Hero image="/public/assets/imgs/homeHero.jpg" title="Your Journey Your Story" desc="Choose Your Favourite Destination." btn="Travel Now" />} />
          <Route path="/about" element={<Hero image="/public/assets/imgs/aboutHero.jpg" title="About" />} />
          <Route path="/services" element={<Hero image="/public/assets/imgs/servicesHero.jpg" title="Services" />} />
          <Route path="/contact" element={<Hero image="/public/assets/imgs/contactAndSignHero.jpg" title="Contact" />} />
          <Route path="/signin" element={<Hero image="/public/assets/imgs/contactAndSignHero.jpg" title="Sign Up" />} />
          <Route path="/login" element={<Hero image="/public/assets/imgs/log.jpg" title="Log In" />} />
        </Routes>
      </header>
      <Routes>
        <Route path="/" element={
          <main>
            <HomeSection1>
              <Titles items=
              {[
                { head: "Popular Destinations", para: "Tours dive you the opportunity to see a lot, within a time frame." }
              ]} />
              <Descripton images=
              {["/public/assets/imgs/p3.jpg", "/public/assets/imgs/p5.jpg"]}
              title={"Mt. Daguldul, Batangas"} 
              para={"One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"} />
              <Descripton rev={true} 
              images={["/public/assets/imgs/p2.jpg", "/public/assets/imgs/p1.jpg"]} 
              title={"Taal Volcano, Batangas"} 
              para={"A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests. In some parts, the greenery is total"} />
            </HomeSection1>
            <HomeSection2>
              <Titles items=
              {[
                { head: "Recent Trips", para: "You can discover unique destination using Google Maps." }
              ]} />
              <Cards items=
              {[
                { image: "/public/assets/imgs/p3.jpg", title: "Trip in Indonesia", desc: "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea" }, 
                { image: "/public/assets/imgs/p5.jpg", title: "Trip in Malaysia", desc: "Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia" }, 
                { image: "/public/assets/imgs/p4.jpg", title: "Trip in France", desc: "France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans." }
              ]} />
            </HomeSection2>
          </main>
        } />
        <Route path = "/about" element={
          <AboutSection>
            <Titles items=
            {[
              {head : "Our History" , 
              para : "Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. rippy .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence."} ,
              {head : "Our Mission" , 
              para : "Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness."} , 
              {head : "Our Vision" , 
              para : "To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients."}
            ]} />
          </AboutSection>
        }/>
        <Route path = "/services" element = {
          <main>
            <HomeSection2>
              <Titles items=
              {[
                { head: "Recent Trips", para: "You can discover unique destination using Google Maps." }
              ]} />
              <Cards items=
              {[
                { image: "/public/assets/imgs/p3.jpg", title: "Trip in Indonesia", desc: "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea" }, 
                { image: "/public/assets/imgs/p5.jpg", title: "Trip in Malaysia", desc: "Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia" }, 
                { image: "/public/assets/imgs/p4.jpg", title: "Trip in France", desc: "France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans." }
              ]} />
            </HomeSection2>
          </main>
        }/>
        <Route path = "/contact" element=
        {
          <main>
            <Form title = "Send a message to us!" inputs=
            {
              [
                {
                  type : "text" , 
                  placeholder : "Name" , 
                  name : "name"
                } ,
                {
                  type : "email" , 
                  placeholder : "Email" , 
                  name : "Email"
                } ,
                {
                  type : "password" , 
                  placeholder : "Subject" , 
                  name : "pass"
                }
              ]
            } 
            textArea={"Message"}
            submit={"Send Message"}/>
          </main>
        }
        />
        <Route path = "/signin" element=
        {
          <main>
            <Form title = "Create an account" inputs=
            {
              [
                {
                  type : "text" , 
                  placeholder : "Your Name" , 
                  name : "name"
                } ,
                {
                  type : "email" , 
                  placeholder : "Your Email" , 
                  name : "Email"
                } ,
                {
                  type : "password" , 
                  placeholder : "Your Password" , 
                  name : "pass"
                } ,
                {
                  type : "password" , 
                  placeholder : "Your Password" , 
                  name : "pass repeat"
                }
              ]
            } 
            submit={"Register"}
            log={{link : "/login" , text : "Have already an account?"}}/>
          </main>
        }
        />
        <Route path = "/login" element=
        {
          <main>
            <Form title = "Log in my account" inputs=
            {
              [
                {
                  type : "email" , 
                  placeholder : "Your Email" , 
                  name : "Email"
                } ,
                {
                  type : "password" , 
                  placeholder : "Your Password" , 
                  name : "pass"
                } ,
                {
                  type : "password" , 
                  placeholder : "Your Password" , 
                  name : "pass repeat"
                }
              ]
            } 
            submit={"Log in"}
            />
          </main>
        }
        />
      </Routes>
      <Footer>
        <div className="up">
          <Titles items=
          {[
            { head: "Trippy", para: "Choose your favourite destination." }
          ]} />
          <Social icons=
          {[
            { link: "https://www.facebook.com", icn: <FaFacebook /> },
            { link: "https://www.instagram.com", icn: <FaInstagram /> }, 
            { link: "https://www.behanced.com", icn: <FaBehance /> }, 
            { link: "https://www.twitter.com", icn: <FaTwitter /> }
            ]} />
        </div>
        <FooterColumns items=
          {[
            {
              title: "Project",
              lnks : 
              [
                {lnk : "#" , text : "ChangeLog"} , 
                {lnk : "#" , text : "Status"} , 
                {lnk : "#" , text : "Licencse"} , 
                {lnk : "#" , text : "All Versions"}  
              ]
            } , 
            {
              title: "Comunity",
              lnks : 
              [
                {lnk : "#" , text : "Github"} , 
                {lnk : "#" , text : "Issues"} , 
                {lnk : "#" , text : "Project"} , 
                {lnk : "#" , text : "Twitter"}  
              ]
            } , 
            {
              title: "Help",
              lnks : 
              [
                {lnk : "#" , text : "Support"} , 
                {lnk : "#" , text : "Contact Us"} , 
                {lnk : "#" , text : "TroubleShoutng"}
              ]
            } ,
            {
              title: "Others",
              lnks : 
              [
                {lnk : "#" , text : "Terms Of Services"} , 
                {lnk : "#" , text : "Privacy Polices"} , 
                {lnk : "#" , text : "Licensce"}
              ]
            }
          ]}
        />
      </Footer>
    </div>
  )
}

export default App
