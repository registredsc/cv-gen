import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { useState } from 'react';


function Diplome() {
    const [dipList , setDipList] = useState([
        { dip: ""}, ]);
        const DipAdd = () => {
            setDipList([...dipList, { dip: ""}]);
          }
      
          const DipRemove = (index) => {
            const list = [...dipList];
            list.splice(index, 1);
            setDipList(list);
          }
      
          const DipChange = (e, index) => {
            const {name, value} = e.target
            const list = [...dipList];
            list[index][name] = value;
            setDipList(list);
          }

          return (
            <div className="App-body">
                <div className='diplome'>
                <div class="add">
                <div className="form-field">
              {dipList.map((singleService, index) => (
              <div className="services">
              <p>
                <input name="diplome" type="text" placeholder="Diplome" required value={singleService.service} onChange={(e) => DipChange(e, index)}/>
                {dipList.length - 1 === index && dipList.length < 7 &&
                 <button type="button" className="addDip"
                 onClick={DipAdd}
                 >
                 <span>+</span>
               </button>
                 }
              </p>
              
              <div className='remove'>
                  
                  {
                  dipList.lenght > 1 && (
                  <button type="button" className="removeDip"
                  onClick={DipRemove(index)}
                  >
                  <span>-</span>
                </button>
                )}
                  </div>
              
              
              </div>
              ))}
             
              </div>
                </div>

              
              </div>
                </div>
   
          )
}

export default Diplome;