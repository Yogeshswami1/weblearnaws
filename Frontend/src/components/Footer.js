// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// const footerStyles = {
//   footer: {
//     background: '#000',
//     color: '#fff',
//     padding: '40px 20px',
//     textAlign: 'center',
//     marginTop:"2rem"
//   },
//   footerContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     gap: '20px',
//   },
//   footerColumn: {
//     flex: 1,
//     minWidth: '200px',
//   },
//   footerColumnHeading: {
//     marginBottom: '20px',
//     color: '#ff0000', // Red color for headings
//   },
//   footerLinks: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   footerLink: {
//     color: '#fff',
//     textDecoration: 'none',
//     fontWeight: '600',
//     padding: '8px 0',
//     transition: 'color 0.3s ease',
//   },
//   newsletter: {
//     backgroundColor: '#222',
//     padding: '20px',
//     borderRadius: '20px',
//     textAlign: 'center',
//   },
//   newsletterInputEmail: {
//     width: '80%',
//     padding: '12px',
//     border: 'none',
//     borderRadius: '20px',
//     fontSize: '16px',
//     marginBottom: '10px',
//   },
//   newsletterInputSubmit: {
//     backgroundColor: '#ff0000', // Red color for button
//     color: '#fff',
//     padding: '12px 25px',
//     border: 'none',
//     borderRadius: '20px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     transition: 'background 0.3s ease',
//   },
//   socialIcons: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '15px',
//     margin: '20px 0',
//   },
//   socialIcon: {
//     color: '#fff',
//     textDecoration: 'none',
//     fontSize: '20px',
//     transition: 'color 0.3s ease',
//   },
//   copyright: {
//     backgroundColor: '#111',
//     color: '#fff',
//     padding: '10px',
//     textAlign: 'center',
//     marginTop: '20px',
//   },
// };

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Simulate API call
//     if (email) {
//       setMessage('Thank you for subscribing!');
//       setEmail('');
//     } else {
//       setMessage('Please enter a valid email.');
//     }
//   };

//   return (
//     <footer style={footerStyles.footer} >
//       <div style={footerStyles.footerContainer}>
//         <div style={footerStyles.footerColumn}>
//           <h3 style={footerStyles.footerColumnHeading}x>Quick Links</h3>
//           <div style={footerStyles.footerLinks}>
//             <Link to="https://saumiccraft.com/amazontrainingbysaumiccraft/" style={footerStyles.footerLink}>7 Days Training</Link>
//             <Link to="https://saumiccraft.com/amazon75daystraining/" style={footerStyles.footerLink}>75 Days Training</Link>
//             <Link to="https://saumiccraft.com/wp-content/uploads/2023/12/ebook-amazon-book-by-Saumic-Craft-1.pdf" style={footerStyles.footerLink}>E-Book</Link>
//           </div>
//         </div>
      
//         <div style={footerStyles.footerColumn}>
//   <h3 style={footerStyles.footerColumnHeading}>Follow Us</h3>
//   <div style={footerStyles.socialIcons}>
//   <a href="https://www.instagram.com/saumic_craft_/" target="_blank" style={footerStyles.socialIcon}>
//           <FontAwesomeIcon icon={faInstagram} />
//         </a>  </div>
// </div>

//       </div>
//       <div style={footerStyles.copyright}>
//         &copy; All rights reserved
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const footerStyles = {
  footer: {
    background: '#000',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
    marginTop: '2rem',
  },
  footerContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
  },
  footerColumn: {
    flex: 1,
    minWidth: '200px',
  },
  footerColumnHeading: {
    marginBottom: '20px',
    color: '#ff0000', // Red color for headings
  },
  footerLinks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '600',
    padding: '8px 0',
    transition: 'color 0.3s ease',
  },
  newsletter: {
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '20px',
    textAlign: 'center',
  },
  newsletterInputEmail: {
    width: '80%',
    padding: '12px',
    border: 'none',
    borderRadius: '20px',
    fontSize: '16px',
    marginBottom: '10px',
  },
  newsletterInputSubmit: {
    backgroundColor: '#ff0000', // Red color for button
    color: '#fff',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background 0.3s ease',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    margin: '20px 0',
  },
  socialIcon: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '20px',
    transition: 'color 0.3s ease',
  },
  copyright: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    marginTop: '20px',
  },
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    if (email) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.footerContainer}>
        <div style={footerStyles.footerColumn}>
          <h3 style={footerStyles.footerColumnHeading}>Quick Links</h3>
          <div style={footerStyles.footerLinks}>
            <Link to="/" style={footerStyles.footerLink}>Home</Link>
            <Link to="/about" style={footerStyles.footerLink}>Social Media Content</Link>
            <Link to="/regular" style={footerStyles.footerLink}>Regular Updates</Link>
          </div>
        </div>

        <div style={footerStyles.footerColumn}>
          <h3 style={footerStyles.footerColumnHeading}>Follow Us</h3>
          <div style={footerStyles.socialIcons}>
            <a href="https://www.instagram.com/saumic_craft_/" target="_blank" rel="noopener noreferrer" style={footerStyles.socialIcon}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

      </div>
      <div style={footerStyles.copyright}>
        &copy; All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
