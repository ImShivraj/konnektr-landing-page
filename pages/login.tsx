import React from "react";
import TextField from "@material-ui/core/TextField";
import { Box, Button, Container } from "@material-ui/core";

type Props = {};

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
const onSubmit = async ({ email }) => {
  const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
  const didToken = await magic.auth.loginWithMagicLink({ email });
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + didToken,
    },
    body: JSON.stringify({ email }),
  });
  if (res.status === 200) {
    // redirect
    Router.push("/");
  } else {
    // display an error
  }
};

const LoginPage = (props: Props) => {
  return (
    <Container maxWidth="xs">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="email"
            fullWidth
            autoComplete="email"
            autoFocus
            {...register("email", {
              required: "Required field",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login In / Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
