import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import "./style.css";
import logoimg from "../../assets/logo.svg";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(res => {
        setIncidents(res.data);
      });
  }, [ongId]);

  return (
    <div className="profile-container">
      <header>
        <img src={logoimg} alt=" Be The Hero " />
        <span>Bem vinda, {ongName} </span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>

      <ul>

        {incidents.map(incidents => (
          <li key={incidents.id} >
            <strong>CASO:</strong>
            <p>{incidents.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incidents.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR ',)}</p>
            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
