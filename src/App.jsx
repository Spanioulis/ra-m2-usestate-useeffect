import { useEffect, useState } from 'react';

import Figures from './components/molecules/Figures.jsx';

import './styles/styles.css';

function App() {
   const [triangle, setTriangle] = useState({ size: 50, color: '#F52760' });
   const [circle, setCircle] = useState({ size: 75, color: '#2C6974' });
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
         <Figures
            size={triangle.size}
            color={triangle.color}
            handle={handleTriangle}
            style={{
               borderBottom: `${triangle.size}px solid ${triangle.color}`,
               borderLeft: `${triangle.size / 2}px solid transparent`,
               borderRight: `${triangle.size / 2}px solid transparent`,
               display: 'inline-block',
               height: 0,
               width: 0
            }}
         >
            Triangle
         </Figures>

         <Figures
            size={circle.size}
            color={circle.color}
            handle={handleCircle}
            style={{
               backgroundColor: `${circle.color}`,
               borderRadius: '50%',
               display: 'inline-block',
               height: `${circle.size}px`,
               width: `${circle.size}px`
            }}
         >
            Circle
         </Figures>

         <Figures
            size={square.size}
            color={square.color}
            handle={handleSquare}
            style={{
               backgroundColor: `${square.color}`,
               display: 'inline-block',
               height: `${square.size}px`,
               width: `${square.size}px`
            }}
         >
            Square
         </Figures>
      </div>
   );
}

export default App;
