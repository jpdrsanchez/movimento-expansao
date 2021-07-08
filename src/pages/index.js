import { useEffect } from 'react';
import HomeBandeiras from '../components/HomeBandeiras';
import HomeBlog from '../components/HomeBlog/HomeBlog';
import HomeConselho from '../components/HomeConselho/HomeConselho';
import HomeContact from '../components/HomeContact';
import HomeManifesto from '../components/HomeManifesto/HomeManifesto';
import Slide from '../components/HomeSlide/Slide';
import HomeSobre from '../components/HomeSobre';
import HomeVideos from '../components/HomeVideos/HomeVideos';
import VideoModal from '../components/HomeVideos/VideoModal';
import useModal from '../hooks/useModal';

const Home = () => {
  const { open } = useModal();

  return (
    <main>
      <Slide />
      <HomeManifesto />
      <HomeSobre />
      <HomeConselho />
      <HomeBandeiras />
      <HomeVideos />
      {/* <HomeBlog /> */}
      <HomeContact />
      {open && <VideoModal />}
    </main>
  );
};

export default Home;
