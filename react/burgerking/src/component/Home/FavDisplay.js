import React from 'react';
import {Link} from 'react-router-dom';

const FavDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype_id}>
                        <div className="boxcontainer">
                            <div class="component1">
                                <img src={item.image_gallery} alt={item.mealtypes}/> 
                            </div>
                            <div className="component2">
                             {item.menu_name}
                            </div>
                        </div>
                     </Link>
                )
            })
        }
    }


    return(
        <div id="Special">
            {listMeal(props)}
        </div>
    )
}

export default FavDisplay