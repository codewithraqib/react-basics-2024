const NavBar = ({ navClick, name, hideNavLinks, navLinks, color }) => {

    return (
        <div className="nav_bar" style={color ? { backgroundColor: color } : { backgroundColor: "#F00" }}>


            <div className="nav_bar_left">{name}</div>

            {hideNavLinks ? null :

                <div className="nav_bar_right">

                    {navLinks?.map((item) => {
                        return (
                            <div key={item.id} className={item.active ? "nav_bar_right_item active" : "nav_bar_right_item"} onClick={() => navClick(item)}>
                                {item.title}
                            </div>
                        )
                    })}

                </div>
            }

        </div>
    )
}



export default NavBar;


