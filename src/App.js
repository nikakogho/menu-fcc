import './App.css';

import { useState } from 'react'
import Dish from './components/Dish'

const allDishes = [
  {
    key: 0,
    title: 'Buttermilk Pancakes',
    price: 15,
    type: 'breakfast',
    img: 'https://react-projects-5-menu.netlify.app/images/item-1.jpeg',
    info: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`
  },
  {
    key: 1,
    title: 'bacon overflow',
    price: 25,
    type: 'breakfast',
    img: 'https://react-projects-5-menu.netlify.app/images/item-7.jpeg',
    info: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
  },
  {
    key: 2,
    title: 'country delight',
    price: 20,
    type: 'breakfast',
    img: 'https://react-projects-5-menu.netlify.app/images/item-4.jpeg',
    info: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut`
  },
  {
    key: 3,
    title: 'diner double',
    price: 15,
    type: 'lunch',
    img: 'https://react-projects-5-menu.netlify.app/images/item-2.jpeg',
    info: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`
  },
  {
    key: 4,
    title: 'american classic',
    price: 35,
    type: 'lunch',
    img: 'https://react-projects-5-menu.netlify.app/images/item-8.jpeg',
    info: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`
  },
  {
    key: 5,
    title: 'egg attack',
    price: 15,
    type: 'lunch',
    img: 'https://react-projects-5-menu.netlify.app/images/item-5.jpeg',
    info: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
  },
  {
    key: 6,
    title: 'godzilla milkshake',
    price: 11,
    type: 'shakes',
    img: 'https://react-projects-5-menu.netlify.app/images/item-3.jpeg',
    info: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
  },
  {
    key: 7,
    title: 'quarantine buddy',
    price: 12,
    type: 'shakes',
    img: 'https://react-projects-5-menu.netlify.app/images/item-9.jpeg',
    info: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
  },
  {
    key: 8,
    title: 'oreo dream',
    price: 13,
    type: 'shakes',
    img: 'https://react-projects-5-menu.netlify.app/images/item-6.jpeg',
    info: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
  }
]

function App() {
  const [dishes, setDishes] = useState(allDishes)

  const filterDishes = filter => {
    if(filter === undefined) setDishes(allDishes)
    else setDishes(allDishes.filter(dish => dish.type === filter))
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='navbar'>
          <div className='title'>
            <h1>Our Menu</h1>
            <div/>
          </div>
          <div className='filters'>
            <button onClick={() => filterDishes(undefined)}>All</button>
            <button onClick={() => filterDishes('breakfast')}>Breakfast</button>
            <button onClick={() => filterDishes('lunch')}>Lunch</button>
            <button onClick={() => filterDishes('shakes')}>Shakes</button>
          </div>
        </div>
        <div className='content'>
          {dishes.map(dish => <Dish {...dish}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
