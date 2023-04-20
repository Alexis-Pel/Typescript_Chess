export interface IUFriend {
  username: string;
}

export interface IUserRegisterBody {
  friends: Array<IUFriend>;
  username: string;
  email: string;
  password: string;
}

export interface IUserLoginBody {
  username: string;
  password: string;
}
