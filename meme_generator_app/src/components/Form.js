import { Button } from "./Button";
export function Form(props){
    return(
       
            <form className="form">

                <div className="form-field">
                <label>
                <input type="text" name="topText" value={props.topText} onChange={props.handleChange} className="form-input" placeholder="Top text"/>
                </label>

                <label>
                <input type="text" name="bottomText" value={props.bottomText} onChange={props.handleChange} className="form-input" placeholder="Bottom text"/>
                </label>

                </div>
                <Button   text="Get new meme 🖼"/>
            </form>
        
    );
}