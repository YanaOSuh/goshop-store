import { Link } from "react-router-dom";

function Sale() {
    return (
    <div>
        <div className='saleSection'>
            <div className='saleSection-block'>
                <p className='saleSection-saleText'>Limited edition</p>
                <p className='saleSection-saleOff'>50% off</p>
                <Link to={`/`}>
                    <button className='saleSection-btn'>see all collection</button>
                </Link>
            </div>
        </div>
        <div className="saleShipping">
            <hr />
            <div className="saleShipping-textOne">Free Standard Shipping</div>
            <div className="saleShipping-textTwo">Free Standard Shipping</div>
        </div>
    </div>
    )
}
export default Sale;