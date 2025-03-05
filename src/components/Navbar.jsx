import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchContent } from "../redux/slices/contentSlices";
import { Link } from "react-scroll";
import logo from '.././assets/logo.png'

export const Navbar = () => {
    const dispatch = useDispatch();
  const { navbar, status, error } = useSelector((state) => state.content);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchContent());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading navbar...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  console.log("Navbar Data:", navbar); // ✅ 

  return (
    <nav>
      <div><img src={logo} alt="kevin img" />
      </div>
      <ul>
        {navbar && navbar.length > 0 ? (
          navbar.map((item) => (
            <li key={item.id}>
            <Link to={item.link} id={item.name} duration={500} smooth={true} >{item.name}</Link>
            </li>
          ))
        ) : (
          <p>No navbar data available</p>
        )}
      </ul>
    </nav>
        
      
    )
}