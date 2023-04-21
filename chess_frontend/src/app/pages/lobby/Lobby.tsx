import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { getMatches, createNewMatch } from '../../services/match-service';
import './Lobby.css';
import axios from 'axios';

interface Player {
  username: string;
  email: string;
  password: string;
  playerCredit: number;
}
interface Match {
  _id: string;
  players: Array<Player>;
  ended: boolean;
  matchCredit: number;
}

interface NewMatch {
  players: [
    {
      id: string;
      username: string;
      turn: string;
    }
  ];
  credits: number;
  ended: false;
  private: false;
}

function Lobby() {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState<Array<JSX.Element>>([]);
  const token = localStorage.getItem('token');
  let user_connected: any;
  // Redirection in no token
  if (token == null) {
    window.location.href = '/';
  }
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios.get('http://10.160.33.161:3000/user/me', config).then((r: any) => {
    user_connected = r['data']['message'];
  });

  async function getLobbyData() {
    const availableMatchesArray: Array<JSX.Element> = [];
    let matchListData: Array<Match> = [];

    const availableMatches = await getMatches();

    matchListData = availableMatches;

    matchListData.forEach((match, i) => {
      availableMatchesArray.push(
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          key={i}
        >
          <Typography
            sx={{
              margin: '1vh',
            }}
          >
            {match.players[0].username}
          </Typography>
          <Button variant="outlined" onClick={() => joinGame(match._id)}>
            Join
          </Button>
        </Box>
      );
    });

    setCardData(availableMatchesArray);
  }

  useEffect(() => {
    getLobbyData();
  }, []);

  function joinGame(matchId: string) {
    navigate(`/game?id=${matchId}&userId=${user_connected['_id']}`);
  }
  async function createNewGame() {
    const newMatchData: NewMatch = {
      players: [
        {
          id: user_connected['_id'],
          username: user_connected['username'],
          turn: 'w',
        },
      ],
      credits: 9000,
      ended: false,
      private: false,
    };

    const newGame: any = await createNewMatch(newMatchData);
    const id = newGame['result']['message']['insertedId'];
    navigate(`/game?id=${id}&userId=${user_connected['_id']}`, { state: { id: id } });
  }

  return (
    <Box>
      <Box
        sx={{
          margin: '3vh',
        }}
      >
        <Button variant="outlined" onClick={() => navigate('/dashboard')}>
          Back
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5vh',
        }}
      >
        <Box
          sx={{
            minWidth: '45vh',
            minHeight: '65vh',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '4vh',
            padding: '3vh',
            border: 'solid',
            borderColor: '#2f86d7',
            borderWidth: '0.2vh',
            borderRadius: '1vh',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              marginBottom: '4vh',
            }}
          >
            Available games
          </Typography>
          {cardData}
          <Button
            sx={{
              marginTop: '4vh',
            }}
            variant="outlined"
            onClick={() => createNewGame()}
          >
            Create new game
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Lobby;
