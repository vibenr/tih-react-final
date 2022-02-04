import axios from 'axios';

const instance=axios.create({
    baseURL:'https://tihapi.herokuapp.com'
})

export default instance