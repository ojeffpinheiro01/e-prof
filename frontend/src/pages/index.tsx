import { Button, CircularProgress, Container, Typography } from '@mui/material';

import PageTitle from 'ui/components/dataDisplay/pageTitle/PageTitle';
import SafeEnvironment from 'ui/components/feedback/safeEnvironment/SafeEnvironment';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import UserInformation from 'ui/components/dataDisplay/UserInformation/UserInformation';

import {
  FormElementsContainer,
  ProfessionalsContainer,
  ProfessionalsPaper,
} from 'ui/styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

const Home = () => {
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
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />

      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={
          'Preencha seu endereço e veja todos os profissionais da sua localidade'
        }
      />

      <FormElementsContainer>
        <TextFieldMask
          mask={'99.999-999'}
          label={'Digite seu CEP'}
          fullWidth
          variant={'outlined'}
          value={cep}
          onChange={(t) => setCep(t.target.value)}
        />
        {err && <Typography color={'error'}>{err}</Typography>}

        <Button
          variant={'contained'}
          color={'secondary'}
          sx={{ width: '220px' }}
          disabled={!validCep || loading}
          onClick={() => searchProfs(cep)}
        >
          {loading ? <CircularProgress size={20} /> : 'BUSCAR'}
        </Button>
      </FormElementsContainer>

      {searchDone &&
        (profs.length > 0 ? (
          <ProfessionalsPaper>
            <ProfessionalsContainer>
              {profs.map((p, index) => {
                return (
                  <UserInformation key={index}
                    fullname={p.fullname}
                    avatarURL={p.avatarURL}
                    rating={p.rating}
                    description={p.city}
                  />
                )
              })}
            </ProfessionalsContainer>
            <Container sx={{ textAlign: 'center' }}>
              {rest > 0 && (
                <Typography sx={{ mt: 5 }}>
                  ...e mais {rest}{' '}
                  {rest > 1
                    ? 'profissionais atendem'
                    : 'profissional atende'}{' '}
                  ao seu endereço.
                </Typography>
              )}

              <Button variant={'contained'} color={'secondary'} sx={{ mt: 5 }}>
                Contratar um profissional
              </Button>
            </Container>
          </ProfessionalsPaper>
        ) : (
          <Typography align={'center'} color={'textPrimary'}>
            Ainda não temos nenhuma professor disponível em sua região
          </Typography>
        ))}
    </div>
  );
};

export default Home;
