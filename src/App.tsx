import Category from "./components/Category"
import Collection from "./components/Collection"
import Comment from "./components/Comment"
import ContactBanner from "./components/ContactBanner"
import Deal from "./components/Deal"
import Fellow from "./components/Fellow"
import Flash from "./components/Flash"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Post from "./components/Post"
import Question from "./components/Question"
import Subscribe from "./components/Subscribe"

const App = () => {
  return (
    <div>
      <ContactBanner />
      <NavBar />
      <Hero />
      <Category />
      <Collection />
      <Flash />
      <Deal />
      <Comment />
      <Post />
      <Fellow />
      <Question />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App