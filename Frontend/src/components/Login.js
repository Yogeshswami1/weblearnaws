// Login.js

// import React, { useState } from 'react';
// import styled from 'styled-components';

// const LoginForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #f0f0f0;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//   width: 300px;
//   max-width: 100%;
// `;

// const LoginInput = styled.input`
//   padding: 10px;
//   margin: 8px 0;
//   width: calc(100% - 20px);
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
//   outline: none;

//   &:focus {
//     border-color: #405de6;
//   }
// `;

// const LoginButton = styled.button`
//   background-color: #405de6;
//   color: white;
//   border: none;
//   padding: 12px;
//   width: calc(100% - 20px);
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #3b55c2;
//   }
// `;

// const ErrorMessage = styled.p`
//   color: red;
//   font-size: 14px;
//   margin-top: 8px;
// `;

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Basic validation
//     if (email === 'test@example.com' && password === 'password') {
//       onLogin(true); // Notify parent component (App.js) that login is successful
//     } else {
//       setError('Invalid email or password. Please try again.');
//     }
//   };

//   return (
//     <LoginForm onSubmit={handleLogin}>
//       <LoginInput
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <LoginInput
//         type="password"
//         placeholder="Enter your password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <LoginButton type="submit">Login</LoginButton>
//       {error && <ErrorMessage>{error}</ErrorMessage>}
//     </LoginForm>
//   );
// };

// export default Login;


// Login.js

// import React, { useState } from 'react';
// import styled from 'styled-components';

// // const backgroundImgUrl = 'https://cdn.pixabay.com/photo/2015/06/22/12/14/potholder-817488_1280.png';

// const LoginPage = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-size: cover;
// `;

// const LoginForm = styled.form`
//   background-color: rgba(255, 255, 255, 0.95);
//   padding: 30px;
//   border-radius: 8px;
//   box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
//   text-align: center;
//   max-width: 350px;
//   width: 100%;
// `;

// const Header = styled.h2`
//   font-size: 28px;
//   font-weight: bold;
//   color: #333;
//   margin-bottom: 20px;
// `;

// const Subtitle = styled.p`
//   font-size: 18px;
//   color: #555;
//   margin-bottom: 30px;
// `;

// const LoginInput = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin-bottom: 15px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-size: 16px;
//   outline: none;
//   transition: border-color 0.3s ease, box-shadow 0.3s ease;

//   &:focus {
//     border-color: #405de6;
//     box-shadow: 0 0 5px rgba(64, 93, 230, 0.5);
//   }

//   &:hover {
//     border-color: #aaa;
//   }
// `;

// const LoginButton = styled.button`
//   background-color: #405de6;
//   color: white;
//   border: none;
//   padding: 14px;
//   width: 100%;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #3b55c2;
//   }
// `;

// const ErrorMessage = styled.p`
//   color: red;
//   font-size: 14px;
//   margin-top: 10px;
// `;

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Basic validation
//     if (username === 'AL' && password === 'saumiccraft') {
//       onLogin(true); // Notify parent component (App.js) that login is successful
//     } else {
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   return (
//     <LoginPage>
//       <LoginForm onSubmit={handleLogin}>
//         <Header>Welcome to Saumiccraft</Header>
//         <Subtitle>Please login to access this page</Subtitle>
//         <LoginInput
//           type="text"
//           placeholder="Enter your username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <LoginInput
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <LoginButton type="submit">Login</LoginButton>
//         {error && <ErrorMessage>{error}</ErrorMessage>}
//       </LoginForm>
//     </LoginPage>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Container = styled.section`
//   height: 100vh;
// `;

// const CustomContainer = styled.div`
//   height: calc(100% - 73px);

//   @media (max-width: 450px) {
//     height: 100%;
//   }
// `;

// const Header = styled.h1`
//   text-align: center;
//   margin-bottom: 2rem;
//   color: #333;
//   font-size: 36px;
//   font-weight: bold;
// `;

// const ErrorMessage = styled.p`
//   color: red;
//   font-size: 14px;
//   margin-top: 10px;
// `;

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const RememberMeContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
// `;

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === 'AL' && password === 'saumiccraft') {
//       onLogin(true);
//     } else {
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   return (
//     <Container className="vh-100">
//       <CustomContainer className="container-fluid h-custom">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-md-9 col-lg-6 col-xl-5">
//             <img
//               src="https://saumiccraft.com/wp-content/uploads/2023/06/S-C-Logo-300x205.png"
//               className="img-fluid"
//               alt="Sample"
//             />
//           </div>
//           <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//             <Header>Welcome to Saumiccraft Learning</Header>
//             <StyledForm onSubmit={handleLogin}>
//               <div className="form-outline mb-4">
//                 <input
//                   type="text"
//                   id="form3Example3"
//                   className="form-control form-control-lg"
//                   placeholder="Enter a valid username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   style={{width:"23rem"}}
//                   required
//                 />
//               </div>
//               <div className="form-outline mb-3">
//                 <input
//                   type="password"
//                   id="form3Example4"
//                   className="form-control form-control-lg"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   style={{width:"23rem"}}

//                   required
//                 />
//               </div>
//               <RememberMeContainer className="form-check mb-0">
//                 <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
//                 <label className="form-check-label" htmlFor="form2Example3">Remember me</label>
//               </RememberMeContainer>
//               <div className="text-center text-lg-start mt-4 pt-2">
//                 <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
//               </div>
//               {error && <ErrorMessage>{error}</ErrorMessage>}
//             </StyledForm>
//           </div>
//         </div>
//       </CustomContainer>
//     </Container>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Container = styled.section`
//   height: 100vh;
// `;

// const CustomContainer = styled.div`
//   height: calc(100% - 73px);

//   @media (max-width: 450px) {
//     height: 100%;
//   }
// `;

// const Header = styled.h1`
//   text-align: center;
//   margin-bottom: 2rem;
//   color: #333;
//   font-size: 36px;
//   font-weight: bold;
// `;

// const ErrorMessage = styled.p`
//   color: red;
//   font-size: 14px;
//   margin-top: 10px;
// `;

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const RememberMeContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
// `;

// const Login = ({ onUserLogin, onAdminLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Admin credentials
//     const adminUsername = 'Admin';
//     const adminPassword = 'adminpassword';

//     // User credentials
//     const userUsername = 'User';
//     const userPassword = 'userpassword';

//     if (username === adminUsername && password === adminPassword) {
//       onAdminLogin(true);
//     } else if (username === userUsername && password === userPassword) {
//       onUserLogin(true);
//     } else {
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   return (
//     <Container className="vh-100">
//       <CustomContainer className="container-fluid h-custom">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-md-9 col-lg-6 col-xl-5">
//             <img
//               src="https://saumiccraft.com/wp-content/uploads/2023/06/S-C-Logo-300x205.png"
//               className="img-fluid"
//               alt="Sample"
//             />
//           </div>
//           <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//             <Header>Welcome to Saumiccraft Learning</Header>
//             <StyledForm onSubmit={handleLogin}>
//               <div className="form-outline mb-4">
//                 <input
//                   type="text"
//                   id="form3Example3"
//                   className="form-control form-control-lg"
//                   placeholder="Enter a valid username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   style={{ width: "23rem" }}
//                   required
//                 />
//               </div>
//               <div className="form-outline mb-3">
//                 <input
//                   type="password"
//                   id="form3Example4"
//                   className="form-control form-control-lg"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   style={{ width: "23rem" }}
//                   required
//                 />
//               </div>
//               <RememberMeContainer className="form-check mb-0">
//                 <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
//                 <label className="form-check-label" htmlFor="form2Example3">Remember me</label>
//               </RememberMeContainer>
//               <div className="text-center text-lg-start mt-4 pt-2">
//                 <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
//               </div>
//               {error && <ErrorMessage>{error}</ErrorMessage>}
//             </StyledForm>
//           </div>
//         </div>
//       </CustomContainer>
//     </Container>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Container = styled.section`
  height: 100vh;
`;

const CustomContainer = styled.div`
  height: calc(100% - 73px);

  @media (max-width: 450px) {
    height: 100%;
  }
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 36px;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RememberMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'adminpassword') {
      onLogin(true, 'admin'); // Pass 'admin' as role
    } else if (username === 'AL' && password === 'saumiccraft') {
      onLogin(true, 'user'); // Pass 'user' as role
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <Container className="vh-100">
      <CustomContainer className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://saumiccraft.com/wp-content/uploads/2024/06/S-C-Logo.png"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <Header>Welcome to Saumiccraft Learning</Header>
            <StyledForm onSubmit={handleLogin}>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{width:"23rem"}}
                  required
                />
              </div>
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{width:"23rem"}}
                  required
                />
              </div>
              <RememberMeContainer className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label className="form-check-label" htmlFor="form2Example3">Remember me</label>
              </RememberMeContainer>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
              </div>
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </StyledForm>
          </div>
        </div>
      </CustomContainer>
    </Container>
  );
};

export default Login;
