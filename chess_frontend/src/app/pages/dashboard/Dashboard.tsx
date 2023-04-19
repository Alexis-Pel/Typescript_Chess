import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import './Dashboard.css';

interface Friend {
  userName: string;
  credit: number;
}

function Dashboard() {
  const navigate = useNavigate();
  const [friendListData, setFriendListData] = useState<Array<Friend>>([]);
  const [cardData, setCardData] = useState<Array<JSX.Element>>([]);

  async function getFriendData() {
    const friendListCardArray: Array<JSX.Element> = [];
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

    setFriendListData(testFriendData);

    friendListData.forEach((friend, i) => {
      friendListCardArray.push(
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
            {friend.userName}
          </Typography>
          <Button variant="outlined" onClick={() => navigate('/game')}>
            Invite
          </Button>
        </Box>
      );
    });

    setCardData(friendListCardArray);
  }

  useEffect(() => {
    getFriendData();
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
        {cardData}
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
