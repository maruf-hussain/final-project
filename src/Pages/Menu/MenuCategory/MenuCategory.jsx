import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="py-10">
            {title && <Cover img={img} title={title}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-12 mt-12">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}> <button className="btn uppercase bg-yellow-500">Order Your Food</button>
            </Link>
        </div>
    );
};

export default MenuCategory;