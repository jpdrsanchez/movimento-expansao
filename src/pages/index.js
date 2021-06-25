import HomeBandeiras from '../components/HomeBandeiras';
import HomeBlog from '../components/HomeBlog/HomeBlog';
import HomeContact from '../components/HomeContact';
import HomeManifesto from '../components/HomeManifesto/HomeManifesto';
import Slide from '../components/HomeSlide/Slide';
import HomeSobre from '../components/HomeSobre';
import HomeVideos from '../components/HomeVideos/HomeVideos';

const Home = () => {
  return (
    <main>
      <Slide />
      <HomeManifesto />
      <HomeSobre />
      <HomeBandeiras />
      <HomeVideos />
      <HomeBlog />
      <HomeContact />
    </main>
  );
};

export default Home;
