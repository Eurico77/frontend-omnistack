import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./style.css";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, seTitle] = useState("");
  const [description, seDescription] = useState("");
  const [value, seValue] = useState("");

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar o herói par resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input placeholder=" Título do caso" 
          value={title}
          onChange ={e => seTitle(e.target.value)}
          />

          <textarea placeholder=" Descrição" 
          value={description}
          onChange ={e => seDescription(e.target.value)}
          />

          <input placeholder =" Valor em R$:" 
           
          value={value}
          onChange ={e => seValue(e.target.value)}
          />

          <button className=" button " type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
