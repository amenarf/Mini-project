import React, { useState } from 'react';
import './home.css'; // Ajouter des styles CSS spécifiques
import 'bootstrap/dist/css/bootstrap.min.css'; // Importer Bootstrap


const HomePage = () => {
  const [email, setEmail] = useState(''); // État pour stocker l'email
  const [message, setMessage] = useState(''); // État pour stocker le message
  const [contactName, setContactName] = useState(''); // État pour le nom de contact
  const [contactEmail, setContactEmail] = useState(''); // État pour l'email de contact
  const [contactMessage, setContactMessage] = useState(''); // État pour le message de contact

  // Fonction pour gérer la soumission du formulaire d'abonnement
  const handleSubscribe = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (email) {
      setMessage(`Merci pour votre abonnement, ${email}!`);
      setEmail(''); // Réinitialiser le champ email
    } else {
      setMessage('Veuillez entrer une adresse email valide.');
    }
  };

  // Fonction pour gérer la soumission du formulaire de contact
  const handleContactSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (contactName && contactEmail && contactMessage) {
      alert(`Merci ${contactName}, nous avons reçu votre message!`);
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="containe">
      {/* Navbar */}
      <div className="navbar" style={{ 
      backgroundImage: `url("pho1.png")`,
      backgroundSize :"cover"
      
    }}>
        <h1 className="logoText">LOCO LAND</h1>
        <div className="navLinks">
          <a href="#home" className="navLink">Home</a>
          <a href="#products" className="navLink">Products</a>
          <a href="#pricing" className="navLink">Pricing</a>
          <a href="#about" className="navLink">About</a>
          <a href="#contact" className="navLink">Contact</a>
        
        <div className="socialIcons">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
        </div>
       </div> 
      
       </div>

     
<div className="header">
  <div className="hero-section">
    
  
    <h2 className="headerSubtitle">
    <h1 className="headerTitle">The best products start with an idea</h1>
      Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.
      
    </h2>
    
    
 
</div>
</div>

      {/* Features Section */}
      <div id="home" className="featuresSection">
        <h3 className="sectionTitle">Features</h3>
        <div className="featuresContainer">
          <Feature title="Lorem ipsum dolor sit amet." />
          <Feature title="Lorem ipsum dolor sit amet." />
          <Feature title="Lorem ipsum dolor sit amet." />
        </div>
      </div>

      {/* Video Section */}
      <div className="videoSection">
        <img className="videoImage" src="ph2.jpg" alt="Video Preview" />
      </div>

      {/* Try For Free and Text Section */}
      <div className="tryAndTextSection">
        <div className="textSection">
          <h1>Lorem ipsum</h1>
          <h1>dolor.</h1>
          <p className="tryText">
            Lorem ipsum dolor
            <div>consectetur. Vitae donec varius placerat sed auctor enim feugiat.</div>
          </p>
          <button className="subscribeButton">Try For Free</button>
        </div>
        <img className="tryImage" src="ph3.jpg" alt="Laptop" />
      </div>

      {/* Subscribe Section */}
      <div className="subscribeSection">
        <img className="subscribeImage" src="ph4.jpg" alt="Subscribe" />
        <div className="subscribeTextContainer">
          <h6 className="atYourFingertips"><strong>At your fingertips</strong></h6>
          <h2 className="loremText"><strong>Lorem ipsum dolor.</strong></h2>
          <h6 className="subscribeText"><strong>Subscribe to our Newsletter</strong></h6>
          <p className="exclusivelyText">Available exclusively on Logoland</p>
          
          {/* Formulaire d'inscription avec Bootstrap */}
          <form onSubmit={handleSubscribe} className="d-flex flex-column">
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className="form-control mb-2 email-input"
            />
            <button type="submit" className="subscribeButton btn btn-primary">Subscribe</button>
          </form>

          {message && (
            <div className="alert alert-info alert-dismissible fade show mt-3" role="alert">
              {message}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="pricing-container mt-5">
        <h2>Pricing</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.</p>
        
        <div className="pricing-cards">
          {/* Plan Gratuit */}
          <div className="card">
            <h3>FREE</h3>
            <p>Organize access all types by hand</p>
            <h4>$0</h4>
            <p>Per Month</p>
            <ul>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
            </ul>
            <button>Order Now</button>
          </div>

          {/* Plan Standard */}
          <div className="card featured">
            <h3>STANDARD</h3>
            <p>Organize access all types by hand</p>
            <h4>$10</h4>
            <p>Per Month</p>
            <ul>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
            </ul>
            <button>Order Now</button>
          </div>

          {/* Plan Business */}
          <div className="card">
            <h3>BUSINESS</h3>
            <p>Organize access all types by hand</p>
            <h4>$99</h4>
            <p>Per Month</p>
            <ul>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
              <li>Pricing Feature</li>
            </ul>
            <button>Order Now</button>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div id="contact" className="contact-container mt-5">
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.</p>

        <div className="form-container">
          <h3>Contact Us</h3>
          <form onSubmit={handleContactSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="input-field"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="input-field"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
            <textarea 
              placeholder="Your Message" 
              className="input-field message-box"
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="submit-btn">Send</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <span role="img" aria-label="location">📍</span>
            6308 Spring St undefined Anchorage, Georgia 12473 United States
          </div>
          <div className="info-item">
            <span role="img" aria-label="phone">📞</span>
            (843) 555-0130
          </div>
          <div className="info-item">
            <span role="img" aria-label="email">📧</span>
            willie.jennings@example.com
          </div>
        </div>
      </div>

      <Footer /> {/* Include Footer at the end of the HomePage */}
    </div>
  );
};

const Feature = ({ title }) => {
  return (
    <div className="feature">
      <img className="featureImage" src="ph1.jpg" alt="Feature Background" />
      <h4 className="featureTitle">{title}</h4>
      <div className="featureDescription">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Vitae donec varius placerat sed auctor enim feugiat.</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="about" className="footer">
      <div className="footer-container">
        <div className="column">
          <h3>Pages</h3>
          <ul className="list">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="column">
          <h3>Tomothy</h3>
          <ul className="list">
            <li>Eleanor Edwards</li>
            <li>Ted Robertson</li>
            <li>Annette Russell</li>
            <li>Jennie McKinney</li>
            <li>Gloria Richards</li>
          </ul>
        </div>

        <div className="column">
          <h3>Jane Black</h3>
          <ul className="list">
            <li>Philip Jones</li>
            <li>Product</li>
            <li>Colleen Russell</li>
            <li>Marvin Hawkins</li>
            <li>Bruce Simmonds</li>
          </ul>
        </div>

        <div className="column contact-info">
          <p>📍 7460 Mockingbird Hill undefined</p>
          <p>📞 (239) 555-0108</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
          

<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
        </div>
        </div>
      
    </footer>
  );
};

export default HomePage;
