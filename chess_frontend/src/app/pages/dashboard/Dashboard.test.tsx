import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('renders Dashboard page', async () => {
  //////////////////
  //// ARRANGE ////
  /////////////////
  mockedAxios.post.mockImplementation(() =>
    Promise.resolve({
      data: {
        friends: {
          status: 201,
          userFriends: [{ username: 'alexis' }, { username: 'tristan' }, { username: 'tibo' }],
        },
      },
    })
  );

  //////////////////
  ////// ACT ///////
  //////////////////

  //////////////////
  ///// ASSERT /////
  //////////////////
  render(<Dashboard />);
});
