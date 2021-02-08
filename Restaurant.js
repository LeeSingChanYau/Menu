import React from 'react';

function Restaurant() {
 return (
  <>
  <div className="restaurant title">
   <img src="./images/Logo.png" alt="Logo" className="logo"/>
   <h2>Restaurant La Ciudad Nueva </h2>
   <div className="underline"></div>
   <div className= "Sucursal title">
    <h3>Sucursal Norte</h3>
    <h4>Fono: 55 2 270000</h4>
    <h4>Dirrecion: Los Chañares 291</h4>
   </div>
   <div className= "Sucursal title">
    <h2>Sucursal Centro</h2>
    <h3>Fono: 55 2 388888</h3>
    <h3>Dirrecion: Maipu 314</h3>
   </div>
  </div>
   </>
 )
}

export default Restaurant
