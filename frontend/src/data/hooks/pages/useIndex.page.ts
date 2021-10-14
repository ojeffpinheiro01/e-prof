import { UserShortInterface } from "data/@types/UserInterface";
import { ApiService } from "data/services/ApiService";
import { ValidationService } from "data/services/ValidationService";
import { useMemo, useState } from "react";

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
        profs: UserShortInterface[];
        num_profs: number;
      }>("/api/prof/city?cep=" + cep.replace(/\D/g, ""));

      setProfs(data.profs);
      setRest(data.num_profs);

      setSearchDone(true);
      setLoading(false);
    } catch (e) {
      setErr("CEP não encontrado");
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