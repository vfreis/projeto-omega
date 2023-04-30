import React from "react";
import "./index.css"
import especialidades from "../../images/especialidades.png"
import especialidade1 from "../../images/especialidade1.png"
import especialidade2 from "../../images/especialidade2.png"
import especialidade3 from "../../images/especialidade3.png"

const AboutUs = () => {
  return (
    <section  id="especialidades-container">
      <div className="about">
      <h2 className="text-center esp">Nossas Especialidade</h2>
      <h6 className="text-center  ">Cuidando do seu sorriso com excelência: Na OdontoTop, oferecemos um atendimento odontológico personalizado e de qualidade para cuidar do seu sorriso com excelência e dedicação.</h6>
      </div>

      <div className="especialidades-container">
        <div className="especialidade">
          <img src={especialidade1} alt="Especialidade 1" />
          <h5 className="text-center esp">Clareamento dos Dentes</h5>
          <p className="text-center p">Com o clareamento dental da OdontoTop, seu sorriso fica mais brilhante e confiante em apenas algumas sessões, sem dor ou desconforto</p>
        </div>
        <div className="especialidade">
          <img src={especialidades} alt="Especialidade 1" />
          <h5 className="text-center esp ">Odontologia Indolor</h5>
          <p className="text-center p">Na OdontoTop, a odontologia é indolor para que seu sorriso seja sempre radiante e sem medo.</p>
        </div>
        <div className="especialidade">
          <img src={especialidade2} alt="Especialidade 2" />
          <h5 className="text-center esp">Cirurgia Oral</h5>
          <p className="text-center p">Com a tecnologia e cuidado da OdontoTop, a cirurgia oral é feita de forma segura e confortável para garantir sua saúde bucal e bem-estar</p>
        </div>
        <div className="especialidade">
          <img src={especialidade3} alt="Especialidade 3" />
          <h5 className="text-center esp">Periodontia</h5>
          <p className="text-center p">Na OdontoTop, a periodontia é tratada com atenção e cuidado para garantir a saúde das suas gengivas e dentes, prevenindo e tratando doenças periodontais</p>
        </div>
      </div>
      <div>
        
      </div>
    </section>
    
    // <section>
    //   <div>
   
       
    //     {/* <p>
    //       A OdontoTop é uma clínica odontológica que tem como missão
    //       proporcionar um atendimento de excelência para nossos pacientes.
    //       Contamos com uma equipe de profissionais altamente qualificados e
    //       equipamentos de última geração para garantir a sua saúde bucal e a sua
    //       satisfação.
    //     </p> */}
    //     <h3>Nossa Equipe</h3>
    //     <ul>
    //       <li>Dr. João - Ortodontista</li>
    //       <li>Dra. Maria - Endodontista</li>
    //       <li>Dr. José - Cirurgião Dentista</li>
    //     </ul>
    //     <h3>Nossa História</h3>
    //     <p>
    //       A OdontoTop foi fundada em 2005 pelo Dr. João e desde então tem sido
    //       referência em atendimento odontológico de qualidade na região. Nosso
    //       objetivo é continuar a crescer e nos aprimorar para continuar a
    //       oferecer o melhor atendimento para nossos pacientes.
    //     </p>
    //   </div>
    // </section>
  );
};

export default AboutUs;
