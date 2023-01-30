import React,{Component} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const qurl = "http://localhost:9500/ourmenu"

class QuickSearch extends Component {
    constructor(){
        super()

        this.state={
            mealTypes:''
        }
    }
    render(){
        return(
            <>
                <div id="ourmenu">
                    <span id="quickheading">Fall in love with</span>
                    <span id="quicksubheading">Our Menu</span>
                    <QuickDisplay mealData={this.state.mealTypes}/>
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

export default QuickSearch