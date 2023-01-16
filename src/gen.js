import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import Diplome from './diplome'
import Job from './job';
function GEN() {
    return(
        <div className="App">
        {/* CV GEN */}
        
         <div className="App-intro">
           <p>
             Bienvenue sur le gen de cv  <a href="https://github.com/registredsc/cv-gen" target="_blank"> fais par Luca M.E </a>
           </p>
           </div>
   
           {/* generation du cv */}
           <div className="App-body">
             <div className="App-body-intro">
               <p>
                 <a href="https://github.com/registredsc/cv-gen" target="blank">CV-GEN</a>
               </p>
                {/* ajout du nom par l'utilisateur de l'app dans le cv */}
                <p>
                 <input type="text" placeholder="Nom" />
                 </p>
               {/* ajout du prénom par l'utilisateur de l'app dans le cv */}
               <p>
                 <input type="text" placeholder="Prénom" />
               </p>
               {/* ajout du mail par l'utilisateur de l'app dans le cv */}
               <p>
                 <input type="text" placeholder="Mail" />
               </p>
               {/* ajout du telephone par l'utilisateur de l'app dans le cv */}
               <p>
                 <input type="text" placeholder="Telephone" />
                 </p>
                 <p>
                   {/*ajout de l'adresse par l'utilisateur de l'app dans le cv*/ }
                 <input type="text" placeholder="Adresse" />
                 </p>
                 {/* ajout de la ville par l'utilisateur de l'app dans le cv */}
                 <p>
                   <input type="text" placeholder="Ville" />
                 </p>
                 <p>
                   <input type="text" placeholder="Code Postal" />
                 </p>
                 {/* ajout d'une photo par l'utilisateur de la photo*/}
                 <p>
                   <input type="text" placeholder="Photo" />
                 </p>
                 <p>
                   <input type="file" />
                 </p>
   
                 <div>
                   <Diplome/>
                 </div>
                
                <div>
                 
                </div>
               <div>
                 <Job/>
               </div>
           
                 {/* ajout du linkedin par l utilisateur de l'app */}
                 <p>
                   <input type="text" placeholder="Linkedin" />
                 </p>
                 {/* ajout du github par l utilisateur de l'app */}
                 <p>
                   <input type="text" placeholder="Github" />
                 </p>
                 {/* ajout du twitter par l utilisateur de l'app */}
                 <p>
                   <input type="text" placeholder="Twitter" />
                 </p>
   
               </div>
               </div>
   
               <div className="btnDiv">
                 <button id="dlbtn" value="download">Télécharger</button>
                 {/* en cliquant sur le bouton dlbtn l app recupere toute les infos renseigner et genere le cv de l'utilisateur */}
                 
   
               </div>
               <div className="App-footer">
                 <p>
                   <a href="https://github.com/registredsc/cv-gen">CV-GEN</a>
                 </p>
                 </div>
   
   
        
         
       </div>
    )
}

export default GEN