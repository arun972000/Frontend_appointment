import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


function CarouselHome() {
  return (
    <Carousel fade className="mb-5">
      <Carousel.Item>
      <Image src="https://deepahospital.in/wp-content/uploads/2023/02/Web-Banner-02.jpg" fluid />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://deepahospital.in/wp-content/uploads/2023/02/Web-Banner-01.jpg" fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://deepahospital.in/wp-content/uploads/2023/02/Web-Banner-03.jpg" fluid />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;