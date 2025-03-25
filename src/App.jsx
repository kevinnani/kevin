// import { useEffect, lazy, Suspense } from "react";
// import "./App.css";
// import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchContent } from "./redux/slices/contentSlices";
// import "bootstrap-icons/font/bootstrap-icons.css";

// // Lazy load components
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Contact = lazy(() => import("./pages/Contact"));
// const Portfolio = lazy(() => import("./pages/Portfolio"));
// const Resume = lazy(() => import("./pages/Resume"));
// const TechStack = lazy(() => import("./pages/TechStack"));

// // Define sections dynamically
// const sections = [
//   { id: "home", Component: Home },
//   { id: "techStack", Component: TechStack },
//   { id: "about", Component: About },
//   { id: "resume", Component: Resume },
//   { id: "contact", Component: Contact },
// ];

// function App() {
//   const dispatch = useDispatch();
//   const { status } = useSelector((state) => state.content);

//   // Fetch content when the app loads
//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchContent());
//     }
//   }, [status, dispatch]);

//   return (
//     <>
//       <Navbar />
      
//       {/* Lazy Load Components */}
//       <Suspense fallback={<p>Loading...</p>}>
//         {sections.map(({ id, Component }) => (
//           <section key={id} className="nav_container" id={id}>
//             <Component />
//           </section>
//         ))}
//       </Suspense>

//       <Footer />
//     </>
//   );
// }

// export default App;


import { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { fetchContent } from "./redux/slices/contentSlices";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";
import { Resume } from "./pages/Resume";
import { TechStack } from "./pages/TechStack";
import BackgroundAnimation from "./BackgroundAnimation/BackgroundAnimation";
import ParticlesBackground from "./BackgroundAnimation/ParticlesBackground";
import "bootstrap-icons/font/bootstrap-icons.css";  
import { Footer } from "./components/Footer";

// Define a mapping of section IDs to their components
const sections = [
  { id: "home", Component: Home },
  { id: "techStack", Component: TechStack },

  { id: "about", Component: About },
 
  // { id: "Footer", Component: Footer },
  { id: "resume", Component: Resume },

  { id: "contact", Component: Contact },
  { id: "Foter", Component: Footer },
];

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.content);

  // Fetch content when the app loads
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchContent());
    }
  }, [status, dispatch]);

  return (
    <>
      <Navbar />
      {/* <BackgroundAnimation/> */}
      {/* <ParticlesBackground /> */}

      {/* Map sections dynamically */}
      {sections.map(({ id, Component }) => (
        <section  key={id} className="nav_container" id={id}>
          <Component /> 
        </section>
      ))}
    </>
  );
}

export default App;
