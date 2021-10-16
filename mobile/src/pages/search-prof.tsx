import React, { useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { ScrollView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import TextInput from 'ui/components/inputs/TextInput/TextInput';
import Button from 'ui/components/inputs/Button/Button';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import {
    FormContainer,
    TextContainer,
    ErrorText,
    ResponseContainer,
} from '@styles/pages/search-prof.styled';
import useIndex from 'data/hooks/pages/useIndex.page';
import useSearchProf from 'data/hooks/pages/useSearchProf.page.mobile';

const SearchProfs: React.FC = () => {
    const { colors } = useTheme();
    const {
        cep,
        setCep,
        validCep,
        searchProfissionais,
        searchDone,
        loading,
        rest,
        profs,
        erro
    } = useIndex(),
        { autoCep } = useSearchProf();

    useEffect(() => {
        if (autoCep && !cep) {
            setCep(autoCep);
            searchProfissionais(autoCep);
        }
    }, [autoCep]);

    return (
        <ScrollView>
            <PageTitle
                title={'Conheça os profissionais'}
                subtitle={
                    'Preencha seu endereço e veja todos os profissionais da sua localidade'} />

            <FormContainer>
                <TextInputMask
                    value={cep}
                    onChangeText={setCep}
                    type={'custom'}
                    options={{ mask: '99.999-999' }}
                    customTextInput={TextInput}
                    customTextInputProps={{ label: 'Digite seu CEP' }} />

                {erro ? <ErrorText>{erro}</ErrorText> : null}

                <Button
                    mode={'contained'}
                    style={{ marginTop: 32 }}
                    color={colors.accent}
                    disabled={!validCep || loading}
                    onPress={() => searchProfissionais(cep)}
                    loading={loading} >
                    Buscar
                </Button>
            </FormContainer>

            {searchDone &&
                (profs.length > 0 ? (
                    <ResponseContainer>
                        {profs.map((item, index) => (
                            <UserInformation key={index}
                                name={item.nome_completo}
                                rating={item.reputacao || 0}
                                picture={item.foto_usuario || ''}
                                description={item.cidade}
                                darker={index % 2 === 1}
                            />
                        ))}

                        {rest > 0 && (
                            <TextContainer>
                                ...e mais {rest}{' '}
                                {rest > 1
                                    ? 'profissionais atendem'
                                    : 'profissional atende'}{' '}
                                ao seu endereço.
                            </TextContainer>
                        )}

                        <Button color={colors.accent} mode={'contained'}>Contratar um profissional</Button>
                    </ResponseContainer>
                ) : (
                    <TextContainer>
                        Ainda não temos nenhuma diarista disponível em sua região
                    </TextContainer>
                ))}
        </ScrollView>
    );
};

export default SearchProfs;
