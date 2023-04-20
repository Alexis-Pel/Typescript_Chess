// Api calls go here
import axios from 'axios';

interface Player {
  username: string;
  email: string;
  password: string;
  playerCredit: number;
}
interface Match {
  players: Array<Player>;
  ended: boolean;
  matchCredit: number;
}

export async function getMatches() {
  //send api request
  //   const data = {
  //     players: players,
  //     ended: ended,
  //   };

  const testMatchesData: Array<Match> = [
    {
      players: [
        {
          username: 'angel',
          email: 'angel@angel.com',
          password: 'angel',
          playerCredit: 5000,
        },
      ],
      ended: false,
      matchCredit: 10000,
    },
    {
      players: [
        {
          username: 'alexis',
          email: 'alexis@alexis.com',
          password: 'alexis',
          playerCredit: 5000,
        },
      ],
      ended: false,
      matchCredit: 10000,
    },
  ];

  //   return runCreateMatch(data);
  return testMatchesData;
}

async function runCreateMatch(data: object) {
  let toReturn = {};
  await axios
    .post('http://localhost:8080/match/create', data, {
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
