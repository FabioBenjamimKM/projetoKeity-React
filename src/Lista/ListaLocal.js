import React, { Fragment, Component } from "react";
import "../App.css";
import Agenda from "../Agenda/Agenda";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiService from "../Service/ApiService";
import { formatarData } from '../Helpers';
//import 'bootstrap/dist/js/bootstrap.bundle.min';

class ListaLocal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    ApiService.lastLogin(this.props.location.state.idMedico)
      .then((res) => res.json())
      .then((res) =>
        this.setState({ data: formatarData(res[res.length - 1].data.replaceAll("-", "/").substring(0, 10)) })
      );
  }

  render() {
    return (
      <Fragment>
        <div className="home-Medico">
          <div className="">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">
                MySchedule
            </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#textoNavbar"
                aria-controls="textoNavbar"
                aria-expanded="false"
                aria-label="Alterna navegação"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="textoNavbar">
                <ul class="navbar-nav mr-auto"></ul>
                <ul className="navbar-nav ml-auto mr-5">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {this.props.location.state.nome}
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        <Link
                          className="nav-link"
                          to={{
                            pathname: "/Login",
                          }}
                        >
                          Paciente
                      </Link>
                      </a>
                      <a class="dropdown-item" href="#">
                        <Link
                          className="nav-link"
                          to={{
                            pathname: "/LoginMedico",
                          }}
                        >
                          Médico
                      </Link>
                      </a>
                      <div class="dropdown-divider"></div>
                      <a disabled class="dropdown-item" href="#">
                        <Link
                          className="nav-link"
                          to={{
                            pathname: "/",
                          }}
                        >
                          Sair
                      </Link>
                      </a>
                    </div>
                  </li>
                  <a className="nav-item nav-link disabled">
                    Ultimo login: {this.state.data}
                  </a>
                </ul>
              </div>
            </nav>
          </div>
          <div className="row ">
            <div className="col-md-9 col-md-offset-3" style={{ textAlign: "center", float: "none", margin: " 0 auto" }}>
              <div class="card bg-light mt-5">
                <div class="card-header">Consultórios</div>
                <div class="card-body">
                  <table className="table">
                    <Agenda
                      idMedico={this.props.location.state.idMedico}
                      filhos={this.state.filhos}
                      cadastraConsultorio={this.cadastraConsultorio}
                    />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ListaLocal;
