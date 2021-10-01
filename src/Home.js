import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormControl, Button } from '../node_modules/react-bootstrap';
import CarouselComponent from './CarouselComponent';
import SearchResults from './SearchResults';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theCocktailName: ""
        };
    }


    handleSearch(name) {
        console.log(name);

        this.setState({
            theCocktailName: name
        })
    }

    render() {
        return (<div class="container" style={{ marginTop: "3em" }}>

            <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-12">
                    <h3> Type the name, explore the cocktail </h3>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-12">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                            style={{ width: "70%" }}
                            id="theCocktailName"
                        />
                        <Button variant="outline-success" onClick={() => this.handleSearch(document.getElementById("theCocktailName").value)}>Search</Button>
                    </Form>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-8 col-sm-12 align-self-center">
                    <SearchResults theName={this.state.theCocktailName} />
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
    }
}

export default Home;