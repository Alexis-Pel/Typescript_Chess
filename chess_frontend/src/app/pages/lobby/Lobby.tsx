import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { getMatches, createNewMatch } from '../../services/match-service';
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

interface NewMatch {
  players: [
    {
      username: string;
    }
  ];
  credits: 9000;
  ended: false;
  private: false;
}

function Lobby() {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState<Array<JSX.Element>>([]);

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

  async function createNewGame() {
    const newMatchData: NewMatch = {
      players: [
        {
          username: 'alexis',
        },
      ],
      credits: 9000,
      ended: false,
      private: false,
    };

    const newGame = await createNewMatch(newMatchData);
    console.log(newGame);
    navigate('/game');
  }

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
  );
}

export default Lobby;
