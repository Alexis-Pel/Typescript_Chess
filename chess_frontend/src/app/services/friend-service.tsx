// Api calls go here
import axios from 'axios';

interface Friend {
  username: string;
  credit: number;
}

export async function getFriends(userToken: object) {
  let friendResponseArray: Array<Friend> = [];

  await axios
    .post('http://localhost:3000/user/friend/getall', userToken, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      friendResponseArray = response.data.friends.userFriends;
    })
    .catch((error) => {
      console.log(error);
    });

  return friendResponseArray;
}

export async function addFriendToUser(userToken: object) {
  let toReturn = {};

  await axios
    .post('http://localhost:3000/user/friend', userToken, {
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

  return toReturn;
}
