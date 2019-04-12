import React from 'react';
import {Recipe} from './Recipe';


export class RecipeList extends React.Component {

    render() {


        const {recipes} = this.props;

        return (
            <>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1>List of recipes</h1>
                        </div>
                    </div>
                    <div className="row">
                        {recipes.map((item) => {
                            console.log(item)
                            return (
                                <Recipe recipe={item} />
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}



// make this display on the recipes PAGE 

//this should recieve an array of recipes from data folder

//this should map through the array from data folder and display a
//component <Recipe /> for each item

