import APIRequest from '../API_Request';

export const fetchAvailableChairs = ({
  showId,
  ticketsPricingID,
  date,
  locale,
}) => {
  return APIRequest.get({
    path: `${process.env.API_URL}/show/availableChairs`,
    lang: locale,
    options: {
      'Access-Control-Allow-Origin': '*',
    },
    params: {
      ticketsPricing: ticketsPricingID,
      show: showId,
      ...date,
    },
  });
};
