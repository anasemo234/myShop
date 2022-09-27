import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "All",
      imageUrl:
        "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    },
    {
      id: 2,
      title: "Reggae",
      imageUrl:
        "https://images.unsplash.com/photo-1538598450935-581f6a5fa7e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80",
    },
    {
      id: 3,
      title: "Pop",
      imageUrl:
        "https://images.unsplash.com/photo-1512830414785-9928e23475dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      title: "Hip-Hop",
      imageUrl:
        "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
    {
      id: 5,
      title: "Jazz",
      imageUrl:
        "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />;
    </div>
  );
};

export default Home;
