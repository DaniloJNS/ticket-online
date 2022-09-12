import { useState, useEffect } from "react";
import EventList from "./EventList";

const Event = () => {
  const [events, useEvents] = useState([]);

  useEffect(() => {
    requestEvents();
  }, []);

  async function requestEvents() {
    const res = await fetch(
      "http://ticket-service-stage-rb.herokuapp.com/v1/events",
      { mode: "cors" }
    );

    const json = await res.json();

    useEvents(json);
  }

  return <EventList events={events} />;
};

export default Event;
