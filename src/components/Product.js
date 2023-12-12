import { Link } from 'react-router-dom';

export default function Product(props) {
    return (
        <div className="card" style={{width:500}}>
            <img src="./123.jpg" alt={props.product.title} className="card-img" />
            <h1 className="card-title">{props.product.title}</h1>
            <div className="card-text">{props.product.description}</div>
            <Link to={props.product.link}>More</Link>
        </div>
    );
}