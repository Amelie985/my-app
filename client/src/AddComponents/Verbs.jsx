import { useEffect, useState } from 'react';
import '../App.css'


function Verbs() {

  const state = {
    verb: "",
    meaning1: "",
    meaning2: "",
    meaning3: "",
    case: "",
    preposition: "",
    example1: "",
    example2: "",
    example3: ""
  }

  const [verbs, setVerbs] = useState([]);
  const [newVerb, setNewVerb] = useState([]);
    

  useEffect(() => {
    getVerbs();
  }, []);

  const getVerbs = async () => {
    try {
      const response = await fetch("/api/users/Verbs");
      const data = await response.json();
      if(!response.ok) throw new Error(data.message);
      setVerbs(data);
    } catch (err) {
      console.log(err);
    }
  };

  async function addVerb(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/users/Verbs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVerb),
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) throw new Error(data.message);
      getVerbs();
    } catch (err) {
      console.log(err);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewVerb((state) => ({ ...state, [name]: value }));
    console.log(newVerb);
  }

  return(
    <div>
      <div className='title'>
        <h1>Add New Verb</h1>
      </div>
      <div className="form">
        <form onSubmit={addVerb}>
          <label> Enter your new verb: 
            <input 
            type="text"
            name="verb"
            placeholder="verb"
            value={newVerb.verb}
            onChange={handleInputChange}
            />
          </label>
          <label> Enter one or more meanings of your new verb:
            <input 
            className="meaning-input"
            type= "text" 
            name="meaning1"
            placeholder="meaning1"
            value={newVerb.meaning1}
            onChange={handleInputChange}
            />
            <input 
            className="meaning-input"
            type="text" 
            name="meaning2"
            placeholder="meaning2"
            value={newVerb.meaning2}
            onChange={handleInputChange}
            />
            <input
            className="meaning-input" 
            type="text"
            name="meaning3"
            placeholder="meaning3"
            value={newVerb.meaning3}
            onChange={handleInputChange}
            />
          </label>
          <label> Does your verb have a preposition?
            <input 
            type="text" 
            name="preposition"
            placeholder="preposition"
            value={newVerb.preposition}
            onChange={handleInputChange}
            />
          </label>
          <label> Do you have one or more examples of how to use this noun?
            <input 
            className="examples-input"
            type="text" 
            name="example1"
            placeholder="example1"
            value={newVerb.example1}
            onChange={handleInputChange}
            />
            <input 
            className="examples-input"
            type="text" 
            name="example2"
            placeholder="examples2"
            value={newVerb.example2}
            onChange={handleInputChange}
            />
            <input
            className="examples-input" 
            type="text" 
            name="example3"
            placeholder="examples3"
            value={newVerb.example3}
            onChange={handleInputChange}
            />
          </label>
          <button >Submit</button>
        </form>
      </div>
    </div>
 )
}
          
          

export default Verbs
