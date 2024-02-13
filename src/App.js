import { useEffect, useState } from 'react';
import './App.css';

function App() {



  const STR = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const LENGTH = 8;

  const [password, setPassowrd] = useState('kdhgfhgwe8698y67');


  // const checkLimit = (random, lowerLimit, upperLimit, double, lessThan) => {

  //   if (!double) {

  //     if (lessThan) {
  //       if (random < lowerLimit) {
  //         return true
  //       }
  //       return false

  //     } else {
  //       if (random > lowerLimit) {
  //         return true
  //       }
  //       return false
  //     }

  //   } else {
  //     if (random > lowerLimit && random < upperLimit) {
  //       return true;
  //     }
  //     return false;
  //   }
  // }

  const generatePassword = () => {

    let passwordCreated = "";

    let crossedLimit0 = false;
    let crossedLimit25 = false;
    let crossedLimit51 = false;

    for (let i = 0; i < LENGTH; i++) {
      let random = (Math.random() * 61).toFixed(0);

      console.log(random);

      // crossedLimit0 = checkLimit(random, 25, null, false, true);
      // crossedLimit25 = checkLimit(random, 25, 51, true, null);
      // crossedLimit51 = checkLimit(random, 51, null, false, false);


      if (random < 25) {
        crossedLimit0 = true;
      }

      if (random > 25 && random < 51) {
        crossedLimit25 = true;
      }

      if (random > 51) {
        crossedLimit51 = true;
      }

      passwordCreated += STR[random];

    }

    // if (!crossedLimit0 || !crossedLimit25 || !crossedLimit51) {
    //   generatePassword();
    //   return;
    // }
    console.log(passwordCreated);

    setPassowrd(passwordCreated);

  }



  return (
    <div className="App">


      <button className='button' onClick={generatePassword}>Generate password</button>


      <div className='password'> {password}</div>



    </div>
  );
}



export default App;
