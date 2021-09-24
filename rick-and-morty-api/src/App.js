import { useEffect, useState } from "react";
import "./App.css";
import { useAxios } from "./hooks";
import { BASE_URL } from "./constants/index";

function App() {
  const [data, setData] = useState();

  const { response, loading, error } = useAxios({
    method: "get",
    url: BASE_URL.characters,
  });

  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);

  return (
    <div className="App">
      <h1>App Component</h1>
      {loading ? (
        <p>...loading</p>
      ) : (
        <div>
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
          )}
          <div>{data && <p>{data.info.count} results</p>}</div>
        </div>
      )}
    </div>
  );
}

export default App;
