// Api calls go here
import axios from "axios";

export function logIn(username: string, password: string) {
    //send api request
    const data = {
        username: username,
        password: password
    };
    return runLogin(data)
}

async function runLogin(data: {}){
    let toReturn = {}
    await axios.post('http://localhost:8080/user/login', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            toReturn = response.data
        })
        .catch((error) => {
            toReturn = false
        });
    console.clear()
    return toReturn
}