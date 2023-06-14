import { axiosInstance } from "@/pages/api/axios";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback, useState } from "react";

const useAxios = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = useCallback(
    async (
      requestConfig: AxiosRequestConfig,
      responseData: (response: AxiosResponse) => void,
      failed?: (error: AxiosError<any, any>) => void
    ) => {
      setIsLoading(true);
      let res;
      try {
        res = await axiosInstance.request({
          ...requestConfig,
        });
      } catch (error: any) {
        failed && failed(error as AxiosError<any, any>);
      } finally {
        if (res) {
          responseData(res);
        }
        setIsLoading(false);
      }
    },
    []
  );

  return {
    isLoading,
    sendRequest,
  };
};

export default useAxios;
