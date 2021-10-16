import { UserShortInterface } from 'data/@types/UserInterface';
import { ApiService } from 'data/services/ApiService';
import { ValidationService } from 'data/services/ValidationService';
import { useState, useMemo } from 'react';

export default function useIndex() {
    const [cep, setCep] = useState(''),
        validCep = useMemo(() => {
            return ValidationService.cep(cep);
        }, [cep]),
        [erro, setErro] = useState(''),
        [searchDone, setSearchDone] = useState(false),
        [loading, setLoading] = useState(false),
        [profs, setProfs] = useState([] as UserShortInterface[]),
        [rest, setRest] = useState(0);

    async function searchProfissionais(cep: string) {
        setSearchDone(false);
        setLoading(true);
        try {
            setErro('');
            const { data } = await ApiService.get<{
                diaristas: UserShortInterface[];
                quantidade_diaristas: number;
            }>('/api/diaristas-cidade?cep=' + cep.replace(/\D/g, ''));

            setSearchDone(true);
            setProfs(data.diaristas);
            setRest(data.quantidade_diaristas);
            setLoading(false);
        } catch (error) {
            setErro('CEP não encontrado');
            setLoading(false);
        }
    }

    return {
        cep,
        setCep,
        validCep,
        searchProfissionais,
        erro,
        profs,
        searchDone,
        loading,
        rest,
    };
}
