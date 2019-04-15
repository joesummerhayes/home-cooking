import React from 'react';
import {Link} from 'react-router-dom';

export class Recipe extends React.Component {



    render() {
        const {title, publisher, image_url, recipe_id, source_url, ingredients} = this.props.recipe

        return (
            <>
                <div className="col-12" style={{padding: "1.5rem"}}>
                    <div className="ui card joe-container">
                        <div className="image">
                            <img src={image_url} alt={recipe_id} />
                        </div>
                        <div className="content" style={{padding: "3rem"}}>
                            <span className="header">{title}</span>
                            <div className="description">
                                <span className="header">Ingredients</span>
                            </div>
                            <ul className="list-group">
                                {ingredients.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ul>
                        </div>
                        <button className="button">more details</button>
                    </div>
                </div>
            </>
        )
    }
}