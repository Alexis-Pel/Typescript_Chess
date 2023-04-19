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
      <Box>
        <Button variant="outlined">Play</Button>
      </Box>
    </Box>
  );
}

export default Dashboard;
