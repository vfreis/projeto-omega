import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="text-center">
      <div className="container ">
        <section className="mb-4">
          <a className="btn btn-primary btn-floating m-1 "  href="#!" role="button">
            {/* <FontAwesomeIcon icon={faFacebookF} /> */}
          </a>
          
          <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#ac2bac"}} href="#!" role="button">
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
          </a>
          <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="#!" role="button">
            {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
          </a>
          <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}} href="#!" role="button">
            {/* <FontAwesomeIcon icon={faGithub} /> */}
          </a>
        </section>
        <section>
          <p>
          A OdontoTop é uma clínica odontológica que oferece tratamentos odontológicos de qualidade, com tecnologia de ponta e atendimento personalizado. Nossa equipe de profissionais altamente qualificados está comprometida em cuidar da sua saúde bucal com excelência e dedicação. Venha nos conhecer e transforme seu sorriso!
          </p>

        </section>
        <div className="text-center" >
            © 2023 Clínica Odontologica OdontoTop
        </div>
      </div>
    </footer>
  );
}

export default Footer;
