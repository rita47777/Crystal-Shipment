import React from 'react'
import About from '../assets/about.png'
import Pic1 from '../assets/1.png'
import Pic2 from '../assets/2.png'
import Pic3 from '../assets/3.png'
import Icon1 from '../assets/icon1.png'
import Icon2 from '../assets/icon2.png'
import Icon3 from '../assets/icon3.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Form from './Form'

function Homepage() {
    const CardsData = [
        { image: Pic1, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored ...' },
        { image: Pic2, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain ...' },
        { image: Pic3, title: 'Land Freight', content: 'Cargo are transported at some stage of their journey along the world’s roads where we...' },
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // breakpoint for desktop
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // breakpoint for tablet/mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="bg-image">
                <div className="container pt-5 text-center" style={{ lineHeight: '1.75' }} data-aos='bounce-in'>
                    <div className="pt-5">
                        <h1 style={{ fontSize: '7vmin', fontWeight: 'bold', marginTop: '60px' }}>Easy & Quick Cargo Shipping Services </h1>
                        <p style={{ fontSize: '4vmin' }}>Book low cost sea freight shipping services. Get an instant quote.</p>
                        <a href="/tracking" className='btn btn-danger'>Track Goods Here</a>
                    </div>
                </div>
            </div>

            <div className="text-center pt-3" style={{ lineHeight: '1.75' }} data-aos='fade-up'>
                <h2 style={{ fontSize: '5vmin', fontWeight: 'bold' }}>Welcome to Crystal Shipment</h2>
                <div className="bg-red"></div>
                <p className='pt-2'>Crystal Shipment is more than logistics. We can also optimize your packaging, manage your materials sourcing, and so much more.</p>
            </div>

            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-5 pb-3" data-aos='fade-up'>
                        <img src={About} alt="img" className='img-fluid rounded' />
                    </div>
                    <div className="col-md-7" data-aos="fade-up">
                        <p className='text-danger'>TRANSPORTATION COMPANY</p>
                        <h2 style={{ fontSize: '5vmin', fontWeight: 'bold' }}>We Provide Full Range Logistics Solution</h2>
                        <p>We strongly believe that pursuing all of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with us, with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern , by engaging our employees and nurture investment on the stock holds market we show concern.</p>
                        <a href="#" className='btn btn-danger'>Learn more</a>
                    </div>
                </div>
            </div>
            <div className="text-center pt-5">
                <p className='text-danger' data-aos='fade-up'> TYPES OF LOGISTICS </p>
                <h2 style={{ fontSize: '5vmin', fontWeight: 'bold' }}>Covering All Logistics Fields</h2>
            </div>

            <div className="container pt-3">
                <div className="row">
                    <Slider {...settings}>

                        {CardsData.map((card, index) => (
                            <div key={index} className="col-md-4 pb-5">
                                <div className="card">
                                    <img src={card.image} className="card-img-top" alt="img" />
                                    <div className="card-body">
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text">{card.content}<a href="#" className='text-danger text-decoration-none'>Read more</a></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>

            {/* const CardsData = [
                {image:Pic1 , title: '' , content: '',},
                {image:Pic1 , title: '' , content: '',},
                {image:Pic1 , title: '' , content: '',},
            ];

            {CardsData.map(()=>(
                <div key={index}className="col-md-4 pb-5">
                <div className="card">
                    <img src={Pic1} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Air Freight</h5>
                        <p className="card-text">As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation... <a href="#" className='text-danger text-decoration-none'>Read more</a></p>
                    </div>
                </div>
            </div>
            ))} */}

            <div className="text-center pt-2">
                <a href="#" className='btn btn-danger'>Load more</a>
            </div>

            <div className="bg-warning mt-4" style={{ minHeight: '200px', padding: '20px' }}>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-8" data-aos='fade-up'>
                            <h2 style={{ fontSize: '5vmin', fontWeight: 'bold' }}>Delivering your world one package at a time</h2>
                            <p>Crystal Shipment is more than logistics.</p>
                        </div>
                        <div className="col-md-4 text-md-end text-sm-start" data-aos='fade-up'>
                            <a href="#" className='btn btn-danger'>Request a Quote</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6" data-aos='fade-up'>
                        <h2 style={{ fontSize: '5vmin', fontWeight: 'bold' }}>WHY CHOOSE US?</h2>
                        <div className="d-flex mt-3">
                            <div className="flex-grow-1 me-2">
                                <img src={Icon1} alt="img" className='img-fluid' />
                            </div>
                            <div className="flex-grow-1 ms-2">
                                <h4 style={{ fontSize: '3vmin', fontWeight: 'bold' }}>Global supply Chain Solutions</h4>
                                <p>Efficiently unleash cross-media information without cross-media value.</p>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="flex-grow-1 me-2">
                                <img src={Icon2} alt="img" className='img-fluid' />
                            </div>
                            <div className="flex-grow-1 ms-2">
                                <h4 style={{ fontSize: '3vmin', fontWeight: 'bold' }}>Mobile Shipment Tracking</h4>
                                <p>We Offers intelligent concepts for road and tail and well as complex special transport services</p>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="flex-grow-1 me-2">
                                <img src={Icon3} alt="img" className='img-fluid' />
                            </div>
                            <div className="flex-grow-1 ms-2">
                                <h4 style={{ fontSize: '3vmin', fontWeight: 'bold' }}>Careful Handling of Valuable Goods</h4>
                                <p>Cargo HUB are transported at some stage of their journey along the world’s roads</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos='fade-up'>
                        <h2 style={{ fontSize: '5vmin', fontWeight: 'bold' }}>REQUEST A QUOTE</h2>
                        <Form />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Homepage