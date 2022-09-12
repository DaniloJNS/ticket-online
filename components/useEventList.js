import { useState, useEffect } from "react";
let localCache = [];

export default function useEventList() {
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (localCache.length == 0) {
      requestEvents();
    } else {
      setEvents(localCache);
    }

    async function requestEvents() {
      const res = await fetch(
        "http://ticket-service-stg-rb.herokuapp.com/v1/events",
        { mode: "cors" }
      );

      const json = await res.json();

      localCache = json;
      setEvents(localCache);
      setStatus("loaded");
    }
  }, []);

  return [events, status];
}
