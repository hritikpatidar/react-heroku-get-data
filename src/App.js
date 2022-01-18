import { useEffect, useState } from 'react';
import './App.css';

function App() {
  //1. static/variable
  // Ex of hooks variable
  // syntex = const [variableName , FunctionName] = useState(initialData)
  const [ studentName , setStudentName] = useState('Hritik');

  //useEffect (<function> , <dependency> )
  useEffect(()=>{

  },[] ) //Array



  //2.Function
  // let create funtion with a fat arrow notation
  let myFunction = ()=>{
    //console.log(studentName);
    //Call the api here
    var data = {
      "data": {
        "Name":studentName,
      }
    }
    //promiss chain
    fetch('http://localhost:1337/api/friends',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body:JSON.stringify(data)
    }).then((d)=>{
      //console.log(d.status)
      // if(d.status === 200){
      //   swal("Nice job!", "Data Created Successfully", "success");

      // }
    }).catch((e)=>{}).finally((all)=>{});
  }

  //fet arow function is a Ananymous funciton ()=>{} 
  //3. return statement JSX  X= XML
  return (
    <div className="App">
        <form>
          <label>Enter Student Name <br/>
            <input type="text" value={ studentName } onChange={ (e)=>{ setStudentName(e.target.value) }} />
          </label><br/>
          <input type="button" onClick={ myFunction } name="studentName" value="Save Student" />
        </form>
    </div>
  );
}

export default App;
