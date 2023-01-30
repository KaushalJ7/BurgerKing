import React,{Component} from 'react';
import './Search.css';

const lurl = "http://localhost:9500/locations"
const rurl = "http://localhost:9500/ourmenus?cityid="

class Search extends Component {
    constructor(){
        super()

        this.state={
            location:'',
            Area:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city_id} key={item.city_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }


    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.menu_id} key={item.menu_id}>
                        {item.menu_name} | 
                        {item.address}
                    </option>
                )
            })
        }
    }

    handleCity = (event) =>{
        let cityid = event.target.value;
        fetch(`${rurl}${cityid}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({Area:data})
        })
    }


    render(){
        return(
            <>
                <div id="poster">
                    <div id="container">
                        <div id="logo">
                            <img src="https://i.ibb.co/PGjhgrZ/TB-Icon.png" alt="BK Icon"/>
                        </div>
                        <div id="heading">
                            Find BurgerKing Stores NearBy
                        </div>
                        <div className="dropdown">
                            <select onChange={this.handleCity}>
                                <option>--Select City--</option>
                                {this.renderCity(this.state.location)}
                            </select>
                            <select className="restSelect">
                                <option>--Select Area--</option>
                                {this.renderRest(this.state.Area)}
                            </select>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    // all api on page load
    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
    
}

export default Search