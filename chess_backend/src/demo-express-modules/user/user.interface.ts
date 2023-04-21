export interface IUFriend {
  username: string;
}

export interface IUserRegisterBody {
  username: string;
  email: string;
  password: string;
}

export interface IUserLoginBody {
  username: string;
  password: string;
}

export interface IUAddFriend {}
