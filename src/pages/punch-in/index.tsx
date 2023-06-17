import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { IPunchIn } from "./type";
import useAxios from "@/hook/useAxios";
import { AxiosResponse } from "axios";
import { api } from "../api";
interface IProps {}

const PunchIn: React.FC<IProps> = () => {
  const { sendRequest, isLoading } = useAxios();
  const [data, setData] = useState<IPunchIn>({
    userId: "",
    punchInTime: "",
    offWorkTime: "",
  });
  const [userId, setUserId] = useState<string>("");
  const onGetPunchInData = () => {
    sendRequest(
      {
        url: api.getPunchInData.url(),
        method: api.getPunchInData.method,
        params: {
          userId: userId,
        },
      },
      (response: AxiosResponse<IPunchIn, any>) => {
        setData(response.data);
      },
      (error) => {
        // setIsError(true);
        // setTimeout(() => {
        //   setIsError(false);
        // }, 3000);
      }
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <div onClick={onGetPunchInData}>取得資料</div>
      </div>
      {Object.entries(data).map(([k, v], index) => {
        return <div key={k}>{`${k} : ${v}`}</div>;
      })}
    </div>
  );
};

export default PunchIn;
