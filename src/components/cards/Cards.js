import "./Cards.css";

function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.img} alt="card-img" />
      <h3>{props.h3}</h3>
      <p className="card-p">{props.p}</p>
    </div>
  );
}
export default Card;
