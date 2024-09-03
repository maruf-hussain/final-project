import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
   
    return (
        <section>
           <SectionTitle 
             subheading={"Check it out"}
             heading={"From Our Menu"}>
             </SectionTitle>
             <div className="grid md:grid-cols-2 gap-12">
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
             </div>
             <div className="text-center">
             <Link to='/order/salad'> <button className="btn btn-outline mb-5 border-black text-black mt-4 border-0 border-b-4 ">Order Now</button></Link>
          </div>
        </section>
    );
};

export default PopularMenu;