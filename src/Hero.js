import heroPic from './images/hero-pic.png';
import summerSale from './images/summerSale.png';
import sportsSale from './images/sportsSale.png';
import casualWear from './images/casualWear.png';
import './App.css';
import { Link } from 'react-router-dom';

function Hero() {
    return <div className='heroSection'>
    <div className='heroContainer'>
        <div className='heroTextBox'>
            <h1 className='heroHeading'>New Summer Collection</h1>
            <p className='heroText'>Shop the best clothes in the world</p>
            <Link to={`/`}>
                <button className='heroBtn'>SHOP NOW</button>
            </Link>
        </div>
        <div>
            <img src={heroPic} alt='fashion lady'/>
        </div>
    </div>
    <div className='heroTicker'>
        <div className='heroTicker-container'>
            <p>● Customer support</p>
            <p>● Free Standard Shipping</p>
            <p>● Customer support</p>
            <p>● Free Standard Shipping</p>
            <p>● Customer support</p>
            <p>● Free Standard Shipping</p>
        </div>
    </div>
    <div className='heroSalePics'>
        <div className='heroSaleBlock'>
            <img src={casualWear} alt='casual wear' width='480px' height='300px' />
        </div>
        <div className='heroSaleBlock'>
            <img src={summerSale} alt='summer sale'/>
        </div>
        <div className='heroSaleBlock'>
            <img src={sportsSale} alt='sports sale'/>
        </div>
    </div>
    </div>
}
export default Hero;