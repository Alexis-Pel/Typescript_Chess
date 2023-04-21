// Api calls go here
import axios from 'axios';

export function register(username: string, password: string, email: string) {
  //send api request
  const data = {
    username: username,
    password: password,
    email: email,
  };
  return runRegister(data);
}

async function runRegister(data: object) {
  let toReturn = {};
  await axios
    .post('http://10.160.33.161:3000/user/register', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      toReturn = response.data;
    })
    .catch((error) => {
      toReturn = false;
    });
  console.clear();
  return toReturn;
}
