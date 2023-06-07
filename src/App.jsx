import Banner from "./components/banner/banner";
import Category from "./components/category/category";
import Footer from "./components/footer/footer";
import Appbar from "./components/navbar/navbar";
import Trending from "./components/trending/trending";

function App() {
  return (
    <>
      <Appbar />
      <Banner />
      <Category />
      <Trending />
      <Footer />
    </>
  );
}

export default App;
