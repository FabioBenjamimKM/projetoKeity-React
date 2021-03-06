import React, { Component, Fragment } from "react";
import "./CadastroMedico.css";
import ApiService from "../Service/ApiService";
import Navbar from "../NavBar/Navbar";

class CadastroMedico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      sexo: "",
      email: "",
      telefone: "",
      cep: "",
      endereco: "",
      numero: "",
      complemento: "",
      cidade: "",
      estado: "",
      rg: "",
      cri: "",
      cro: "",
      especializacao: "",
      cpf: "",
    };
  }

  escutadorDeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  cadastraMedico = () => {
    ApiService.cadastraMedico(
      JSON.stringify({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        sexo: this.state.sexo,
        email: this.state.email,
        telefone: this.state.telefone,
        cep: this.state.cep,
        endereco: this.state.endereco,
        numero: this.state.numero,
        complemento: this.state.complemento,
        cidade: this.state.cidade,
        estado: this.state.estado,
        cri: this.state.cri,
        cro: this.state.cro,
        especializacao: this.state.especializacao,
        cpf: this.state.cpf,
        senha: this.state.cri,
      })
    );
  };

  render() {
    return (
      <div className="CadastroMedico ml-3 mt-3">
        <form>
          <div class="center-divS">
            <img
              src="https://moldura-pop.s3.sa-east-1.amazonaws.com/imagens-proprietarias/99929074-co69H2-T4UCjdMLNVuRfvKVPmrNOjdKj-cropped-1x1-browser.png"
              class="img"
            ></img>
            <fieldset class="formMedico">
              <fieldset class="grupo">
                <div class="campo">
                  <label for="nome">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="nome"
                    style={{ width: "10em" }}
                  />
                </div>

                <div class="campo">
                  <label for="sobrenome">Sobrenome</label>
                  <input
                    type="text"
                    id="sobrenome"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="sobrenome"
                    style={{ width: "10em" }}
                  />
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label for="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="cpf"
                    style={{ width: "10em" }}
                  />
                </div>

                <div class="campo">
                  <label>Sexo</label>
                  <label>
                    <input
                      type="radio"
                      name="sexo"
                      onChange={this.escutadorDeInput}
                      value="masculino"
                    />{" "}
                    Masculino
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="sexo"
                      onChange={this.escutadorDeInput}
                      value="feminino"
                    />{" "}
                    Feminino
                  </label>
                </div>
              </fieldset>
              <fieldset class="grupo">
                <div class="campo">
                  <label for="cri">CRI</label>
                  <input
                    type="text"
                    id="cri"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="cri"
                    style={{ width: "10em" }}
                  />
                </div>
                <div class="campo">
                  <label for="cro">CRO</label>
                  <input
                    type="text"
                    id="cro"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="cro"
                    style={{ width: "10em" }}
                  />
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label for="especializacao">Especialização</label>
                  <input
                    type="text"
                    id="especializacao"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="especializacao"
                    style={{ width: "21.5em" }}
                  />
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label for="email">E-mail</label>
                  <input
                    type="text"
                    id="email"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="email"
                    style={{ width: "21.5em" }}
                  />
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label for="telefone">Telefone</label>
                  <input
                    type="text"
                    id="telefone"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="telefone"
                    style={{ width: "10em" }}
                  />
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label for="cep">CEP</label>
                  <input
                    type="text"
                    id="cep"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="cep"
                    style={{ width: "5em" }}
                  />
                </div>

                <div class="campo">
                  <label for="endereco">Endereço</label>
                  <input
                    type="text"
                    id="endereco"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="endereco"
                    style={{ width: "10em" }}
                  />
                </div>

                <div class="campo">
                  <label for="numero">Número</label>
                  <input
                    type="text"
                    id="numero"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="numero"
                    style={{ width: "3em" }}
                  />
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label for="complemento">Complemento</label>
                  <input
                    type="text"
                    id="complemento"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="complemento"
                    style={{ width: "21.5em" }}
                  />
                </div>
              </fieldset>

              <fieldset class="grupo">
                <div class="campo">
                  <label for="cidade">Cidade</label>
                  <input
                    type="text"
                    id="cidade"
                    class="form-control"
                    onChange={this.escutadorDeInput}
                    name="cidade"
                    style={{ width: "17em" }}
                  />
                </div>
                <div class="campo">
                  <label for="estado">Estado</label>
                  <select
                    onChange={this.escutadorDeInput}
                    name="estado"
                    class="form-control"
                    id="estado"
                  >
                    <option value="">--</option>
                    <option value="PR">SP</option>
                  </select>
                </div>
              </fieldset>
              <fieldset class="grupo"></fieldset>
            </fieldset>
            <button
              type="button"
              class="btn btn-light"
              id="buttonLogin"
              onClick={this.cadastraMedico}
            >
              Enviar
            </button>
          </div>
          <style>
            {
              "body { background-image: url(https://ababas.com.br/wp-content/uploads/2019/08/2-dialab-bg.jpg); }"
            }
          </style>
        </form>
      </div>
    );
  }
}

export default CadastroMedico;
