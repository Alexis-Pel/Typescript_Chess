import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Dashboard.css';

function Dashboard() {
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
          <Button variant="outlined">Friends</Button>
        </Box>
        <Box
          sx={{
            margin: '1vh',
          }}
        >
          <Button variant="outlined">Play</Button>
        </Box>
        <Box
          sx={{
            margin: '1vh',
          }}
        >
          <Button variant="outlined">Create game</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
