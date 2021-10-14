import React from "react";
import {
  AppList,
  FooterContainer,
  FooterStyled,
  FooterTitle,
} from "./Footer.style";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <div>
          <Box sx={{ maxWidth: "400px" }}>
            <FooterTitle>Quem somos</FooterTitle>
            <Typography variant={"body2"} sx={{ mt: 2 }}>
              e-prof te ajuda a encontrar um profissional perfeito para te
              ajudar nas suas dificuldades em todas diciplinas, seja na escola
              ou faculdade, para aprender a tocar um instrumento ou um novo
              idioma. São milhares de professores particulares cadastrados que
              estão espalhados por todo o Brasil.
            </Typography>
          </Box>
        </div>

        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
