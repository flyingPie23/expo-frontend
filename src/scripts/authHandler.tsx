// import { axiosInstance } from "../scripts/axiosConfig.tsx"

// const setToken = (token: string) => {
//   if (token) {
//     axiosInstance.defaults.headers.common['Authorization'] = `token`;
//   } else {
//     delete axiosInstance.defaults.headers.common['Authorization'];
//   }
// }

// export const login = async (email: string, password:string) => {
//   axiosInstance.post('/login', {
//     user:{
//       email: email,
//       password: password
//     }

//   })
//   .then(function (response) {

//     localStorage.setItem('token', response.data.status.data.token);
//     setToken(response.data.status.data.token)

//     console.log(axiosInstance.defaults.headers.common['Authorization']);

//     fetch('http://localhost:3001/posts', {
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       }
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error('Error fetching posts:', error));
//   })
//   .catch(function (error) {
//     console.log(error);
//     alert(error.response.data.error)
//   });
// };

// export const signUp = async (email: string, password:string, password_confirmation:string) => {
//   axiosInstance.post('/signup', {
//     user:{
//       email: email,
//       password: password,
//       password_confirmation: password_confirmation,
//     }

//   })
//   .then(function (response) {

//     localStorage.setItem('token', response.data.info.token);
//     setToken(response.data.info.token)

//     console.log(localStorage.getItem("token"))
//     alert(`welcome to EX-PO`)

//     window.location.href = '/';
//   })
//   .catch(function (error) {
//     console.log(error);
//     alert(error.response.data.status.message)
//   });
// };

// export const logout = () => {

//   axiosInstance.delete('/logout', {
//   })
//   .then(function (response) {
//     localStorage.removeItem('token');
//     setToken('');
//     alert('Logged out successfully');

//     window.location.href = '/';
//   })
//   .catch(function (error) {
//     console.log(error)

//   });
// };

const ApiBase = "http://127.0.0.1:3001/"

export const login = async (email: string, password:string) =>{
  try{
    const response = await fetch(`${ApiBase}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    });

    const result = await response.json()

    if (result.status){
      localStorage.setItem('token', result.status.data.token);
      alert(result.status.message)

      window.location.href = '/';

    } else if (result.error) {
      alert(result.error)
    }
  }
  catch (error) {
    console.log(error)
  }

}

export const signUp = async (email: string, password:string, password_confirmation:string) =>{
  try{
    const response = await fetch(`${ApiBase}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
          password_confirmation: password_confirmation
        },
      }),
    });

    const result = await response.json()

    if (result.status.code == 200){
      localStorage.setItem('token', result.info.token);
      alert(result.status.message)

      window.location.href = '/';

    } else if (result.status.message) {
      alert(result.status.message)
    }
  }
  catch (error) {
    console.log(error)
  }

}

export const logout = async () =>{
  try{
    const response = await fetch(`${ApiBase}logout`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });

    console.log(await response.json())
    localStorage.removeItem('token');

    window.location.href = '/';



  }
  catch (error) {
    console.log(error)
  }


}

export const isSignedIn = async () => {
  let signed = false
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      signed = false;
    }

    const response = await fetch(`${ApiBase}signed_in`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      signed = false;
    }

    const result = await response.json();

    if (result.status === 200) {
      console.log("You are logged in");
      signed = true;
    } else {
      console.error('Error:', result.error || 'Invalid response');
      signed = false;
      localStorage.removeItem('token');
    }
  } catch (error) {
    console.error('Error:', error);
    signed = false;
  }
  console.log(signed)

  return signed
}
