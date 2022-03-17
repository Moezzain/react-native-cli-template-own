import APIRequest from '../API_Request';

export const getShows = (id, locale) => {
  return APIRequest.get({
    path: `${process.env.API_URL}/show/${id}`,
    lang: locale,
  });
};
