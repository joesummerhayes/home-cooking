import React from 'react';

export class Recipe extends React.Component {


    render() {
        //console.log(this.props.recipes)
        const {title, publisher, image_url} = this.props.recipe

        return (
            <>
                <div className="ui card">
                    <div className="image">
                        <img src={image_url} />
                    </div>
                    <div className="content">
                        <a class="header">{title}</a>
                        <div className="meta">
                            <span class="data">{publisher}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}