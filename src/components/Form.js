import { useEffect, useState, useContext } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import Loader from "./Loader";
import AppContext from "../context/AppContext";
import { addTweet } from "../lib/database";

function Form(props) {
  const appContext = useContext(AppContext);
  //const { setTweetsArray } = props;
  const [newTweet, setNewTweet] = useState("");
  const [tweetData, setTweetData] = useState({});
  const [date, setDateValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (newTweet.length < 140) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [newTweet]);

  const handleInputMessage = (e) => {
    setNewTweet(e.target.value);
  };

  useEffect(() => {
    setTweetData({
      content: newTweet,
      userName: appContext.userName,
      date: Date.now(),
      id: uuidv4(),
    });
  }, [newTweet, date, appContext.userName]);

  const handleClick = () => {
    setIsLoading(true);

    const tweetPost = {
      content: tweetData.content,
      userName: tweetData.userName,
      date: new Date(tweetData.date),
    };
    addTweet(tweetPost)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setIsLoading(false);
        }, [1000]);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });

    appContext.setTweetsArray((prevState) => {
      return [tweetData, ...prevState];
    });
    setTweetData({});
    setNewTweet("");
  };

  return (
    <div className="tweet-body">
      <textarea
        type="text"
        onInput={handleInputMessage}
        value={newTweet}
        placeholder="What do you have in mind..."
        name="newTweet"
        id="newTweet"
        className="new-tweet"
      />
      <input
        type="text"
        value="The tweet can't contain more than 140 chars."
        className={`error-message-${isDisabled}`}
      />
      {isLoading && <Loader />}
      {!isLoading && (
        <button
          disabled={isDisabled}
          className={`input-button input-button-${isDisabled}`}
          onClick={handleClick}
        >
          Tweet
        </button>
      )}
    </div>
  );
}

export default Form;
