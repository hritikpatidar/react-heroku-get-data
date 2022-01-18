import { useEffect, useState } from 'react';
import './App.css';
import swal from 'sweetalert';


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
    fetch('https://fathomless-savannah-46209.herokuapp.com/api/friends',{
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ebae10ba10c71ccb1d89be8935a99b335ff7f2862f3393504bc4831d502fc6a872a2b12aec4e29fa09c571962d4cb5934e9165d4c3ceb6bf9f0e0437ff5b7cd8bbbbea879886dd17c5a4ebf1b42569417540bd10dd899270e3528a1dc062c52ff003e56f8e5f131afec89b3bc6438e114d7372dc9e87f4e570e86dcae9947413',
        'Content-Type': 'application/json',
        'accept': 'application/json',
        
      },
      body:JSON.stringify(data)
    }).then((d)=>{
      //console.log(d.status)
       if(d.status === 200){
         swal("Nice job!", "Data Created Successfully", "success");

       }
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
