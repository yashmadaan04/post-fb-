import React, { Component } from 'react';
import "../Assets/Home.css"
import { LinkedinIcon,TwitterIcon }from 'react-share'

 
 
class Checkbox extends Component {
  // Checkbox Initial State
  state = {
    isLinkedin: false,
    isTwitter: false
   
  };
  // React Checkboxes onChange Methods
  onChangeLinkedin = () => {
    this.setState(initialState => ({
      isLinkedin: !initialState.isLinkedin,
    }));
  }
  onChangeTwitter = () => {
    this.setState(initialState => ({
      isTwitter: !initialState.isTwitter,
    }));
  }
  

  // Submit
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="boxess">
       
        <form onSubmit={this.onSubmit}>

          <div className="form-check">
            <label className="form-check-label">
                
              <input type="checkbox"
                checked={this.state.isLinkedin}
                onChange={this.onChangeLinkedin}
                className="form-check-input"
                
              />
                
               <LinkedinIcon  size={32} round={true}/>
              
            </label>
          </div>
          <div className="form-check1">
            <label className="form-check-label1">
              <input type="checkbox"
                checked={this.state.isTwitter}
                onChange={this.onChangeTwitter}
                className="form-check-input"
              />
              <TwitterIcon className='icont' size={32} round={true} />
            </label>
          </div>
           
          {/* <div className="form-group">
            <button className="btn btn-success">
              Save
            </button>
          </div> */}
        </form>
      </div>
    );
  }
}
export default Checkbox;