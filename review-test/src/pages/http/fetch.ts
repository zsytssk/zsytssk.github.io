export function request(
  url: string,
  method = "GET",
  data = {} as any,
  headers = {} as any
) {
  const options = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      ...headers,
    },
    method,
  } as any;

  if (method === "POST" || method === "PUT" || method === "DELETE") {
    if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
      options.body = `${Object.keys(data)
        .map((k) => [k, data[k]].join("="))
        .join("&")}`;
    } else {
      options.body = JSON.stringify(data);
    }
  } else if (method === "GET") {
    let queryString: string = "";
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        queryString += `&${key}=${data[key]}`;
      }
    }
    if (url.indexOf("?") !== -1) {
      url += queryString === "" ? "" : `&${queryString.substring(1)}`;
    } else {
      url += queryString === "" ? "" : `?${queryString.substring(1)}`;
    }
  }

  return fetch(url, options).then((response) => response.json());
}
