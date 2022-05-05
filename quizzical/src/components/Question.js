import Button from "./Button"
const Question = () => {
    return (
        <section>
            <article>
                <p>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</p>
                <div className="answers">
                    <Button text="Adiós" />
                    <Button text="Hola" />
                    <Button text="Au Revoir" />
                    <Button text="Au Revoir" />
                </div>
            </article>
        </section>
    );
}
export default Question