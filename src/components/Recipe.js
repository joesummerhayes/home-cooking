import React from 'react';
import {Link} from 'react-router-dom';

export class Recipe extends React.Component {





    render() {
        const {title, publisher, image_url, recipe_id, source_url, ingredients, stars, portions, time, price} = this.props.recipe

        return (
            <>
                <div className="col-12" style={{padding: "1rem"}}>
                    <div className="ui card">
                        <div className="image">
                            <img src={image_url} alt={recipe_id} />
                        </div>
                        <div className="content" style={{padding: "1rem"}}>
                            <span className="header">{title}</span>
                            <div className="description">
                                {publisher}
                            </div>
                        </div>
                        <Link
                            className="ui button text-uppercase"
                            style={{letterSpacing: "0.1rem", fontSize: "0.8rem"}}
                            to={{
                                pathname: `recipes/:${recipe_id}`,
                                state: {
                                    title,
                                    publisher,
                                    image_url,
                                    recipe_id,
                                    source_url,
                                    ingredients,
                                    stars,
                                    portions,
                                    time,
                                    price
                                }
                            }}
                        >
                            more details
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}