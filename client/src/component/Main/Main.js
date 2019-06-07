import React, { Component }from 'react';
import axios from 'axios';
import Artisan from '../Artisan/Artisan';
// import shortId from 'shortid';

export class Main extends Component {
    state = {
        artisanData: []
    }

    componentDidMount() {

        const { search } = this.props.location;
        const urlParams = new URLSearchParams(window.location.search);
        const jobFilter = urlParams.get('type');

        console.log('Looking for this type of job: ', jobFilter);


        axios.get("http://localhost:8080/artisan")
        .then(response => {
            if(jobFilter) {
                this.setState({
                    artisanData: response.data.filter(
                        (artisan) => artisan.trade.toLowerCase() === jobFilter.toLowerCase()
                    )
                })
            } else {
                this.setState({ artisanData: response.data });
            }
        }
        );

       



        
    }

    render () {
        // if (!(this.state.artisanData.length > 0 )
        // )
        // return null;
       
        // console.log(this.state.artisanData)
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

export default Main;