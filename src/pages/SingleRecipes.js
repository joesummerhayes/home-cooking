import React from 'react';
import {FaSplotch, FaPoundSign} from 'react-icons/fa';
import {TiArrowBack} from 'react-icons/ti';
import {IoIosPerson, IoMdClock, IoMdStar} from 'react-icons/io';
import {Link} from 'react-router-dom';

export class SingleRecipes extends React.Component {

    render() {
        console.log(this.props)
        const {image_url, ingredients, publisher, recipe_id, source_url, title, stars, portions, time, price} = this.props.location.state;
        return (
            <div style={{paddingBottom: "3rem"}} className="canvas">
                <div className="ui centered card" style={{width: "700px", paddingBottom: "1rem"}}>
                    <div className="image">
                        <img src={image_url}></img>
                    </div>
                    <div className="content">
                        <a className="header">{title}</a>
                    </div>
                    <div className="content">
                        <div className="dataContainer">
                            <div>
                                <IoIosPerson style={{fontSize: "1.5rem"}} />
                                {portions}
                            </div>
                            <div>
                                <IoMdClock style={{fontSize: "1.5rem"}} />
                                {time}
                            </div>
                            <div>
                                <FaPoundSign style={{fontSize: "1.5rem"}} />
                                {price}
                            </div>
                        </div>
                    </div>
                    <div className="description" style={{paddingLeft: "3rem", paddingBottom: "1.5rem"}}>
                        <h2>Ingredients</h2>
                        <ul className="list-group">
                            {ingredients.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                    </div>
                    <div style={{paddingLeft: "2rem", paddingBottom: "2rem"}}>
                        {stars.map((star) => {
                            return <IoMdStar style={{color: "#D4AF37", fontSize: "2rem"}} />
                        })}
                    </div>
                    <Link
                        className="ui primary btn text-uppercase"
                        to={{
                            pathname: '/recipes'
                        }}
                        style={{
                            letterSpacing: "0.1rem"
                        }}
                    >
                        <TiArrowBack style={{
                            fontSize: "3rem",
                            paddingRight: "0.8rem"
                        }} />
                        back to recipes
                    </Link>
                </div>
            </div>
        )
    }
}

