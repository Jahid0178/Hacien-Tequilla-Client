import EventCard from "../../components/Cards/EventCard";
import { pastEvents, upcomingEvents } from "../../data/data";

const EventsPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div>
            <h2 className="text-4xl font-bold uppercase">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {upcomingEvents.map((upcomingEvent) => (
                <EventCard key={upcomingEvent.id} data={upcomingEvent} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div>
            <h2 className="text-4xl font-bold uppercase">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {pastEvents.map((pastEvent) => (
                <EventCard key={pastEvent.id} data={pastEvent} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
