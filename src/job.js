import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { useState } from 'react';

function Job() {
    const  [jobList, setJobList] = useState([
        { job: ""}, 
      ])
      const JobAdd = () => {
        setJobList([...jobList, { job: ""}]);
      }
      return(
        <div className='job'>
        <div class="add">
          <div className='form-field'>
            {jobList.map((singleService, index) => (
              <div className="services">
                <input name="job" type="text" placeholder="Expériences" />
                {jobList.length - 1 === index && jobList.length < 10 &&
                <button type="button" className="addJob"
                onClick={JobAdd}
                >
                  <span>+</span>
                </button>
}
                </div>
))}
          </div>
            
        </div>
       </div>
      )

}

export default Job;