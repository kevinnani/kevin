import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  // Apply theme to `data-theme` attribute in <html>
  document.documentElement.setAttribute("data-theme", theme);

  return (
    <button className="ThemeBtn_clr me-3" onClick={() => dispatch(toggleTheme())}>
      {theme === "light" ? "🌙 " : "☀️"}
    </button>
  );
};

export default ThemeToggle;
