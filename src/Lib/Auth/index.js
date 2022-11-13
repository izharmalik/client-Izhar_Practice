import axios from 'axios';
import toast from 'react-hot-toast';

export const loginToDashboard = (url, body, setState, setLoading) => {
  axios
    .post(url, body)
    .then((res) => {
      setState(res?.data);
      setLoading(false);
      toast.success(res?.data?.message);
    })
    .catch((error) => {
      setState(error?.response?.data);
      setLoading(false);
      toast.error(error?.response?.data?.message);
    });
};
