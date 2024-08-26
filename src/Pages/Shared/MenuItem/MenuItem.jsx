
const MenuItem = ({item}) => {
    const {name, price, recipe, image} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '200px 0px 200px 200px'}} className="w-[90px]" src={image}></img>
            <div>

            <h3 className="uppercase text-bold">{name}</h3>
            <p>{recipe}</p>
            <p className="text-yellow-500">{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;