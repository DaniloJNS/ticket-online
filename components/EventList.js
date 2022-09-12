import Event from "./Event";

const EventList = ({ events }) => {
  return (
    <>
      {!events?.length ? (
        <span>Não encontamos nenhum evento</span>
      ) : (
        events.map((event) => {
          return (
            <Event
              name={event.name}
              description={event.description}
              image={event.image}
            />
          );
        })
      )}
    </>
  );
};

export default EventList;
