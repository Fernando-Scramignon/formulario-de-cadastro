import { RegisterPageDiv, RegisterPageForm } from "./style.js";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { motion } from "framer-motion";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .matches("[A-Za-z]", "Apenas letras são permitidas"),
  email: yup.string().email("Formato invalido").required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches("(?=.*[a-z])", "Obrigatório letra minúscula")
    .matches("(?=.*[A-Z])", "Obrigatório letra maiúscula")
    .matches("(?=.*[0-9])", "A senha precisa ter no mínimo um número")
    .matches(
      "(?=.*[!@#$%^&*])",
      "A senha precisa no mínimo ter um caractere especial"
    )
    .matches("(?=.{8,})", "A senha precisa conter no mínimo 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password"), null], "As senhas precisam ser idênticas"),
});

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let history = useHistory();

  function onSubmitFunction(data) {
    history.push(`/welcomePage/${data.name}`);
  }

  return (
    <RegisterPageDiv>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <RegisterPageForm
          type="submit"
          onSubmit={handleSubmit(onSubmitFunction)}
        >
          <div className="inputDiv">
            <TextField
              {...register("name")}
              error={errors?.name?.message ? true : false}
              helperText={errors?.name?.message}
              variant="standard"
              label="Nome"
              sx={{
                width: "70%",
              }}
            />
            <TextField
              {...register("email")}
              error={errors?.email?.message ? true : false}
              helperText={errors?.email?.message}
              variant="standard"
              label="Email"
              sx={{
                width: "70%",
              }}
            />
            <TextField
              {...register("password")}
              error={errors?.password?.message ? true : false}
              helperText={errors?.password?.message}
              type="password"
              variant="standard"
              label="Senha"
              sx={{
                width: "70%",
              }}
            />
            <TextField
              {...register("confirmPassword")}
              error={errors?.confirmPassword?.message ? true : false}
              helperText={errors?.confirmPassword?.message}
              type="password"
              variant="standard"
              label="Confirmar senha"
              sx={{
                width: "70%",
              }}
            />
          </div>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              padding: "5px 30px",
              color: "#BF3B3B",
              border: "1px solid #BF3B3B",

              "&:hover": { color: "#DD3939", border: "1px solid #DD3939" },
            }}
          >
            Cadastrar
          </Button>
        </RegisterPageForm>
      </motion.div>
    </RegisterPageDiv>
  );
}
