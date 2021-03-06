import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Local from "../Cadastro/CadastroDeLocais";
import { Link, Redirect } from "react-router-dom";
import AgendaLocalCorpo from "../Agenda/AgendaLocalCorpo";
import Navbar from "../NavBar/Navbar";
import ApiService from "../Service/ApiService";

class AgendaLocal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    ApiService.HoraLivreMedico(4)
      .then((res) => res.text())
      .then((result) => {
        console.log(JSON.parse(result));
      });
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="row">
          <div className="col-6">
            <head>{this.props.location.state.local}</head>
            <table className="table agenda-meio">
              <thead>
                <tr>
                  <th>Horario</th>
                  <th scope="col">Seg</th>
                  <th scope="col">Ter</th>
                  <th scope="col">Qua</th>
                  <th scope="col">Qui</th>
                  <th scope="col">Sex</th>
                  <th scope="col">Sab</th>
                </tr>
              </thead>
              <AgendaLocalCorpo />
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default AgendaLocal;
