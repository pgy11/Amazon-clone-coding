import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt=''
                />

                <div className='home__row'>
                    <Product id='12321341' title='The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses' 
                     price={29.99}
                     image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                     rating={5} />
                    <Product id='49538094' title='PHISINIC Stand Mixer, 6.5-QT 800W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Power Hub for Attachment (Red)'
                     image='https://images-na.ssl-images-amazon.com/images/I/71PcRhHJaSL._AC_SY450_.jpg'
                     price={247.99}
                     rating={4}
                    />
                </div>

                <div className='home__row'>

                    <Product id='95416987' title='Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow'
                     image='https://images-na.ssl-images-amazon.com/images/I/51aqYc1QyrL._SX379_BO1,204,203,200_.jpg'
                     price={42.09}
                     rating={5} 
                    />
                    <Product id='45026874' title='Quaker Instant Oatmeal, Lower Sugar Maple and Brown Sugar, Individual Packets, 48 Count'
                     image='https://images-na.ssl-images-amazon.com/images/I/91GOpDe1DPL._SX425_.jpg'
                     price={14.24}
                     rating={5}
                    />
                    <Product id='22227320' title='Tablet 10.1 Inch, Android 9.0 Pie Tablet PC with 32GB ROM/128GB Expand'
                     image='https://images-na.ssl-images-amazon.com/images/I/71aZPDLMNHL._AC_SY355_.jpg'
                     price={109.99}
                     rating={4}
                    />
                </div>

                <div className='home__row'>
                    <Product id='18950015' title='SAMSUNG 32-Inch Odyssey G5 Gaming Monitor with 1000R Curved Screen, 144Hz, 1ms, FreeSync Premium, QHD (LC32G55TQWNXZA), Black'
                     image='https://images-na.ssl-images-amazon.com/images/I/61Lb5JbFxML._AC_SY355_.jpg'
                     price={468.95}
                     rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
