import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import styes from '../data/tempList';



export class Recipe extends React.Component {





    render() {
        const {title, publisher, image_url, recipe_id, source_url, ingredients, stars, portions, time, price} = this.props.recipe
        console.log(image_url);

        return (
            <>
                <RecipeWrapper>
                    <div className="col-12" style={{padding: "1rem"}}>
                        <div className="ui card hello">
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
                </RecipeWrapper>
            </>
        )
    }
}


const RecipeWrapper = styled.div`
.hello {
    transition: all 0.3s ease-in-out;
}
.hello:hover {
    box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.5);
    transform: scale(1.15);
}

`