const Mode = ({ switchMode, isShow }) => {
    return (
        <div onClick={switchMode} >
            < ion-icon className="sidebar__icon" name={isShow ? "sunny-outline" : "moon-outline"}></ion-icon>
        </div>
    );
}
export default Mode