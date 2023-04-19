import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import './Lobby.css';

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

function Lobby() {
  const navigate = useNavigate();
  const [matchData, setMatchData] = useState<Array<Match>>([]);
  const [cardData, setCardData] = useState<Array<JSX.Element>>([]);

  async function getLobbyData() {
    const availableMatchesArray: Array<JSX.Element> = [];
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

    setMatchData(testMatchesData);

    matchData.forEach((match, i) => {
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
          <Button variant="outlined" onClick={() => navigate('/game')}>
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

  return (
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
      </Box>
    </Box>
  );
}

export default Lobby;
