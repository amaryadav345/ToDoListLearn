import React, { useState } from 'react';
import "./CoverPageInp.css";



const CoverPageInp = () =>{
    let [color, setColor] = useState('#C0BCBB');
    let [pathValue,setPathValue] = useState('');
    const handleChange =(e) =>{
        setPathValue(e.target.value);
        
    }
    const handleReset = (e) =>{        
        setPathValue('');
    }
    const handleClick = async () => {    
    console.log("Submit button pressed");        
    setColor(prevColor => (prevColor === '#C0BCBB' ? '#008CBA' : '#C0BCBB'));           
     
    try {
        const response = await fetch('http://localhost:8080/api/coverPagePath', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },          
          body: JSON.stringify({ path : pathValue}),                    
        });                
        const data = await response.json();
        if(data.responseCode===200){
            console.log("Resonse code is "+data.responseCode);
        }        

      console.log('Response data:', data);      
    } catch (error) {
      console.error('Error:', error);
    }    


  };

    return (         
        <div> <h1>Hello , Input path screen</h1>
        <div className="coverPageInp">        
            <label >Please put coverpage file path : </label> 
            <input type="text" id="path" name="path" size="30" value={pathValue} onChange={handleChange}/>  
            <br/> 
            <button className ="submitButton" onClick={handleClick} style ={{backgroundColor: color}} type="submit" >Submit</button>        
            <button className ="resetButton"  onClick={handleReset} style ={{backgroundColor: '#C0BCBB'}}>Reset</button>
        </div>
        </div>
        
    )
}

export default CoverPageInp;