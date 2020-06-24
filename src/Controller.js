import React from 'react'
import './Controller.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


class Controller extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            color: "black"
        }
        this.clicked = this.clicked.bind(this)
    }

    clicked(){
        if(this.state.color === "red"){
            this.setState({color: "black"})
        }
        else{
            this.setState({color: "red"})
        }
    }

    render(){

        const mappers = this.props.dish

        return(
            <div>
                {/* {<h3 className="container" style={{marginLeft: 15, marginRight:15, borderLeft: "25%", textAlign: "center"}}>{this.props.dish.strMeal}</h3>} */}
                <div className="container" style={{marginLeft: 15, marginRight:15, borderLeft: "25%", textAlign: "center"}} onClick={this.clicked}>{mappers.strMeal}<span className="icon" style={{color: this.state.color}}><FavoriteBorderIcon /></span></div>
                <div className="maindisplay">
                    <img src={this.props.dish.strMealThumb} alt="icon" />
                    <div className="submain">
                        <span className="headers">category of meal: </span>{this.props.dish.strCategory}<br/>
                        <span className="headers">Area of meal: </span>{this.props.dish.strArea}<br/><br/>
                        <div className="headers" style={{textAlign: "left"}}>Ingrediantes: <br/>
                        </div>
                        <div className="ingrads">
                            {this.props.dish.strIngredient1}{mappers.strIngredient1 === "" || mappers.strIngredient1 === " "?<span></span>:<span>---</span>}{mappers.strMeasure1}<br/>
                            {this.props.dish.strIngredient2}{mappers.strIngredient2 === "" || mappers.strIngredient2 === " "?<span></span>:<span>---</span>}{mappers.strMeasure2}<br/>
                            {this.props.dish.strIngredient3}{mappers.strIngredient3 === "" || mappers.strIngredient3 === " "?<span></span>:<span>---</span>}{mappers.strMeasure3}<br/>
                            {this.props.dish.strIngredient4}{mappers.strIngredient4 === "" || mappers.strIngredient4 === " "?<span></span>:<span>---</span>}{mappers.strMeasure4}<br/>
                            {this.props.dish.strIngredient5}{mappers.strIngredient5 === "" || mappers.strIngredient5 === " "?<span></span>:<span>---</span>}{mappers.strMeasure5}<br/>
                            {this.props.dish.strIngredient6}{mappers.strIngredient6 === "" || mappers.strIngredient6 === " "?<span></span>:<span>---</span>}{mappers.strMeasure6}<br/>
                            {this.props.dish.strIngredient7}{mappers.strIngredient7 === "" || mappers.strIngredient7 === " "?<span></span>:<span>---</span>}{mappers.strMeasure7}<br/>
                            {this.props.dish.strIngredient8}{mappers.strIngredient8 === "" || mappers.strIngredient8 === " "?<span></span>:<span>---</span>}{mappers.strMeasure8}<br/>
                            {this.props.dish.strIngredient9}{mappers.strIngredient9 === "" || mappers.strIngredient9 === " "?<span></span>:<span>---</span>}{mappers.strMeasure9}<br/>
                            {this.props.dish.strIngredient10}{mappers.strIngredient10 === "" || mappers.strIngredient10 === " "?<span></span>:<span>---</span>}{mappers.strMeasure10}<br/>
                            {this.props.dish.strIngredient11}{mappers.strIngredient11 === "" || mappers.strIngredient11 === " "?<span></span>:<span>---</span>}{mappers.strMeasure11}<br/>
                            {this.props.dish.strIngredient12}{mappers.strIngredient12 === "" || mappers.strIngredient12 === " " ?<span></span>:<span>---</span>}{mappers.strMeasure12}<br/>
                            {this.props.dish.strIngredient13}{mappers.strIngredient13 === "" || mappers.strIngredient13 === " "?<span></span>:<span>---</span>}{mappers.strMeasure13}<br/>
                            {this.props.dish.strIngredient14}{mappers.strIngredient14 === "" || mappers.strIngredient14 === " "?<span></span>:<span>---</span>}{mappers.strMeasure14}<br/>
                            {this.props.dish.strIngredient15}{mappers.strIngredient15 === "" || mappers.strIngredient15 === " "?<span></span>:<span>---</span>}{mappers.strMeasure15}<br/>
                            {this.props.dish.strIngredient16}{mappers.strIngredient16 === "" || mappers.strIngredient16 === " "?<span></span>:<span>---</span>}{mappers.strMeasure16}<br/>
                            {this.props.dish.strIngredient17}{mappers.strIngredient17 === "" || mappers.strIngredient17 === " "?<span></span>:<span>---</span>}{mappers.strMeasure17}<br/>
                        </div><br />
                        <div className="headers" style={{textAlign: "center"}}>Recipies: </div> 
                        <p>{this.props.dish.strInstructions}</p>
                        
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

export default Controller