import React from 'react'
import handmade from "../assets/handmade.png";
import organic from "../assets/organic.png";
import {Link} from 'react-router-dom';

export default function ProductsScreen() {
    return (
        <>
            <section className="uk-section">
                <div className="uk-container uk-flex-middle uk-flex-center uk-flex-direction-column uk-flex" data-uk-height-viewport="offset-top:true;">
                    <div className="uk-width-1-1 uk-margin-auto uk-child-width-1-2@m" data-uk-grid>
                        <div>
                            <Link to="/handmade"><img src={handmade} alt="handmade" data-uk-img className="uk-width-1-1 uk-height-1-1"/></Link>
                        </div>
                        <div>
                            <Link to="/organic"><img src={organic} alt="organic" data-uk-img className="uk-width-1-1 uk-height-1-1"/></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
