import React, { Component }from 'react';
import axios from 'axios';
import Artisan from './Artisan/Artisan';
// import shortId from 'shortid';

export class Home extends Component {
    state = {
        artisanData:[]
    }

    componentDidMount() {
        axios.get("http://localhost:8080/artisan")
        .then(response => 
        this.setState({
            artisanData: response.data
        })
        );
        
    }

    render () {
        // if (!(this.state.artisanData.length > 0 )
        // )
        // return null;
       
        console.log(this.state.artisanData)
        return (
            
            <div>

                {this.state.artisanData.map(artisan => (
                    <Artisan artisanData = {artisan}/>
                    // <Artisan artisanData = {this.state.artisanData}/>
                ))}
                {/* {this.state.artisanData.map(artisan => (
                    <Artisan artisanData = {artisan}/>
                    // <Artisan artisanData = {this.state.artisanData}/>
                ))} */}

                {/* {this.state.artisanData.map((items, index) => 
                    <Artisan
                        artisanData={items}
                        key={index} />)
                } Will render as objects */} 
            
            
            </div>
        )
    }

}

export default Home;