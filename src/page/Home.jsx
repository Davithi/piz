import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";

function Home({ searchValue, setSearchValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}`:"";
    setIsLoading(true);
    let url = `https://63cd9652d4d47898e39be0db.mockapi.io/product?${category}&sortBy=${sortBy}&order=${order}${search}`;
console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType,searchValue]);
  !isLoading && window.scrollTo(0, 0);

  const Skeletons = [...new Array(10)].map((_, i) => {
    return <Skeleton key={i} />;
  });
  console.log(searchValue);
  const Pizzas = searchValue
    ? items
        .filter((res) => {
          if (res.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true; //nshanakuma ete ka tox mna  ete chexav djndjuma
            // return res nshanakuma ete ka tox mna  ete chexav djndjuma  nuyn babba inch verevy
          }
          return false;
        })
        .map((item, i) => {
          return <PizzaBlock key={i} {...item} />;
        })
    : items.map((item, i) => {
        return <PizzaBlock key={i} {...item} />;
      });

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? Skeletons : Pizzas}</div>

      <Pagination/>
    </>
  );
}

export default Home;
