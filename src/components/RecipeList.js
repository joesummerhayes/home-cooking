import React from 'react';
import {Recipe} from './Recipe';


export class RecipeList extends React.Component {

    render() {


        const {recipes} = this.props;

        return (
            <>
                <div className="canvas">
                    <div className="container">
                        <div className="row">
                            <div className="mx-auto text-center text-capitalize mb-3" >
                                <h1 className="joe-font" style={{color: "black", paddingTop: "2.5rem"}}>List of recipes</h1>
                            </div>
                        </div>
                        <div className="row" >
                            {recipes.map((item) => {
                                return (
                                    <div className="mx-auto">
                                        <Recipe recipe={item} key={item.recipe_id} />
                                    </div>
                                )
                            })}
                        </div>
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

