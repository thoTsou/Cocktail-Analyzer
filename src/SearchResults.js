import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Spinner } from 'react-bootstrap';


class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            drinks: []
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.theName !== this.props.theName) {
            fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + this.props.theName.trim())
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            drinks: result.drinks
                        });
                        console.log(this.state.drinks);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });

                    }
                )
        }
    }

    render() {

        if (this.props.theName === null || this.props.theName === "") {
            //alert("null")
            return null;
        }

        const { error, isLoaded, drinks } = this.state;
        if (error) {
            //alert("error");
            return <p>Error: {error}</p>;
        } else if (!isLoaded) {
            return (<Spinner style={{ marginTop: "1em" }} animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>);
        } else if (this.state.drinks !== null && this.state.drinks.length != 0) {
            //alert("done")
            return (
                <ul style={{ marginTop: "1em" }}>
                    {drinks.map(drink => (
                        <li key={drink.idDrink} style={{marginTop:"1em"}}>
                            <h5><u>{drink.strDrink}</u></h5>
                            <p><b><u>Ingredients:</u></b></p>
                            {this.renderIngredientsList(drink)}
                            <p><b><u>Recipe:</u></b></p>
                            {drink.strInstructions}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return <p style={{ marginTop: "1em", fontStyle: "oblique" }}>Either there is no info about this cocktail, or you typed it wrong...</p>;
        }

    }

    renderIngredientsList(drink) {

        let igredientsArray = ["strIngredient1", "strIngredient2", "strIngredient3", "strIngredient4", "strIngredient5", "strIngredient6", "strIngredient7", "strIngredient8", "strIngredient9", "strIngredient10", "strIngredient11", "strIngredient12", "strIngredient13", "strIngredient14", "strIngredient15"];
        let igredientsMeasureArray = ["strMeasure1", "strMeasure2", "strMeasure3", "strMeasure4", "strMeasure5", "strMeasure6", "strMeasure7", "strMeasure8", "strMeasure9", "strMeasure10", "strMeasure11", "strMeasure12", "strMeasure13", "strMeasure14", "strMeasure15"];

        let igredients = "";

        for (let i = 0; i < 15; i++) {

            if (drink[ igredientsArray[i+1] ] == null ) {

                igredients = igredients + drink[igredientsArray[i]] + ": " + drink[igredientsMeasureArray[i]]+"."
                break;
            }
            
            if (drink[igredientsArray[i]]) {

                igredients = igredients + drink[igredientsArray[i]] + ": " + drink[igredientsMeasureArray[i]] + ", "

            }
        }

        return <p>{igredients}</p>;
    };
}

export default SearchResults;