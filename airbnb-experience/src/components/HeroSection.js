const HeroSection = () => {
    return (
        <section>
            <div className="container">
                <div className="hero">
                    <img src={process.env.PUBLIC_URL + "/images/photo-grid.png"} />

                    <div className="hero-content">
                        <h1 className="title">Online Experiences</h1>
                        <p className="text">
                            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;