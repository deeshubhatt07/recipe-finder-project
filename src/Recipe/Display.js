import React, {Component} from 'react';
import './Display.css'
import Search from './Search';
import Header from '../Header/Header';
import Controller from '../Controller'

class Display extends Component{

    constructor(props){
        super(props);
        this.state = {
            dataFound: 0,
            recipies: [],
            name: "fords",
            
        }
    }

    componentDidMount(){
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange",function(){
            if(this.readyState === 4){
                console.log(JSON.parse(this.responseText))
                if(JSON.parse(this.responseText).meals!=null){
                    that.setState({recipies: JSON.parse(this.responseText).meals, dataFound: 1})
                }
            }
        })
        xhr.open("GET","https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/search.php?s=")
        xhr.setRequestHeader("Cache-Control", "no,cache");
        xhr.send(data);

    
    }
    

    render(){
        let x=0;

        return(
            <div className="display">
                <Header />
                <Search />

                {this.state.recipies.filter(contact => contact.strMeal.toLowerCase().includes(this.props.title.toLowerCase())).map(dish => {
                    x=x+1;
                    return(
                        <Controller key={this.props.idMeal} dish={dish} imag={this.state.recipies.strMealThumb} />
                    )
                })}

                {x===1 ? <div></div> : <div className="Datalite">No data has been received</div>}

                {/* {<div style={{textAlign: "center", fontWeight:"bold", marginTop: 25}}>No Data has been received</div>} */}
            </div>
        )
    }
}

export default Display;