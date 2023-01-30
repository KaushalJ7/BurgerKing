import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype_id}>
                            <div className="tilecontainer">
                                <div className="tilecomponent1">
                                    <img src={item.image_gallery} alt={item.mealtypes}/> 
                                </div>
                                <div className="tilecomponent2">
                                   {item.menu_name}
                                </div>
                            </div>
                    </Link>
                )
            })
        }
    }


    return(
        <div id="main">
            {listMeal(props)}
        </div>
    )
}

export default QuickDisplay