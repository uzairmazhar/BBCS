import React from 'react'

import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import './uploadImages.css'
const axios = require("axios");

function myFunction(x) {
    var g =" Your File: "+ x.content+" is Created At "+x.createdAt;
    if(x.status===undefined)
    alert(g);
    else if(x.status!==undefined) 
    alert(x.status);
  }
  function myFunction2(x) {
    
    alert(x);
  }


class uploadImages2 extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
          var tok =localStorage.getItem('Token');
          console.log(localStorage.getItem('Username'));
  var bea="bearer "
  var result = bea+tok;
  console.log(result);
        const formData = new FormData();
        if(this.state.file===null)
        myFunction2("Choose a File First");
        else{
        formData.append('imageFile',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                "Authorization":result
            }
        };
        axios.post("http://localhost:9000/mycontent",formData,config)
            .then((res) => {
                 console.log(res.data);
                myFunction(res.data);
            }).catch((error) => { 
                 console.log(error)
                myFunction(error);
        });
        
    }}
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <div className="uback">
          
            <div className="uframe">
             <div className="ucenter">
              <div className="utitle">
			    <h1 className="uh1">Choose file to upload</h1>
		      </div>
              
            <form onSubmit={this.onFormSubmit}>
               
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit" className="ubtn">Upload</button>
            </form>
           
             </div>
            </div>
            </div>
        )
    }
}
  
  export default uploadImages2;
  
//   var tok =localStorage.getItem('Token');
//   var bea="bearer "
//   var result = bea+tok;
//   console.log(result);