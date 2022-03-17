import APIRequest from '../API_Request';

export const paymentStatusPost = ({data, locale}) => {
  return APIRequest.post({
    path: `${process.env.API_URL}/payment/statusWeb`,
    lang: locale,
    options: {
      'Access-Control-Allow-Origin': '*',
    },
    data,
  });
};
