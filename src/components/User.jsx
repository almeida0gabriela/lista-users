import './User.css'

function User(props) {
  return (
    <div className="card">
      <div className="card-header">
        <img className="foto" src={props.image} alt={props.firstname} />
        <div className="header-texto">
          <h2 className="nome">{props.firstname} {props.lastname}</h2>
          <p className="idade-genero">{props.age} anos | {props.gender}</p>
        </div>
      </div>

      <p className="divisor"></p>

      <div className="informacoes">
        <p><strong>Email:</strong> {props.email}</p>
        <p><strong>Telefone:</strong> {props.phone}</p>
        <p><strong>Empresa:</strong> {props.company}</p>
        <p><strong>Cargo:</strong> {props.title}</p>
        <p><strong>Cidade:</strong> {props.city} - {props.stateCode}</p>
      </div>
    </div>
  );
}

export default User