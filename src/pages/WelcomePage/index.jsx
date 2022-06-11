import "./style.js";
import { WelcomePageDiv } from "./style.js";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function WelcomePage() {
  const { name } = useParams();

  return (
    <WelcomePageDiv>
      <motion.div
        className="motionDiv"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Bem vindo, <span>{name}</span> !
        </h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              background: "#BF3B3B",
              padding: "5px 30px",
              "&:hover": { background: "#DD3939" },
            }}
          >
            Voltar
          </Button>
        </Link>
      </motion.div>
    </WelcomePageDiv>
  );
}
