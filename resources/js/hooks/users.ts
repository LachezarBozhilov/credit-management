import axios from 'axios';

function requestUsers({
    onSuccess,
    onError,
  }) {
    axios
      .get("/api/users")
      .then((response) => {
        const res = response.data;
        onSuccess(res);
      })
      .catch((error) => {
        onError(error.response.data);
      });
  }
  