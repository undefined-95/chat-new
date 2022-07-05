import { useSelector } from 'react-redux';

export function userAuth() {
  const { email, name, password, token, id } = useSelector(
    (state) => state.user
  );
  return {
    isAuth: !!email,
    email,
    name,
    password,
    token,
    id,
  };
}
