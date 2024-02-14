import { useEffect, useState } from 'react';
import './App.css';

function App() {


  const [menus, setMenus] = useState([
    { id: 0, title: "Home", active: true, link: '/' },
    { id: 1, title: "About", active: false, link: '/' },
    { id: 2, title: "Services", active: false, link: '/' },
    { id: 2, title: "Contact", active: false, link: '/' }

  ])





  return (
    <div className="App">


      <div className='nav_bar'>

        <div className='nav_bar_inner content_wrapper'>
          <div className='logo_wrapper'>
            <img src='/images/logo.png' alt='logo' />
          </div>

          <div className='menu_wrapper'>

            {menus.map((menu, index) => {
              return (
                <div key={index} className={menu.active ? 'menu_item active' : 'menu_item'}>
                  <a href={menu.link}>{menu.title}</a>
                </div>
              )
            })}

          </div>

        </div>

      </div>




    </div>
  );
}



export default App;
