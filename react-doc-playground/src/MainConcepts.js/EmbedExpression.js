// Intro to JSX

const MainConcept = () => {
    //object literal
    const user = {
        firstName: "Aliyu",
        lastName: "AbdulGaniy",
        role: "Front-end",
        stacks: ["Javscript ", "Css3 ", "Tailwind ", "React"]
    }
    const curriculumVitae = (user) => {
        return ` ${user.firstName} ${user.lastName},  i'm ${user.role} with years of experience building stuff on the web with technologies like ${user.stacks}`
    }

    const greetUser = (user) => {
        if (user) {

            return `Hello ${user.firstName}  ${user["lastName"]}`;
            // NB: user["lastName"] is not a typo error but also way to access an object property in javacript
        } else {
            return "Hello Stranger"
        }
    }

    //link
    const link = <a href="https://github.com/alialaba">My github</a>
    return (
        <div>
            <p>{`I'm ${curriculumVitae(user)}`}</p>
            <h1>{greetUser(user)}</h1>
            <>{link}</>
        </div>
    );
};

export default MainConcept;
