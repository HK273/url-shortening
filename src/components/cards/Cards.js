import "./Cards.css";

function Card(props) {
  return (
    <div className={props.class}>
      <div className={props.left}></div>
      <div className={props.right}></div>
      <img className="card-img" src={props.img} alt="card-img" />
      <h3>{props.h3}</h3>
      <p className="card-p">{props.p}</p>
    </div>
  );
}
export default Card;
