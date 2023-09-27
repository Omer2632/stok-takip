import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/imggg.jpg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { object, string } from "yup";
// import { login } from "../hooks/useAuthCall";
import useAuthCall from "../hooks/useAuthCall";
import { red } from "@mui/material/colors";

const Login = () => {
  const { login } = useAuthCall();

  const loginSchema = object({
    email: string()
      .email("Lütfen geçerli email giriniz...")
      .required("Bu alan zorunludur."),
    password: string()
      .required("Bu alan zorunludur.")
      .min(8, "En az 8 karakter girilmelidir.")
      .max(16, "En fazla 16 karakter girilmelidir.")
      .matches(/\d+/, "En az bir rakam içermelidir.")
      .matches(/[a-z]/, "En az bir küçük harf içermelidir.")
      .matches(/[A-Z]/, "En az bir büyük harf içermelidir.")
      .matches(/[!,?{}><%&$#£+-.]+/, "En az bir özel karekter içermelidir."),
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOK TAKİP PROGRAMI
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Giriş
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, action) => {
              login(values);
              action.resetForm();
              action.setSubmitting(false);
            }}
          >
            {({ handleChange, handleBlur, values, errors, touched }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="şifre"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    helperText={errors.password}
                  />
                  <Button variant="contained" type="submit">
                    Giriş Yap
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box color={"#c62828"} sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Hesabınız var mı?</Link>
          </Box>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          <h3>Stok takibi nedir?</h3>
        </Grid>
        <Grid item justifyContent="center" alignItems="center" mt={1}>
          Stok takibi, bir işletmenin faaliyetini yürütebilmek için satmak üzere
          aldığı ya da satılacak ürünü üretmek için kullandığı malzemelerin
          kaydıdır.
        </Grid>
        <Grid item mt={4}>
          <h3>Stok takibi yapmak neden önemlidir?</h3>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} mt={2}>
            <h4>-Operasyonunuzun kontrolünde olun</h4>
            Sisteminize yapılan ürün giriş ve çıkışların en güncel bilgisine
            dilediğiniz her yerden ulaşabilir, tam kontrolde olmanın güveni ile
            operasyonunuzu yönetebilirsiniz.
          </Grid>
          <Grid item xs={12} md={4} mt={2}>
            <h4>-Tek bir satış bile kaçırmayın</h4>
            Online stok takip programı aracılığıyla stok takibi yaparak
            gereksinimlerinizi belirleyebilir, hangi ürün için ne zaman sipariş
            vermeniz gerektiğini netleştirebilirsiniz.
          </Grid>

          <Grid item xs={12} md={4} mt={2}>
            <h4>-Müşterilerinizin taleplerini anlayın</h4>
            Stok takibi yaparak müşterilerinizin hangi dönemlerde hangi ürünlere
            talep gösterdiğini analiz edebilir, verileriniz ile satış
            stratejinizi şekillendirebilirsiniz.
          </Grid>
        </Grid>
        <Grid item xs={10} sm={7} md={6} mt={4}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "200px",
              minWidth: "400px",
            }}
          >
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
