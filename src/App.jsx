import { useEffect, useState } from 'react';

import { Triangle, Circle, Square } from './components/molecules';

import './styles/styles.css';

function App() {
   const [triangle, setTriangle] = useState({ size: 80, color: '#F52760' });
   const [circle, setCircle] = useState({ size: 90, color: '#2C6974' });
   const [square, setSquare] = useState({ size: 100, color: '#F9C606' });

   const handleTriangle = (e) => {
      setTriangle({ ...triangle, [e.target.name]: e.target.value });
   };

   const handleCircle = (e) => {
      setCircle({ ...circle, [e.target.name]: e.target.value });
   };

   const handleSquare = (e) => {
      setSquare({ ...square, [e.target.name]: e.target.value });
   };

   useEffect(() => {
      const allSizes = Number(triangle.size) === Number(circle.size) && Number(triangle.size) === Number(square.size);
      const allColors = triangle.color === circle.color && triangle.color === square.color;
      if (allColors && allSizes) {
         return alert('¡¡Todas las medidas 🧐 y colores 🌈 son iguales!!');
      } else if (allColors) {
         return alert('¡Todos los colores 🌈 son iguales!');
      } else if (allSizes) {
         return alert('¡Todas las medidas 🧐 son iguales!');
      }
   }, [triangle, circle, square]);

   return (
      <div className="App">
         <h1>Tarea useState y useEffect</h1>
         <div className="figure-container">
            <Triangle color={triangle.color} handle={handleTriangle} name="square" size={triangle.size}>
               {' '}
               Triangle
            </Triangle>
            <Circle color={circle.color} handle={handleCircle} name="square" size={circle.size}>
               {' '}
               Circle
            </Circle>
            <Square color={square.color} handle={handleSquare} name="square" size={square.size}>
               {' '}
               Square
            </Square>
         </div>
      </div>
   );
}

export default App;
