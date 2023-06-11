import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
    const icons = ["fas fa-home", "fas fa-hashtag", "fas fa-bell", "fas fa-envelope", "fas fa-bookmark", "fas fa-list", "fas fa-user", "fas fa-ellipsis-h"];
    const { currentUser } = useSelector((state) => state.user);

    return (
        <div className="list-group">
            {links.map((link, index) =>
                <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                    <i className={icons[index]}></i> <span class="d-none d-xxl-inline">{link}</span>
                </Link>
            )}
            {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
            {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
            {currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>}
        </div>
    );
};
export default NavigationSidebar;