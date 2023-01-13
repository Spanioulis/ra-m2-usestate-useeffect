export const InputColor = ({ children, color, handle, name, style, type }) => {
   return <input id={children} name={name} onChange={handle} style={style} type={type} value={color} />;
};
