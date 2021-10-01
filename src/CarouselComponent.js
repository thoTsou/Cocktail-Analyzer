import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormControl, Button, Carousel } from 'react-bootstrap';
import pic1 from "./pics/pic1.jpg";
import pic2 from "./pics/pic2.jpg";
import pic3 from "./pics/pic3.jpg";

class CarouselComponent extends React.Component {
    

    render() {
        return (
                <Carousel style={{ marginTop: "1em" }} id="pisCarousel">
                    <Carousel.Item interval={5000} style={{ height: "22em" }}>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="Image One"
                            style={{ objectFit: "cover" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000} style={{ height: "22em" }}>
                        <img
                            className="d-block w-100"
                            src={pic2}
                            alt="Image Two"
                            style={{ objectFit: "contain" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000} style={{ height: "22em" }}>
                        <img
                            className="d-block w-100"
                            src={pic3}
                            alt="Image THree"
                            style={{ objectFit: "contain" }}
                        />
                    </Carousel.Item>
                </Carousel>
                );
    }
}

export default CarouselComponent;