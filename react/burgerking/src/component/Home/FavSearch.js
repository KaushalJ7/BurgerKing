import React,{Component} from 'react';
import './FavSearch.css';
import FavDisplay from './FavDisplay';

const qurl = "http://localhost:9500/favmenu"

class FavSearch extends Component {
    constructor(){
        super()

        this.state={
            mealTypes:''
        }
    }
    render(){
        return(
            <>
                <div id="tbfavourites">
                    <span id="favouritesheading">Here are your top</span>
                    <span id="favouritessubheading">Favourites</span>
                    <FavDisplay mealData={this.state.mealTypes}/>
                </div>
            </>
        )
    }

    componentDidMount(){
        fetch(`${qurl}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealTypes:data})
        })
    }
    
}

export default FavSearch