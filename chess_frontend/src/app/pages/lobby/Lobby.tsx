import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import './Lobby.css';

function Lobby() {
  const navigate = useNavigate();

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
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              margin: '1vh',
            }}
          >
            Game 0001
          </Typography>
          <Button variant="outlined" onClick={() => navigate('/game')}>
            Join
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Lobby;
