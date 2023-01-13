import { TriangleSVG, InputColor, InputNumber, Label } from '../atoms';

export const Triangle = ({ children, size, color, handle }) => {
   return (
      <div style={{ display: 'block', marginBottom: '8px' }}>
         <h2>{children}</h2>
         <div style={{ minHeight: '200px', display: 'grid', placeContent: 'center' }}>
            <TriangleSVG color={color} size={size} />
         </div>
         <div style={{ margin: '10px' }}>
            <Label children={children} info="size:" />
            <InputNumber
               children={children}
               handle={handle}
               name="size"
               size={size}
               style={{ width: '50px' }}
               type="number"
            />
         </div>
         <div>
            <Label children={children} info="color:" />
            <InputColor
               children={children}
               color={color}
               handle={handle}
               name="color"
               style={{ width: '70px' }}
               type="color"
            />
         </div>
      </div>
   );
};
