import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import Trending from "./pages/Trending";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuth } from "./context/AuthContext";
import Landing from "./pages/Landing";
import SomethingWrong from "./pages/SomethingWrong";
import LoaderSVG from "./assets/images/loader";
import Sidebar from "./components/RightSidebar";

function App() {
  const { currentUser } = useAuth();
  const currentPath = window.location.href;
  // console.log({ currentUser: currentUser.length });

  if (currentUser === undefined) {
    return <div>Loading...</div>;
  }

  // console.log({ currentPath: currentPath.includes("signup") });
  return (
    <Router>
      <div className="mx-auto p-4">
        {currentPath.includes("login" || "signup" || "*") === false && (
          <Navbar />
        )}
        {/* {currentUser && <Sidebar />} */}
        {/* <Navbar /> */}
        <Routes>
          {currentUser ? (
            <>
              <Route path="/" element={<Feed />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="*" element={<SomethingWrong />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Landing />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
