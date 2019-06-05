import React, {Component} from 'react';
import '../styles/Artisan.scss';

export class Artisan extends Component {
    render() {

        // "id": "E01",
        //     "artisanName": "James May",
        //     "trade": "Electrician",
        //     "experience": "Certiified electrician with over 15 years practical experience. Your satisfaction and safety is my top priority.",
        //     "rating": 4
        const { artisanName, trade, experience, rating } = this.props.artisanData;

        console.log(this.props.artisanData)

        return (
            <div className="person">
                <div className="person__details">
                <div className="person__details--name1">Name:</div>
                <div className="person__details--name">{artisanName}</div>
                {/* <div className="person__details--rating">Rating:</div> */}
                <div className="person__details--rating">({rating} stars)</div>
                {/* <div className="person__details--stars">{printStars({rating})}</div> */}
                </div>
                <div className="person__details">
                <div className="person__details--trade1">Trade:</div>
                <div className="person__details--trade">{trade}</div>
                </div>
                <div className="person__details">
                <div className="person__details--exp1">Experience:</div>
                <div className="person__details--exp">{experience}</div>
                </div>
                {/* <div className="person__details">
                <div className="person__details--rating">Rating:</div>
                <div className="person__details--rating1">{rating}</div> */}
                {/* </div> */}
            </div>
        );
    }
}

export default Artisan;