import React, {Component} from 'react';

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
            <div>
            <div>Name of artisan:</div>
            <div>{artisanName}</div>
            <div>Trade:</div>
            <div>{trade}</div>
            <div>Experience:</div>
            <div>{experience}</div>
            <div>Rating:</div>
            <div>{rating}</div>
            </div>
        );
    }
}

export default Artisan;