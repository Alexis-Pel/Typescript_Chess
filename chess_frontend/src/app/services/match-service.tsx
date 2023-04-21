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
  private: boolean;
}

export async function getMatches() {
  let toReturn: Array<Match> = [];
  await axios
    .get('http://10.160.33.161:3000/match')
    .then((response) => {
      toReturn = response.data.matches.matches;
    })
    .catch((error) => {
      console.log(error);
    });

  return toReturn;
}

export async function createNewMatch(data: object) {
  console.log({ data });

  let toReturn = {};
  await axios
    .post('http://10.160.33.161:3000/match', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data);
      toReturn = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return toReturn;
}
