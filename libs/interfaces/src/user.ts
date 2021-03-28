export interface UserLogin {
  email: string,
  access_token: string,
  full_name: string,
}

export interface HeaderUserProps {
  user: UserLogin,
  className: string,
}

export interface UserState {
  user: {
    data: UserLogin,
    loading: boolean,
    error: string,
  }
}
