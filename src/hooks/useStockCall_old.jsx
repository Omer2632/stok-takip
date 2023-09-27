import { useSelector } from "react-redux";
import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
const useStockCall = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  //   const getFirms = async () => {
  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios(
  //         "http://14192.fullstack.clarusway.com/stock/firms/",
  //         {
  //           headers: {
  //             Authorization: `Token ${token}`,
  //           },
  //         }
  //       );
  //       dispatch(getFirmsSuccess(data));
  //       console.log(data);
  //     } catch (error) {
  //       dispatch(fetchFail);
  //       console.log(error);
  //     }
  //   };
  //   const getSales = async () => {
  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axios(
  //         "http://14192.fullstack.clarusway.com/stock/sales/",
  //         {
  //           headers: {
  //             Authorization: `Token ${token}`,
  //           },
  //         }
  //       );
  //       dispatch(getSalesSuccess(data));
  //       console.log(data);
  //     } catch (error) {
  //       dispatch(fetchFail);
  //       console.log(error);
  //     }
  //   };
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `http://14192.fullstack.clarusway.com/stock/${url}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      dispatch(getStockSuccess({ data, url }));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const deleteStockData = async (url) => {
    dispatch(fetchStart());
    try {
      await axios.delete(
        `http://14192.fullstack.clarusway.com/stock/${url}/${id}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      toastSuccessNotify(`${url} succesfuly deleted`);
      getStockData();
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be deleted`);
      console.log(error);
    }
  };

  return { getStockData, deleteStockData };
};

export default useStockCall;
