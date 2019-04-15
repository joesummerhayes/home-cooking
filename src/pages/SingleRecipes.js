import React from 'react';
import {recipeData} from '../data/tempList';

export class SingleRecipes extends React.Component {
    state = {
        recipe: '',
        ingredients: []
    }

    render() {
        console.log(this.props)
        const {id} = this.props.match.params.id
        return (
            <>
                <h1>hello from single recipe</h1>
            </>
        )
    }
}


// So i have the id and now i need to use it to find the corrisponding recipe
//from the data store. 