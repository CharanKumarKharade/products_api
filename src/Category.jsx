const Category = ({ finalType, setCategory }) => {
  let cat = finalType.map((v, i) => {
    return (
      <li
        onClick={() => setCategory(v)}
        key={i}
        className="bg-[#ccc] px-6 cursor-pointer mb-3 py-[5px] text-[20px] font-sarif text-[500]"
      >
        {v}
      </li>
    );
  });
  return (
    <div>
      <h1 className="text-[25px] py-[10px]  text-[500]">Our Category</h1>
      <ul>{cat}</ul>
    </div>
  );
};

export default Category;
