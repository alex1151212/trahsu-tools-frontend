import DownloadProgress from "@/components/download-progress";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { IDownlaodIgImg } from "./type";
import useAxios from "@/hook/useAxios";
import { AxiosResponse } from "axios";
import { api } from "../api";
import Image from "next/image";
import JSZip from "jszip";
interface IProps {}

const ImageDownloader: React.FC<IProps> = () => {
  const { sendRequest, isLoading } = useAxios();
  const [data, setData] = useState<IDownlaodIgImg>({
    filesName: [],
    userId: "",
    amount: 0,
  });
  const [userId, setUserId] = useState<string>("");
  const onGetInstagramImage = () => {
    sendRequest(
      {
        url: api.getIgImage.url(),
        method: api.getIgImage.method,
        params: {
          userId: userId,
        },
      },
      (response: AxiosResponse<IDownlaodIgImg, any>) => {
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
      <input
        type="text"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <div onClick={onGetInstagramImage}>取得照片</div>
      <div>
        {data.filesName.length > 0 &&
          data.filesName.map((file, index) => {
            return (
              <Image
                src={file}
                alt=""
                key={index}
                width={100}
                height={100}
                style={{ width: "auto" }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ImageDownloader;
