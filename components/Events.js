import EventList from "./EventList";
import useEventList from "./useEventList";

const Event = () => {
  const [events, status] = useEventList();

  return (
    <>
      {status == "unloaded" ? (
        <span>loading...</span>
      ) : (
        <EventList events={events} />
      )}
    </>
  );
};

export default Event;
