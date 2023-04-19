import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import './Dashboard.css';

function Dashboard() {
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
          minWidth: '35vh',
          minHeight: '55vh',
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
          Friends Online
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
            Tristan
          </Typography>
          <Button variant="outlined" onClick={() => navigate('/game')}>
            Invite
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: '3vh',
          }}
        >
          <IconButton color="success" aria-label="add to shopping cart">
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          margin: '2vh',
        }}
      >
        <Box
          sx={{
            margin: '1vh',
          }}
        >
          <Button variant="outlined" onClick={() => navigate('/lobby')}>
            Join game
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
