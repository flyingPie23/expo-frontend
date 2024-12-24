import { axiosInstance } from "../scripts/axiosConfig.tsx"

const setToken = (token: string) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
}

export const login = async (email: string, password:string) => {
  axiosInstance.post('/login', {
    user:{
      email: email,
      password: password
    }

  })
  .then(function (response) {

    localStorage.setItem('token', response.data.status.data.token);
    setToken(response.data.status.data.token)

    alert(`welcome to EX-PO`)

    console.log(axiosInstance.defaults.headers.common['Authorization']);

    window.location.href = '/';
  })
  .catch(function (error) {
    console.log(error);
    alert(error.response.data.error)
  });
};

export const signUp = async (email: string, password:string, password_confirmation:string) => {
  axiosInstance.post('/signup', {
    user:{
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    }

  })
  .then(function (response) {

    localStorage.setItem('token', response.data.info.token);
    setToken(response.data.info.token)

    console.log(localStorage.getItem("token"))
    alert(`welcome to EX-PO`)

    window.location.href = '/';
  })
  .catch(function (error) {
    console.log(error);
    alert(error.response.data.status.message)
  });
};

export const logout = () => {

  axiosInstance.delete('/logout', {
  })
  .then(function (response) {
    localStorage.removeItem('token');
    setToken('');
    alert('Logged out successfully');

    window.location.href = '/';
  })
  .catch(function (error) {
    console.log(error)

  });
};
