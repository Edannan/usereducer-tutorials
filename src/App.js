import { useReducer, useState } from 'react';
import { reducer } from './components/reducer';
import Modal from './components/modal';
import './App.css';

function App() {
const defaultState = {
  people: [],
  modalMode: false,
  modalInfo: '' 
}
const [state, dispatch] = useReducer(reducer, defaultState);
const [name, setName] = useState('');


  const handleSubmit = () => {
    if(name){
      const newPerson = {id: new Date().getTime().toString(), name};
      dispatch({type:"INSERT", payload:newPerson})
      setName('');
    }else{
      dispatch({type:"VALUELESS"})

    }
  }

  const endModal = () => {
    dispatch({type: "ENDMODAL"});
  }

  const removeItem = (id) =>{
    dispatch({type:"REMOVE", payload:id})
  }
  return (
    <div className="App">
      <section className="sec">
        {state.modalMode && <Modal endMessage={endModal} message={state.modalInfo}/>}
        <input type="text" name="fullname" id="fullname" value={name} onChange={(e) => {setName(e.target.value)}} />
        <button type='button' className='btn' onClick={handleSubmit}>add person</button>
      </section>
      <section className='list'>
      {state.people.map((person)=>{
        const{id, name} = person;
        return(
        <div className='obj' key={id}>
              <h4>{name}</h4>
              <button type='button' className='btn remove' onClick={() => removeItem(id)}>remove</button>
        </div>
        )

      })}

      {/* {isFull && <button type='button' className='btn reset' onClick={reset}>reset</button>} */}
      </section>
    </div>
  );
}

export default App;
