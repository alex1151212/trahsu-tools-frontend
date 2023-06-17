import { Method as M } from "axios";

const Method = {
  POST: "POST" as M,
  GET: "GET" as M,
  PUT: "PUT" as M,
  PATCH: "PATCH" as M,
  DELETE: "DELETE" as M,
};

export const api = {
  getIgImage: { url: () => `crawler`, method: Method.GET },
  getPunchInData: {
    url: () => `punch_in/disPlayOffWorkTime`,
    method: Method.GET,
  },
};
