import React from "react"
import "./tuit-item.css";

const TuitStats = (
    {
        tuit = {
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@reactjs",
            "tuit": "Today, front-end frameworks and libraries are becoming an essential part of the modern web development stack. React.js is a front-end library that has gradually become the go-to framework for modern web development within the JavaScript community."
        }
    }

) => {
    const heartIcon = tuit.liked ? "fas fa-heart liked" : "fas fa-heart";

    return (
        <div className="row">
            <div className="col-3">
                <div><i className="fas fa-comment"></i> {tuit.replies}</div>
            </div>
            <div className="col-3">
                <div><i className="fas fa-retweet"></i> {tuit.retuits}</div>
            </div>
            <div className="col-3">
                <div><i className={heartIcon}></i> {tuit.likes}</div>
            </div>
            <div className="col-3">
                <div><i className="fas fa-upload"></i></div>
            </div>
        </div>
    );
};
export default TuitStats;