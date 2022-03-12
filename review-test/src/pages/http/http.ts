export function request(
  url: string,
  method = "GET",
  data = {} as any,
  headers = {} as any
) {
  return new Promise((resolve, reject) => {
    let sendData = "";
    if (method === "POST" || method === "PUT" || method === "DELETE") {
      if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
        sendData = `${Object.keys(data)
          .map((k) => [k, data[k]].join("="))
          .join("&")}`;
      } else {
        sendData = JSON.stringify(data);
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

    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(this.response);
      } else {
        reject({
          status: this.status,
          statusText: this.statusText,
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: this.statusText,
      });
    };

    xhr.send(sendData || "");
  });
}
