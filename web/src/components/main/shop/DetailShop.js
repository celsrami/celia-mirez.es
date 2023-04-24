import "../../../styles/layout/DetailShop.scss";

import CarouselDetail from "./CarouselDetail";
const DetailShop = ({ productFound }) => {
  console.log(productFound);
  const images = [productFound.imageUrl, productFound.imageTwo];

  return (
    <section className='detail'>
      <p className='detail__title'>{productFound.name}</p>
      <div className='detail__div'>
        <CarouselDetail images={images} interval={3000} />
        {/* <img className='detail__img' src={productFound.imageUrl} alt='' /> */}
      </div>

      <p>{productFound.price} €</p>
      <p>
        descripción:
        {productFound.description}
      </p>
      <p> Tallas: {productFound.sizes}</p>
    </section>
  );
};

export default DetailShop;
