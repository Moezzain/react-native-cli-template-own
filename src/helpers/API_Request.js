import axios from 'axios';
// import Cookies from 'js-cookie';

// export const getToken = () => {
//   let token = Cookies.get('authToken');

//   if (!token && window.currentDomainName === 'support') {
//     token = localStorage.getItem('guestAuthToken');
//   }

//   if (!token && localStorage.getItem('token')) {
//     token = localStorage.getItem('token');
//     localStorage.removeItem('token');
//   }

//   if (!token && location.pathname.startsWith('/sharing/')) {
//     token = Cookies.get('sharingToken');
//   }

//   return token || null;
// };

// const getHeaders = () => {
//   const token = getToken();

//   return token ? { Authorization: `Bearer ${token}` } : {};
// };

export let ApiRequest = axios.create({
  baseURL: process.env.API_URL,
  // headers: getHeaders(),
});

export let ApiRequestWithoutToken = axios.create({
  baseURL: process.env.API_URL,
});

const APIRequest = {
  async get({path, lang = 'ar', options, params = {}}) {
    return ApiRequestWithoutToken.get(path, {
      headers: {
        'Accept-Language': lang,
        'Content-type': 'application/json',
        ...options,
      },
      params: {...params},
    }).then(({data}) => data);
  },
  async post({path, lang = 'ar', data, options = {}}) {
    const response = await ApiRequestWithoutToken.post(path, data, {
      headers: {
        'Accept-Language': lang,
        'Content-type': 'application/json',
        ...options,
      },
    });

    return response.data;
  },
  async put({path, lang = 'ar', data}) {
    const response = await ApiRequestWithoutToken.put(path, data, {
      headers: {
        'Accept-Language': lang,
        'Content-type': 'application/json',
      },
    });

    return response.data;
  },
  delete(options) {},
  patch(options) {},
};

export default APIRequest;
