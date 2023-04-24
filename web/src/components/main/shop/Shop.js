import { Link } from "react-router-dom";
import "../../../styles/layout/Shop.scss";
const Shop = ({ dataFetch }) => {
  const renderList = () => {
    return dataFetch.map((obj) => {
      return (
        <li className='shop' key={obj.idProduct}>
          <Link className='shop__link' to={"/product-detail/" + obj.idProduct}>
            <div className='shop__div-img'>
              <img className='shop__img' src={obj.imageUrl} alt={obj.name} />
            </div>
            <section>
              <h1 className='shop__title'>{obj.name}</h1>
              <p>{obj.price} EUR</p>
            </section>
          </Link>
        </li>
      );
    });
  };
  return (
    <section className='shop'>
      <ul>{renderList()}</ul>
    </section>
  );
};

export default Shop;
