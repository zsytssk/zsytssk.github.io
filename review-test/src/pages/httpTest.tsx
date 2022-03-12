import { useState } from "react";
import * as fetchUtil from "./http/fetch";
import * as http from "./http/http";

export default function HttpTest() {
  const [count, setCount] = useState(0);

  const getTest = async () => {
    console.log(`test:>1`);
    const result = await http.request(
      "https://api.weatherapi.com/v1/current.json?key=f0ebd22d679b4f44ba494712221103&q=London&aqi=no",
      "GET"
    );
    console.log(`test:>`, result);
  };

  const postTest = async () => {
    const new_title = "title";
    const userId = "zsytssk";
    const body = `est rerum tempore vitae
  sequi sint nihil reprehenderit dolor beatae ea dolores neque
  fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis
  qui aperiam non debitis possimus qui neque nisi nulla`;
    const result = await http.request(
      "https://jsonplaceholder.typicode.com/posts",
      "POST",
      {
        new_title,
        userId,
        body,
      }
    );

    console.log(`test:>`, result);
  };

  return (
    <div className="wrap">
      <button onClick={getTest}>getTest</button>
      <button onClick={postTest}>postTest</button>
    </div>
  );
}
