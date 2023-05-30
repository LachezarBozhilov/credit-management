import axios from 'axios';

function requestCredits({
    onSuccess,
    onError,
  }) {
    axios
      .get("/api/credits")
      .then((response) => {
        const res = response.data;
        onSuccess(res);
      })
      .catch((error) => {
        onError(error.response.data);
      });
  }
  