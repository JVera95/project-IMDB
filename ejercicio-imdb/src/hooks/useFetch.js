import { useEffect } from "react";

export default function useFetch(URL, setState) {
  useEffect(async function fetchinData() {
    const response = await fetch(URL);
    const data = response.json();
    setState(data);
  }, fetchinData()),
    [URL, setState];
}
