import "./Category.css";

const categories = [
    "Fresh",
    "Amazon MiniTV",
    "Sell",
    "Best Sellers",
    "Mobiles",
    "Todays Deals",
    "Prime",
    "Fashion",
    "Electronics",
  ];

const Category = () => {
    return (
        <div className="category-bar">
            <div className="category-items">
                {categories.map((elem) => {
                    return <p key={elem} className="category-item">{elem}</p>;
                })}
            </div>
        </div>
    );
}

export default Category;
