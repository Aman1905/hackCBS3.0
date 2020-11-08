import React from 'react'
import "./Home.css";
import banner1 from "./banner1.jpg"
import Product from './Product';
import tea from './tea.jpg';
import Dettol from "./Dettol.jpg"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img className="home__image" src={banner1} />

            <div className="home__row">
                <Product id="1234567" title="TATA Tea Gold Really tastes good" price={29.99} image={tea} rating={5} />
                <Product id="1234568" title="Dettol Sanitizer Pack of 2 Kills germs 99.99% and helps you live germ free life" price={29.99} image={Dettol} rating={4} />
            </div>

            <div className="home__row">
            <Product id="1234566" title="TATA Tea Gold It increases metabolism in your body. TATA tea desh ka tea" price={29.99} image={tea} rating={3} />

            <Product id="1234565" title="TATA Tea Gold It increases metabolism in your body. TATA tea desh ka tea" price={29.99} image={tea} rating={5} />

            <Product id="1234562" title="TATA Tea Gold It increases metabolism in your body. TATA tea desh ka tea" price={29.99} image={tea} rating={4}/>
            </div>

            <div className="home__row">
            <Product id="1234561" title="TATA Tea Gold It increases metabolism in your body. TATA tea desh ka tea" price={29.99} image={tea} rating={4} />
            </div>

            </div>
        </div>
    )
}

export default Home