// Api calls go here
import axios from 'axios';

interface Friend {
  userName: string;
  credit: number;
}

export async function getFriends() {
  const testFriendData: Array<Friend> = [
    {
      userName: 'Tristan',
      credit: 400,
    },
    {
      userName: 'Angel',
      credit: 400,
    },
    {
      userName: 'Alexis',
      credit: 400,
    },
  ];

  //   return runCreateMatch(data);
  return testFriendData;
}

export async function addFriendToUser(userId: string) {
  let toReturn = {};
  await axios
    .post('http://localhost:8080/match/create', userId, {
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
