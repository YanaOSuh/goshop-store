import { data } from "./data";
import { useParams, useNavigate } from "react-router-dom";
import './App.css';

function AboutProduct() {
    const navigate = useNavigate();
    const { title } = useParams();

    return (
        <div className="aboutProductSection">
            {data.filter((item) => item.title === title).map((elem, index) => {
                return (
                    <div key={index} className="aboutProductContainer">
                        <h3>{elem.name}</h3>
                        <img 
                            src={elem.image}
                            alt="item"
                            width="350px"
                        />
                        <h4 className="abotProductPrice">$ {elem.price}</h4>
                        <button className="btn" onClick={() => navigate(-1)}>
                        🢨 Go back
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
export default AboutProduct;