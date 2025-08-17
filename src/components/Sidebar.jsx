import { Link } from "react-router-dom";
import productsData from "../data.json";

const Sidebar = () => {
  const categories = [
    ...new Set(productsData.map((product) => product.category)),
  ];

  return (
    <aside className="md:w-100 w-full min-h-auto p-4">
      <details
        className="[&::-webkit-details-marker]:hidden [&::marker]:hidden"
        open={true}
      >
        <summary className="md:pointer-events-none cursor-pointer text-lg font-semibold mb-2">
          <div className="flex items-center justify-center mb-4 border-b pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <span className="font-semibold">CATEGORIAS</span>
          </div>
        </summary>
        <nav>
          <ul className="flex flex-col items-center">
            {categories.map((category, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={`/categorias/${encodeURIComponent(category)}`}
                  className="block p-2 hover:bg-gray-100 rounded"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </details>
    </aside>
  );
};

export default Sidebar;
