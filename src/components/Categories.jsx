
function Categories({ value, onClickCategory }) {
  const categoriesArr = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categoriesArr.map((item, i) => {
          return (
            <li key={i} onClick={() => onClickCategory(i)} className={value === i ? "active" :''}>{item}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
