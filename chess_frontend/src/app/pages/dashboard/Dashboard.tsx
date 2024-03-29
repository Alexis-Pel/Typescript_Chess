import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import { getFriends } from '../../services/friend-service';
import chess1 from '../../assets/chess1.png';
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

  async function joinFriendGame(friendName: string) {
    // Create match with friend username
    console.log(friendName);
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
          <Button variant="outlined" onClick={() => joinFriendGame(friend.username)}>
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

  function disconnectionHandler() {
    localStorage.clear();
    navigate('/');
  }

  return (
    <Box>
      <Box
        sx={{
          margin: '3vh',
        }}
      >
        <Button variant="outlined" onClick={() => disconnectionHandler()}>
          Disconnect
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
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
            marginBottom: '5vh',
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
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: '5vh',
            }}
          >
            <Typography
              sx={{
                marginTop: '4vh',
              }}
            >
              Add friend
            </Typography>
            <TextField
              sx={{
                marginTop: '1vh',
              }}
              variant="outlined"
              onChange={(e) => newFriendNameHandler(e.target.value)}
            />
            <IconButton color="success" onClick={() => addFrindToUser()}>
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
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
          <Box
            component="img"
            sx={{
              width: '25vh',
              height: '30vh',
              borderRadius: '1vh',
              margin: '2vh',
            }}
            alt="Fantasy chess player"
            src={chess1}
          />
          <Box>
            <Button variant="outlined" onClick={() => navigate('/lobby')}>
              Join game
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
