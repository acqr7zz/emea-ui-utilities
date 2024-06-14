import { useQuery } from 'react-query';
import { readPOData } from './GetPOData';

export const getPODetails = () => {
  const mainQuery = readPOData();

  return useQuery(['poDetails', mainQuery.data?.POData.PODetails.ProcessOrderNbr], () => {
    return mainQuery.data?.POData.PODetails;
  }, {
    enabled: !!mainQuery.data, // Only run if the main query has data
  });
};

export const getInputs = () => {
    const mainQuery = readPOData();
  
    return useQuery(['inputs', mainQuery.data?.POData.PODetails.ProcessOrderNbr], () => {
      return mainQuery.data?.POData.inputs;
    }, {
      enabled: !!mainQuery.data, // Only run if the main query has data
    });
};

export const getOutputs = () => {
    const mainQuery = readPOData();
  
    return useQuery(['outputs', mainQuery.data?.POData.PODetails.ProcessOrderNbr], () => {
      return mainQuery.data?.POData.outputs;
    }, {
      enabled: !!mainQuery.data, // Only run if the main query has data
    });
};

export const getTime = () => {
    const mainQuery = readPOData();
  
    return useQuery(['time', mainQuery.data?.POData.PODetails.ProcessOrderNbr], () => {
      return mainQuery.data?.POData.Time;
    }, {
      enabled: !!mainQuery.data, // Only run if the main query has data
    });
};