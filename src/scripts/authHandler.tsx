import axios from "axios";

export const login = async (email: string, password:string) => {
  axios.post('http://127.0.0.1:3001/login', {
    user:{
      email: email,
      password: password
    }

  })
  .then(function (response) {
    const data = response.data
    console.log("signed in", data.status.data);
    alert(`welcome: ${data.status.data.user.name}`)
  })
  .catch(function (error) {
    console.log("failed to signin", error.response.data);
    alert(error.response.data.error)
  });
};

export const signUp = async (email: string, password:string) => {
  axios.post('http://127.0.0.1:3001/signup', {
    user:{
      email: email,
      password: password,
    }

  })
  .then(function (response) {
    console.log("signed in", response);
  })
  .catch(function (error) {
    console.log("failed to signin", error);
  });
};
