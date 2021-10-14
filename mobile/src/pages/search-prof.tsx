import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { useTheme } from "@emotion/react";

import { TextInputStyled } from "ui/components/inputs/TextInput/TextInput.style";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import { ButtonStyled } from "ui/components/inputs/Button/Button.style";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import {
  ErrorText,
  FormContainer,
  ResponseContainer,
  TextContainer,
} from "ui/styles/pages/search-prof.styled";
import useIndex from "data/hooks/pages/useIndex.page";
import useSearchProf from "data/hooks/pages/useSearchProf.page.mobile";

const Index: React.FC = () => {
  const { colors } = useTheme();
  const {
    cep,
    setCep,
    validCep,
    searchProfs,
    err,
    profs,
    searchDone,
    loading,
    rest,
  } = useIndex(),

  { autoCep } = useSearchProf();

  useEffect(() => {
    if(autoCep && !cep){
      setCep(autoCep)
      searchProfs(autoCep)
    }
  }, [autoCep])

  return (
    <ScrollView>
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={ "Preencha seu endereço e veja todos os profissionais da sua localidade" } />

      <FormContainer>
        <TextInputMask
          value={cep}
          onChangeText={setCep}
          type={"custom"}
          options={{ mask: "99.999-999" }}
          customTextInput={TextInputStyled}
          customTextInputProps={{ label: "Digite seu CEP" }} />

        {err ? <ErrorText>{err}</ErrorText> : null}

        <ButtonStyled
          mode={"contained"}
          style={{ marginTop: 32 }}
          color={colors.accent}
          disabled={!cep || loading}
          onPress={() => searchProfs(cep)}
          loading={loading}
        >
          Buscar
        </ButtonStyled>
      </FormContainer>

      {searchDone &&
        (profs.length > 0 ? (
          <ResponseContainer>
            {profs.map((p, index) => {
              <UserInformation key={index}
                user={p.fullname}
                rating={p.rating || 0}
                pic={p.avatarURL || ''}
                description={p.city}
                darker={index % 2 ===1 }
              />
            })}

            {rest > 0 && (<TextContainer>
              ...e mais {rest} {rest > 1
                ? 'profissionais atendem' : 'profissional atende'}{' '} ao seu endereço

            </TextContainer>)}

            <ButtonStyled
              mode={"contained"} color={colors.accent}
              onPress={() => { }}
            >
              Contratar um profissional
            </ButtonStyled>
          </ResponseContainer>
        ) : (
          <TextContainer>
            Ainda não temos nenhuma diarista disponível em sua região
          </TextContainer>
        ))}
    </ScrollView>
  );
};

export default Index;
