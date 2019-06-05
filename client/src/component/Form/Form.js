import React, {Component} from 'react';
import './Form.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

    // state = {
    //     value: ''
    // }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('A request was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render () {

        return (
          
            <>
              <div className="request">
              
                <form id="request__form" onSubmit={this.handleSubmit}>
                <div>
                <label className="request__name">Name:</label>
                    <input type="textarea" value={this.state.value} onChange={this.handleChange} />
                    {/* <input type="submit" value="Submit" /> */}
                    {/* <input type="text"> */}
                    {/* <button type="submit" value="Submit" form="testForm" id="submitBtn">Submit</button> */}
                
                </div>
                <div>
                <label>City:</label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="toronto">Toronto</option>
            <option value="hamilton">hamilton</option>
            <option value="etobikoke">Etobikoke</option>
            <option value="oakville">Oakville</option>
          </select>
        
        </div>

        {/* <div class="opinion-com">
            <label class="opinion-com opinion__comment--details" for="fLastName">NAME</label>
            <input class="opinion-com opinion__comment--boxtype1" type="text" id="defaultpersonname" placeholder="Mohan Muruge"
                name="firstName" id="fLastName">
            <label class="opinion-com opinion__comment--details" for="comment">COMMENT</label>
            <input class="opinion-com opinion__comment--boxtype2" type="text" id="defaultpersoncomment" placeholder="Add a new comment"
                name="userComment" id="usercomment">
            <button class="opinion__button1" type="submit">COMMENT</button>
        </div> */}
            <div>
                <label>Description of problem:</label>
                    <input type="textarea" value={this.state.value} onChange={this.handleChange} />
                    {/* <input type="submit" value="Submit" /> */}
                    {/* <input type="text"> */}
                    {/* <button type="submit" value="Submit" form="testForm" id="submitBtn">Submit</button> */}
                </div>
                <div>
                <label>Mobile Number:</label>
                    <input type="textarea" value={this.state.value} onChange={this.handleChange} />
                    {/* <input type="submit" value="Submit" /> */}
                    {/* <input type="text"> */}
                    {/* <button type="submit" value="Submit" form="testForm" id="submitBtn">Submit</button> */}
                {/* </label> */}
                </div>
                <div>
                <label>Email:</label>
                    <input type="textarea" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                    {/* <input type="text"> */}
                    {/* <button type="submit" value="Submit" form="testForm" id="submitBtn">Submit</button> */}
                {/* </label> */}
                </div>
                </form> 

        </div>
        </>
        )

    }
    
}
export default Form;
