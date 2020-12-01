import axios  from 'axios';

const KEY = 'AIzaSyAfugC4U9sque-jQ9hM7cdTHxJ_Id_OIhI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippit',
    type: 'video',
    maxResults: 5,
    key: KEY,

  }

});