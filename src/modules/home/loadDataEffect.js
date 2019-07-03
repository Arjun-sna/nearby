import { useEffect, useState } from 'react';
import ApiService from '~/utils/apiService';

export function useLoadDataFromAPI(apiPath, params = {}) {
  const [apiData, setApiData] = useState(null);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  useEffect(() => {
    async function fetchFromAPI() {
      setIsRequestInProgress(true);
      const apiResponseData = await ApiService.sendGet(apiPath, params);
      setIsRequestInProgress(false);
      setApiData(apiResponseData);
    }

    fetchFromAPI();
  }, [apiPath, params]);

  return [isRequestInProgress, apiData];
}
