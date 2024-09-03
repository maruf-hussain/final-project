
const FoodCard = ({item}) => {
    const {name, price, recipe, image} = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Food" />
        </figure>
        <h3 className="bg-black text-yellow-400 absolute right-0 top-4 mr-6 px-2 rounded">${price}</h3>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-warning">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;