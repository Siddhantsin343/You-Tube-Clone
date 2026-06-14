const ButtonList = () => {
  const categories = [
    "All",
    "Music",
    "Gaming",
    "News",
    "Live",
    "Podcasts",
    "Sports",
    "Cars",
    "Movies",
    "Technology",
    "Cooking",
    "React",
    "JavaScript",
    "Cricket",
    "Football",
  ];

  return (
    <div className="flex gap-3 overflow-x-auto p-3">
      {categories.map((category) => (
        <button
          key={category}
          className="px-4 py-2 bg-gray-100 rounded-lg whitespace-nowrap hover:bg-gray-200"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;