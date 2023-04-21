import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import { getFriends } from '../../services/friend-service';
import chess2 from '../../assets/chess2.png';
import { addFriendToUser } from '../../services/friend-service';
import TextField from '@mui/material/TextField';
import './Dashboard.css';

interface Friend {
  username: string;
  credit: number;
}

function Dashboard() {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState<Array<JSX.Element>>([]);
  const [newFriendName, setNewFriendName] = useState<string>('');

  async function joinFriendGame() {
    // Join friend's game
  }

  async function getFriendData() {
    const friendListCardArray: Array<JSX.Element> = [];
    let friendListData: Array<Friend> = [];
    const userJWTToken: string | null = localStorage.getItem('token');

    if (userJWTToken != null) {
      const currentUserToken: object = {
        token: userJWTToken,
      };

      friendListData = await getFriends(currentUserToken);
    }

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
            {friend.username}
          </Typography>
          <Button variant="outlined" onClick={() => joinFriendGame()}>
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

  async function addFrindToUser() {
    const userJWTToken: string | null = localStorage.getItem('token');

    if (userJWTToken != null) {
      const newFriendData: object = {
        newFriend: newFriendName,
        token: userJWTToken,
      };
      await addFriendToUser(newFriendData);
      getFriendData();
    }
  }

  function newFriendNameHandler(data: string) {
    setNewFriendName(data);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10vh',
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
          marginTop: '1vh',
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
          <Box>
            <Typography
              sx={{
                marginTop: '4vh',
              }}
            >
              Add friend
            </Typography>
            <TextField variant="outlined" onChange={(e) => newFriendNameHandler(e.target.value)} />
          </Box>
          <IconButton color="success" onClick={() => addFrindToUser()}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        component="img"
        sx={{
          width: '35vh',
          height: '40vh',
          borderRadius: '1vh',
          margin: '2vh',
        }}
        alt="Fantasy chess player"
        src={chess2}
      />
      <Box
        sx={{
          minWidth: '35vh',
          minHeight: '55vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '1vh',
          padding: '3vh',
          border: 'solid',
          borderColor: '#2f86d7',
          borderWidth: '0.2vh',
          borderRadius: '1vh',
        }}
      >
        <Box>
          <Button variant="outlined" onClick={() => navigate('/lobby')}>
            Join game
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
