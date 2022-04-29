const Error = ({ mensaje }) => {
    return(
        (
            <div className='bg-red-800 text-white text-center uppercase font-bold mb-3 rounded-md'>
              <p>{ mensaje }</p>
            </div>
        )
    )
}

// Inicio - Otra forma de pasar props:

// const Error = ({children}) => {
//     return(
//         (
//             <div className='bg-red-800 text-white text-center uppercase font-bold mb-3 rounded-md'>
//               { children }
//             </div>
//         )
//     )
// }

// Fin - Otra forma de pasar props:

export default Error