import React, { Component } from "react";

class Cathegories extends Component {
    render() {
        return(
            <>
                <h3 className='title'> Categories</h3>
                <ul className="cathegories__list">
                    { this.props.categories.map(el => (
                        <li className="categories__item" key={ el.id }>
                            { el.name }
                        </li>
                    )) }
                </ul>
            </>
        )
    }
}

export default Cathegories;