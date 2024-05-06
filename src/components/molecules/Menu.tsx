import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
  return (
    <div className="menu">
      {/* Contenido del menú */}
      <ul>
        <li className="submenu-item">
          <a href="#sucursal">Sucursal</a>
          <ul className="submenu">
            <li>
              <a href="#sucursal-1">Matriz</a>
            </li>
            <br />
            <li>
              <a href="#sucursal-2">Pachuca</a>
            </li>

            {/* Puedes agregar más sucursales aquí */}
          </ul>
        </li>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#tienda">Tienda</a>
        </li>
        <li>
          <a href="#productos">Productos</a>
        </li>
        {/* Añade más elementos del menú según sea necesario */}
      </ul>
    </div>
  );
};

export default Menu;
