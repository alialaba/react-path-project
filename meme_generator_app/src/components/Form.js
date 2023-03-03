import { Button } from "./Button";
export function Form(){
    return(
       
            <form className="form">

                <div className="form-field">
                <label>
                <input type="text" className="form-input" placeholder="Top text"/>
                </label>

                <label>
                <input type="text" className="form-input" placeholder="Bottom text"/>
                </label>

                </div>
                <Button  text="Get new meme 🖼"/>
            </form>
        
    );
}