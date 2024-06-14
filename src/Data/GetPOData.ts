import { useQuery } from 'react-query';
import fetchPODataFromAPI from './EMEAApi'

// This function assumes window.POData is already set
const getInitialPOData = () => {
    return window.POData;
};

export const readPOData = () => {
  const poNbr = getInitialPOData().POData.PODetails.ProcessOrderNbr;

  return useQuery(['poData', poNbr], () => fetchPODataFromAPI(poNbr), {
    // Set the refetch interval to 60 seconds
    refetchInterval: 15000,
    refetchOnWindowFocus: true,
    // Optionally, you can use the initial data from window.POData
    initialData: getInitialPOData,
  });
};