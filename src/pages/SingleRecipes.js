import React from 'react';
import {FaSplotch} from 'react-icons/fa';

export class SingleRecipes extends React.Component {

    render() {
        console.log(this.props)
        const {image_url, ingredients, publisher, recipe_id, source_url, title, stars} = this.props.location.state;
        console.log(stars)
        return (
            <div style={{paddingBottom: "3rem"}}>
                <div className="ui centered card" style={{width: "700px", paddingBottom: "1rem"}}>
                    <div className="image">
                        <img src={image_url}></img>
                    </div>
                    <div className="content">
                        <a className="header">{title}</a>
                    </div>
                    <div className="description" style={{paddingLeft: "3rem", paddingBottom: "1.5rem"}}>
                        <h2>Ingredients</h2>
                        <ul className="list-group">
                            {ingredients.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                    </div>
                    <div style={{paddingLeft: "2rem"}}>
                        {stars.map((star) => {
                            return <FaSplotch style={{color: "#D4AF37", fontSize: "2rem"}} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}


// <div class="ui centered card">
//     <div class="image">
//         <img src="/images/avatar2/large/elyse.png">
//   </div>
//         <div class="content">
//             <a class="header">Elyse</a>
//         </div>
//     </div>


//     <div className="container my-5">
//         <div className="row">
//             <div className="col-10 mx-auto col-md-6 my-3">
//                 <Link to='/recipes' className="btn btn-warning mb-5 text-capitalize">
//                     back to recipes list
// </Link>
//                 <img src={image_url} className="d-block w-100" style={{maxHeight: '30rem'}} alt="recipe" />
//             </div>
//             {/* info */}
//             <div className="col-10 mx-auto col-md-6 my-3">
//                 <h6 className="text-uppercase">{title}</h6>
//                 <h6 className="text-warning text-capitalize text-slanted">provided by {publisher}</h6>
//                 <a href={publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 text-capitalize">
//                     publisher webpage
//         </a>
//                 <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-2 mx-2 text-capitalize">
//                     recipe url
//         </a>
//                 <ul className="list-group mt-4">
//                     <h2 className="mt3 mb-4">Ingredients</h2>
//                     {ingredients.map((item, index) => {
//                         return (<li key={index} className="list-group-item text-slanted">{item}</li>)
//                     })}
//                 </ul>
//             </div>
//         </div>
//     </div>


// So i have the id and now i need to use it to find the corrisponding recipe
//from the data store. .find? or .match? or something 