import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/create-recipe">Create Recipe</Link>
      </button>
      <button>
        <Link to="/saved-recipes">Saved Recipes</Link>
      </button>
      <button>
        {!cookies.access_token ? (
          <Link to="/auth">Login/Register</Link>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </button>
    </div>
  );
};
