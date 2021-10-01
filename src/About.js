import React from 'react';
import ReactDOM from 'react-dom';
import CarouselComponent from './CarouselComponent';

const content = (<div class="container" style={{ marginTop: "3em" }}>

    <div class="row justify-content-center">
        <div class="col-lg-8 col-md-8 col-sm-12">
            <h4>
                Purpose of this SPA app is to search your favorite cocktail by name and see a lot of details about it (ingredients, recipe .....)
            </h4>
        </div>
    </div>
    <div class="row justify-content-center">
            <div class="col-lg-7 col-md-7 col-sm-12">
                {/* Carousel start */}
                <CarouselComponent />
                {/* Carousel END */}
                </div>
            </div>
</div>);

class About extends React.Component {
    render() {
        return <div class="container" style={{ marginTop: "3em", fontStyle: "oblique" }}>
            {content}
        </div>;
    }
}

export default About;