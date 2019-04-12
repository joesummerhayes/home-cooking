import React from 'react';
import {RecipeList} from '../components/RecipeList';
import {recipeData} from '../data/tempList';

export class Recipes extends React.Component {

    state = {
        recipes: []
    }

    render() {
        return (
            <>
                <h1>hello from Recipes</h1>
                <RecipeList recipes={recipeData} />
            </>
        )
    }
}