import React ,{useState} from 'react'
 
export default function Textform(props) {
  const handleUpClick  = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText)
   props.showAlert("converted to uppercase!" , "success");
// setText = ("You have clicked on handleupclick");
  }
  const handleOnChange  = (event)=>{
  // console.log("On Change");
  setText(event.target.value)
 
  }
  const handleCopy = ()=>{
    console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }
const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}
  const [text, setText] = useState('');
  // setText("new text");
  return (
    <>
    <div className='container'style ={{color: props.mode ==='dark' ? 'white' : 'black'}}>
      <h1 className='mb-3' >{props.heading}</h1>
<div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor: props.mode ==='dark' ? 'grey' : 'white', color:props.mode ==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
</div>
{/* onclick is a fuction call */}
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick ={handleUpClick}>
  convert to uppercase</button>
  <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick ={handleCopy}>
  Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick ={handleExtraSpaces}>
 Remove ExtraSpaces</button>
    </div>
    <div disabled={text.length===0} className="container my-3 " style ={{color: props.mode ==='dark' ? 'white' : 'black'}}>
<h1>
  Your text summary
</h1>
<p> {text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
   <p>{0.008 *text.split(" ").length} Minutes read</p>
   <h2>Preview</h2>
   <p>{text}</p>
    </div>
    </>
  )
} 



// 1. State=condition of any component for eg. textarea component might be empty sometime , sometimes it has letters .
// 2. Hooks= A method which helps us to use features of classes in function based component this is because developer like us prefer to use function over classes