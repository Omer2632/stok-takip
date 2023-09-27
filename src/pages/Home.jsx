import { Typography } from "@mui/material";
import KpiCards from "../components/KpiCards";
import Charts from "../components/Charts";
import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";

const Home = () => {
  const { getStockData } = useStockCall();
  useEffect(() => {
    getStockData("sales");
    getStockData("purchased");
  }, []);

  return (
    <div>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        Stok Takip
      </Typography>
      <KpiCards />
      <Charts />
    </div>
  );
};

export default Home;
