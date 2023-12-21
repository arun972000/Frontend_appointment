

import CarouselHome from "./carosel/HomeCarosel"
import ServiceCard from "./carosel/ServiceCard"
import { treatment } from "./carosel/services"







const Home = () => {

    return (
        <div>
            <CarouselHome />
            <div className="container">
                <div className="row">
                    
                    <h2 className="text-primary font-weight-bold mb-5">Our Services</h2>
                    {treatment.map((item, i) => (<ServiceCard item={item} key={i} />))}
                </div>
            </div>
        </div>

    )
}

export default Home