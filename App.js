import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Restaurant from './Restaurant';
import items from './data';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller
} from "react-scroll";

const allCategories = ['all', ...new Set(items.map((item)=>item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return <main>
    <div className="restaurant title">
      <img src="./images/Logo.png" alt="Logo" className="logo"/>
      <h2>Restaurant La Ciudad Nueva </h2>
      <div className="underline"></div>
      <div className= "Sucursal title">
        <h3>Sucursal Norte</h3>
        <h3>Fono: 55 2 270000</h3>
        <h3>Dirrecion: Los Chañares 291</h3>
      </div>
      <div className= "Sucursal title">
        <h3>Sucursal Centro</h3>
        <h3>Fono: 55 2 388888</h3>
        <h3>Dirrecion: Maipu 314</h3>
      </div>
      <Link
     activeClass="active"
     className="btn"
     to="carte"
     spy={true}
     smooth={true}
     duration={500}
     offset={0}
   >
     Ir al Menu
   </Link>
  </div>
    <Element name="carte" className="title">
      <h2>menu</h2>
      <div className="underline"></div>
    </Element>
    <Categories categories={categories} filterItems={filterItems}/>
    <Menu items={menuItems}/>
  </main>;
}

export default App;
