const urlServer =
  "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

export function addTweet(data) {
  return fetch(urlServer, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function getTweets() {
  return fetch(urlServer);
}
