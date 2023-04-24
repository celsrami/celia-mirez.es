import Carousel from "./Carousel";
// Imagenes importadas
import ImgOne from "../../../images/mariane1.jpg";
import ImgTwo from "../../../images/img22.jpg";
import ImgThree from "../../../images/img3.jpg";
import item4 from "../../../images/pattermagic.jpg";
import item3 from "../../../images/chaqueta.jpg";
import item2 from "../../../images/Cerámica.jpeg";
import "../../../styles/layout/Home.scss";

const Home = () => {
  const images = [ImgOne, ImgTwo, ImgThree];
  return (
    // contenedor padre
    <section className='container'>
      <Carousel images={images} interval={3000} />
      <div className='container__item2'>
        <img className='container__img' src={item2} alt='' />
      </div>
      <div className='container__item3'>
        <img className='container__img' src={item3} alt='' />
      </div>
      <div className='container__item4'>
        <img className='container__img' src={item4} alt='' />
      </div>
    </section>
  );
};
export default Home;
