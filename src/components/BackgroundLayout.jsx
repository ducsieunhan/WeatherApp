// import Clear from '/public/images/Clear.jpg'
// import Fog from '/public/images/fog.png'
// import Cloudy from '/public/images/Cloudy.jpg'
// import Rainy from '/public/images/Rainy.jpg'
// import Snow from '/public/images/snow.jpg'
// import Stormy from '/public/images/Stormy.jpg'
// import Sunny from '/public/images/Sunny.jpg'
// import { useEffect, useState } from 'react'

// const background = [
//   {
//     id: '1',
//     src: Clear
//   },
//   {
//     id: '2',
//     src: Fog
//   },
//   {
//     id: '3',
//     src: Cloudy
//   },
//   {
//     id: '4',
//     src: Rainy
//   },
//   {
//     id: '5',
//     src: Snow
//   },
//   {
//     id: '6',
//     src: Stormy
//   },
//   {
//     id: '7',
//     src: Sunny
//   }
// ]

// const BackgroundLayout = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (count < 6) {
//         setCount(count + 1);
//       } else {
//         setCount(0);
//       }
//     }, 7000)
//     return () => clearInterval(interval);
//   }, [count])


//   return (
//     <img src={background[count].src} className='absolute h-screen w-full left-0 top-0 -z-[10] object-cover brightness-50' />
//   )
// }
// export default BackgroundLayout