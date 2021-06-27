import "../App.css";
import { useContext, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import AppContext from "../context/AppContext";
import { getTweets } from "../lib/database";

function Home() {
  const appContext = useContext(AppContext);

  useEffect(() => {
    getTweets()
      .then((response) => response.json())
      .then((data) => {
        setInterval(() => {
          appContext.setTweetsArray(data.tweets);
        }, [300000]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [appContext.tweetsArray]);

  return (
    <div>
      <div className="tweet-wrapper">
        <Form />
        <List type="text" />
      </div>
    </div>
  );
}

export default Home;
