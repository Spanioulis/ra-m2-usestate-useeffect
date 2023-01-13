export const InputNumber = ({ children, handle, name, size, style, type }) => {
   return <input id={children} name={name} onChange={handle} style={style} type={type} value={size} />;
};
