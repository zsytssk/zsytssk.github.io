import { default as fetch } from "node-fetch";

export function request(url: string, method = "GET", data = {} as any) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
}
