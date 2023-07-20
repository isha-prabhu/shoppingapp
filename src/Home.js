import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg'></img>
        <div className='home__row'>
            <Product 
            id="12121212"
            title="boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Aqua Blue)" 
            price={1499} 
            image="https://m.media-amazon.com/images/I/61u1VALn6JL._SY450_.jpg" 
            rating={4}
            />
            <Product 
            id="23232323"
            title="Glowic Women, Cute Hand Girls for College, Travel, Grocery, Reusable Shopping Book Bag(WBAG-36) (White)"
            price={399}
            image="https://m.media-amazon.com/images/I/516ELxgg8hS._UY695_.jpg"
            rating={3}
            />
            
        </div>

        <div className='home__row'>
             <Product 
             id="34343434"
             title="Samsung Galaxy Watch 3 45mm Bluetooth (Mystic Black),SM-R840NZKAINS"
             price={14999}
             image="https://m.media-amazon.com/images/I/61abrgjIeuL._SX679_.jpg"
             rating={4}
             />
             <Product 
             id="45454545"
             title="WildHorn Leather Wallet for Men I Ultra Strong Stitching I 6 Credit Card Slots I 2 Currency Compartments I 1 Coin Pocket"
             price={285}
             image="https://m.media-amazon.com/images/I/91ht6paKEWL._SX679_.jpg"
             rating={5}
             />
             <Product 
             id="56565656"
             title="Echo Dot (3rd Gen), Certified Refurbished, Black – Improved smart speaker with Alexa – Like new, backed with 1-year warranty"
             price={2499}
             image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX466_.jpg"
             rating={5}
             />
        </div>

        <div className='home__row'>
              <Product 
              id="67676767"
              title="boAt Xtend/Xtend RTL Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, 5 ATM & 7 Days Battery(Sandy Cream)"
              price={2799}
              image="https://m.media-amazon.com/images/I/61gscZYmaoL._SY450_.jpg"
              rating={4}
              />
        </div>


      </div>
    </div>
  )
}

export default Home
