import { useState } from 'react';
import { data } from './data';
import './App.css';
import Clothes from './Clothes';
import Buttons from './Buttons';

function Home() {
    const [clothes, setClothes] = useState(data);

    return (
    <div className='shopSection'>
        <div className='cont'>
            <h2 className='back'>Free Standard Shipping</h2>
        </div>
        <Buttons setClothes={setClothes} />
        <Clothes itemsForSale = {clothes} />
    </div>
    )
}
export default Home;