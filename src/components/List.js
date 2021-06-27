import "../App.css";
import moment from "moment";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function List(props) {
  const appContext = useContext(AppContext);
  //const { tweetsArray } = props;

  return (
    <div>
      {props.type === "text" && (
        <div className="tweet-list">
          {appContext.tweetsArray.map((tweet, idx) => {
            return (
              <div key={tweet.id} className="list-item">
                <div className="user-date">
                  <div>{tweet.userName}</div>

                  <div>
                    {moment(tweet.date).format("MMMM Do YYYY, h:mm:ss a")}
                  </div>
                </div>
                <div className="tweet">{tweet.content}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default List;
