// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import Video from './components/Video';
// import Footer from './components/Footer';
// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Video/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Video from './components/Video';
// import Footer from './components/Footer';
// import First from './components/First';
// import Second from './components/Second';
// import Third from './components/Third';
// import E_book from './components/E_book';
// import Gallery from './components/Gallery';
// // import Home from './components/Home';
// // import About from './components/About';
// // import Margins from './components/Margins';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <h1>Four Days Live Training Video</h1>
//         <Video/>
//         <div className="content">
//           <Routes>
//             {/* <Route path="/first" element={<First />} /> */}
//             <Route path="/second" element={<Second />} />
//             <Route path="/third" element={<Third />} />
//             <Route path="/ebook" element={<E_book />} />
//             {/* <Route path="/" element={<Home />} />  */}
//           </Routes>
//         </div>
//         <Gallery/>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;






// App.js

// App.js

// App.js

// App.js

// App.js

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Video from './components/Video';
// import Footer from './components/Footer';
// import First from './components/First';
// import Second from './components/Second';
// import Third from './components/Third';
// import E_book from './components/E_book';
// import Gallery from './components/Gallery';
// import Login from './components/Login';
// import About from './components/About';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check sessionStorage for authentication status
//     const loggedInStatus = sessionStorage.getItem('isLoggedIn');
//     if (loggedInStatus === 'true') {
//       setIsLoggedIn(true);
//     }
//   }, []); // Empty dependency array ensures this runs only once on component mount

//   const handleLogin = (status) => {
//     setIsLoggedIn(status);
//     // Store authentication status in sessionStorage
//     sessionStorage.setItem('isLoggedIn', status);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     // Clear sessionStorage on logout
//     sessionStorage.removeItem('isLoggedIn');
//   };

//   return (
//     <Router>
//       <div className="App">
//         {isLoggedIn ? (
//           <>
//             <Navbar onLogout={handleLogout} />
//             <h1>Four Days Live Training Video</h1>
//             <Video />
//             <div className="content">
//               <Routes>
//                 {/* Define your routes here */}
//                 <Route path="/second" element={<Second />} />
//                 <Route path="/third" element={<Third />} />
//                 <Route path="/ebook" element={<E_book />} />
//                 <Route path='/about' element={<About/>}/>
//               </Routes>
//             </div>
//             <Gallery />
//             <Footer />
//           </>
//         ) : (
//           <Login onLogin={handleLogin} />
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Video from './components/Video';
// import Footer from './components/Footer';
// import First from './components/First';
// import Second from './components/Second';
// import Third from './components/Third';
// import E_book from './components/E_book';
// import Gallery from './components/Gallery';
// import Login from './components/Login';
// import About from './components/About';
// import Regular from './components/Regular';
// import Regularupdates from './components/Regularupdates';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const loggedInStatus = sessionStorage.getItem('isLoggedIn');
//     const adminStatus = sessionStorage.getItem('isAdmin');

//     if (loggedInStatus === 'true') {
//       setIsLoggedIn(true);
//       setIsAdmin(adminStatus === 'true');
//     }
//   }, []);

//   const handleUserLogin = (status) => {
//     setIsLoggedIn(status);
//     setIsAdmin(false);
//     sessionStorage.setItem('isLoggedIn', status);
//     sessionStorage.setItem('isAdmin', false);
//   };

//   const handleAdminLogin = (status) => {
//     setIsLoggedIn(status);
//     setIsAdmin(true);
//     sessionStorage.setItem('isLoggedIn', status);
//     sessionStorage.setItem('isAdmin', true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//     sessionStorage.removeItem('isLoggedIn');
//     sessionStorage.removeItem('isAdmin');
//   };

//   return (
//     <Router>
//       <div className="App">
//         {isLoggedIn ? (
//           <>
//             <Navbar onLogout={handleLogout} />
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/second" element={<Second />} />
//               <Route path="/third" element={<Third />} />
//               <Route path="/ebook" element={<E_book />} />
//               <Route path="/about" element={<AboutPage />} />
//               <Route path="/regular" element={<RegularUpdate />} />
//               <Route path="/regularupdates" element={<Regularupdates />} />
//             </Routes>
//             <Footer />
//           </>
//         ) : (
//           <Login onUserLogin={handleUserLogin} onAdminLogin={handleAdminLogin} />
//         )}
//       </div>
//     </Router>
//   );
// }

// const HomePage = () => (
//   <>
//     <h1 style={{ marginTop: "16px" }}>Four Days Live Training Video</h1>
//     <Video />
//   </>
// );

// const AboutPage = () => (
//   <>
//     <About />
//   </>
// );

// const RegularUpdate = () => (
//   <>
//     <Regular />
//   </>
// );

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Video from './components/Video';
// import Footer from './components/Footer';
// import First from './components/First';
// import Second from './components/Second';
// import Third from './components/Third';
// import E_book from './components/E_book';
// import Gallery from './components/Gallery';
// import Login from './components/Login';
// import About from './components/About';
// import Regular from './components/Regular';
// import Regularupdates from './components/Regularupdates';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const loggedInStatus = sessionStorage.getItem('isLoggedIn');
//     const adminStatus = sessionStorage.getItem('isAdmin');

//     if (loggedInStatus === 'true') {
//       setIsLoggedIn(true);
//       setIsAdmin(adminStatus === 'true');
//     }
//   }, []);

//   const handleUserLogin = (status) => {
//     setIsLoggedIn(status);
//     setIsAdmin(false);
//     sessionStorage.setItem('isLoggedIn', status);
//     sessionStorage.setItem('isAdmin', false);
//   };

//   const handleAdminLogin = (status) => {
//     setIsLoggedIn(status);
//     setIsAdmin(true);
//     sessionStorage.setItem('isLoggedIn', status);
//     sessionStorage.setItem('isAdmin', true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//     sessionStorage.removeItem('isLoggedIn');
//     sessionStorage.removeItem('isAdmin');
//   };

//   return (
//     <Router>
//       <div className="App">
//         {isLoggedIn ? (
//           <>
//             <Navbar onLogout={handleLogout} />
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/second" element={<Second />} />
//               <Route path="/third" element={<Third />} />
//               <Route path="/ebook" element={<E_book />} />
//               <Route path="/about" element={<AboutPage />} />
//               <Route path="/regular" element={<RegularUpdate />} />
//               <Route path="/regularupdates" element={<Regularupdates />} />
//             </Routes>
//             <Footer />
//           </>
//         ) : (
//           <Login onUserLogin={handleUserLogin} onAdminLogin={handleAdminLogin} />
//         )}
//       </div>
//     </Router>
//   );
// }

// const HomePage = () => (
//   <>
//     <h1 style={{ marginTop: "16px" }}>Four Days Live Training Video</h1>
//     <Video />
//   </>
// );

// const AboutPage = () => (
//   <>
//     <About />
//   </>
// );

// const RegularUpdate = () => (
//   <>
//     <Regular />
//   </>
// );

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Video from './components/Video';
import Footer from './components/Footer';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import E_book from './components/E_book';
import Gallery from './components/Gallery';
import Login from './components/Login';
import About from './components/About';
import Regular from './components/Regular';
import Regularupdates from './components/Regularupdates';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(''); // New state for user role

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    const role = sessionStorage.getItem('userRole'); // Get user role from sessionStorage

    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  const handleLogin = (status, role) => {
    setIsLoggedIn(status);
    setUserRole(role);
    sessionStorage.setItem('isLoggedIn', status);
    sessionStorage.setItem('userRole', role); // Store user role in sessionStorage
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('userRole'); // Clear user role from sessionStorage
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <>
            <Navbar onLogout={handleLogout} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/second" element={<Second />} />
              <Route path="/third" element={<Third />} />
              <Route path="/ebook" element={<E_book />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/regular' element={<RegularUpdate />} />
              <Route path='/regularupdates' element={<Regularupdates userRole={userRole} />} /> {/* Pass userRole as a prop */}
            </Routes>
            <Footer />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

const HomePage = () => (
  <>
    <h1 style={{marginTop:"16px"}}>Four Days Live Training Video</h1>
    <Video />
  </>
);

const AboutPage = () => (
  <>
    <About />
  </>
);

const RegularUpdate = () => (
  <>
    <Regular />
  </>
);

export default App;
