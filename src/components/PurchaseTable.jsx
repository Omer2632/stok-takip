import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import { btnStyle } from "../styles/globalStyles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

export default function PurchaseTable({ handleOpen, setInfo }) {
  const { purchases } = useSelector((state) => state.stock);
  const { deleteStockData } = useStockCall();

  const columns = [
    {
      field: "createds",
      headerName: "Tarih",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "firm",
      headerName: "Firma",
      flex: 2,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "brand",
      headerName: "Marka",
      flex: 1.5,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "product",
      headerName: "Ürün",
      flex: 1.5,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Miktar",
      minWidth: 70,
      headerAlign: "center",
      align: "center",
      flex: 1,
      type: "number",
    },
    {
      field: "price",
      headerName: "Fiyat",
      minWidth: 70,
      headerAlign: "center",
      align: "center",
      flex: 1,
      type: "number",
    },
    {
      field: "price_total",
      headerName: "Toplam",
      minWidth: 90,
      headerAlign: "center",
      align: "center",
      flex: 1,
      type: "number",
    },
    {
      field: "actions",
      headerName: "Eylem",
      minWidth: 70,
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: ({
        id,
        row: { brand_id, product_id, quantity, price, firm_id },
      }) => [
        <GridActionsCellItem
          key={"edit"}
          icon={<EditIcon />}
          label="Edit"
          onClick={() => {
            handleOpen();
            setInfo({ id, firm_id, brand_id, product_id, quantity, price });
          }}
          sx={btnStyle}
        />,
        <GridActionsCellItem
          key="delete"
          icon={<DeleteForeverIcon />}
          label="Delete"
          onClick={() => deleteStockData("purchases", id)}
          sx={btnStyle}
        />,
      ],
    },
  ];

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <DataGrid
        autoHeight={true}
        rows={purchases}
        columns={columns}
        pageSize={5}
        pageSizeOptions={[20, 50, 75, 100]}
        slots={{ toolbar: GridToolbar }}
        disableRowSelectionOnClick
        sx={{
          boxShadow: 4,
        }}
      />
    </Box>
  );
}
