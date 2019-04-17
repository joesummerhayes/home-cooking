import React from 'react';
import {RecipeList} from '../components/RecipeList';
import {recipeData} from '../data/tempList';

export class Recipes extends React.Component {



    render() {
        return (
            <>
                <RecipeList recipes={recipeData} />
            </>
        )
    }
}