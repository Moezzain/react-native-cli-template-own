import APIRequest from '../API_Request';

export const paymentInformationPost = ({
  showId,
  method,
  brand,
  tickets,
  locale,
  UserData,
}) => {
  return APIRequest.post({
    path: `${process.env.API_URL}/tickets/buy`,
    lang: locale,
    options: {
      'Access-Control-Allow-Origin': '*',
    },
    data: {
      paymentMethod: method,
      brand,
      tickets: tickets,
      show: showId,
      userData: UserData,
    },
  });
};
