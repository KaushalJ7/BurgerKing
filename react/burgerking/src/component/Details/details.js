import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './details.css';
import MenuDisplay from './menuList';

const rurl = "http://localhost:9500/details";
const murl = "http://localhost:9500/menu";

class Details extends Component{
    constructor(props){
        super(props)

        this.state={
            details:'',
            menuList:'',
            mealId:sessionStorage.getItem('mealId'),
            userItem:''
        }
    }

    addToCart=(data)=>{
        this.setState({userItem:data})
    }

    proceed = () => {
        sessionStorage.setItem('menu',this.state.userItem)
        this.props.history.push(`/placeOrder/${this.state.details.menu_name}`)
    }

    render(){
        // let details = this.state.details;
        let {details} = this.state;
        return(
            <>
                <div id="mainContent">
                    <div className="imgDiv">
                        <img src={details.image_gallery} alt={details.menu_name}/>
                    </div>
                    <div className="contentDiv">
                        <h2>{details.menu_name}</h2>
                        {/* <h3>1Whooper + 1Cheesy Burger + 1Fries + 1Pepsi</h3> */}
                        <i class="fa-solid fa-star starclass"></i>
                        <i class="fa-solid fa-star starclass"></i>
                        <i class="fa-solid fa-star starclass"></i>
                        <i class="fa-solid fa-star starclass1"></i>
                        <i class="fa-solid fa-star starclass1"></i>
                        <h4> {details.rating_text}</h4>
                        <h4> Rating {details.average_rating} out of 5</h4>
                        <h4>Price: Rs.  {details.cost}</h4>
                        <div class="feature_container">
                            <figure>
                                <img src="https://i.ibb.co/jfCdD1T/sanitize.png" alt="sanitize"/>
                                <figcaption><b>Cleaned & sanitized</b></figcaption>
                            </figure>
                            <figure>
                                <img src="https://i.ibb.co/6gk18PG/organic.png" alt="organic"/>
                                <figcaption><b>Organic & Best quality</b></figcaption>
                            </figure> 
                        </div>
                  
                        <Tabs>
                            <TabList>
                                <Tab>About Us</Tab>
                                <Tab>Contact Us</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>{details.menu_name}</h2>
                                <p>{details.menu_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h2>{details.address}</h2>
                                <h3>Phone: {details.contact_number}</h3>
                            </TabPanel>
                        </Tabs>
                        <div>
                            <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">Back</Link> &nbsp;
                            <button  className="btn btn-success">Procceed</button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="col-md-12">
                    <MenuDisplay menuData={this.state.menuList}
                    finalOrder={(data) => {this.addToCart(data)}}/>
                </div>
            </>
        )
    }

    //api with async await
    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1]
        let response = await axios.get(`${rurl}/${restId}`)
        let menuData = await axios.get(`${murl}/${restId}`)
        this.setState({details:response.data[0],menuList:menuData.data})
    }
}

export default Details;