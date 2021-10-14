import { useMemo, useState } from "react";

import { UserShortInterface } from "../../@types/UserInterface";
import { ApiService } from "../../services/ApiService";
import { ValidationService } from "../../services/ValidationService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    validCep = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [err, setErr] = useState(""),
    [searchDone, setSearchDone] = useState(false),
    [loading, setLoading] = useState(false),
    [profs, setProfs] = useState([] as UserShortInterface[]),
    [rest, setRest] = useState(0);

  async function searchProfs(cep: string) {
    setLoading(true);
    setSearchDone(false);
    setErr("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>("/api/prof/city?cep=" + cep.replace(/\D/g, ""));

      setProfs(data.diaristas);
      setRest(data.quantidade_diaristas);

      setSearchDone(true);
      setLoading(false);
    } catch (e) {
      setErr("CEP não encontrado");
      console.log(e)
      setLoading(false);
    }
  }

  return {
    cep,
    setCep,
    validCep,
    searchProfs,
    err,
    profs,
    searchDone,
    loading,
    rest
  };
}