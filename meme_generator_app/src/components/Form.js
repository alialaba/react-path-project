import { Button } from "./Button";
export function Form({topText,bottomText, handleOnClick,  handleChange}){
    return(
       
            <section className="form">

                <div className="form-field">
                <label>
                <input type="text" name="topText" value={topText} onChange={handleChange} className="form-field__input" placeholder="Top text"/>
                </label>

                <label>
                <input type="text" name="bottomText" value={bottomText} onChange={handleChange} className="form-field__input" placeholder="Bottom text"/>
                </label>
                </div>
                <Button  onClick={handleOnClick} text="Get new meme 🖼"/>
            </section>
        
    );
}