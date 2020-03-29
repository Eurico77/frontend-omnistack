import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import "./style.css";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, seTitle] = useState("");
  const [description, seDescription] = useState("");
  const [value, seValue] = useState("");

  const history = useHistory();
  const ongId = localStorage.getItem("ongId");

  async function handleNewIncident(e) {
    e.prevetDefault();

    const data = {
      title,
      description,
      value
    };
    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push('profile');
    } catch (err) {
      alert("erro ao cadasatrar o caso, tente novamente ");
    }
  }

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

        <form onSubmit={handleNewIncident}>
          <input
            placeholder=" Título do caso"
            value={title}
            onChange={e => seTitle(e.target.value)}
          />

          <textarea
            placeholder=" Descrição"
            value={description}
            onChange={e => seDescription(e.target.value)}
          />

          <input
            placeholder=" Valor em R$:"
            value={value}
            onChange={e => seValue(e.target.value)}
          />

          <button className=" button " type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
