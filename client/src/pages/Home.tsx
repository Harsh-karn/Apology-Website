import HeroSection from '@/components/HeroSection';
import LetterSection from '@/components/LetterSection';
import PhotosSection from '@/components/PhotosSection';
import PromiseSection from '@/components/PromiseSection';
import FinalSection from '@/components/FinalSection';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>To My Love - An Apology From The Heart</title>
        <meta name="description" content="A heartfelt apology and message of love, expressing my deepest feelings and hopes for our future together." />
        <meta property="og:title" content="To My Love - An Apology From The Heart" />
        <meta property="og:description" content="A heartfelt apology and message of love, expressing my deepest feelings and hopes for our future together." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <main className="bg-primary-light font-poppins text-dark overflow-x-hidden">
        <AudioPlayer />
        <HeroSection />
        <LetterSection />
        <PhotosSection />
        <PromiseSection />
        <FinalSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
