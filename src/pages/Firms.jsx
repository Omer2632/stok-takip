import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";
import { useState } from "react";
const Firms = () => {
  // const { token } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      phone: "",
      address: "",
      image: "",
    });
  };

  // const getFirms = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios(
  //       "http://14192.fullstack.clarusway.com/stock/firms/",
  //       {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       }
  //     );
  //     dispatch(getFirmsSuccess(data));
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    // getFirm()
    getStockData("firms");
  }, []);
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Firmalar
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        YENİ FİRMA
      </Button>
      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container justifyContent={"center"} spacing={2}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} handleOpen={handleOpen} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
