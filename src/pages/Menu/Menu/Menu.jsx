import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu - Bistro Boss Restaurant</title>
      </Helmet>
      <h2>This is menu</h2>
      <Cover img={menuImg} title="our menu"></Cover>
    </div>
  );
};

export default Menu;
