
// const WebButton = ({onClick, label}) => {
//   return (
//     <button outline={'none'} onClick={onClick} >
//       {label}
//     </button>
    
//   )
// }

// export default WebButton

const WebButton = ({ onClick, label }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default WebButton;
