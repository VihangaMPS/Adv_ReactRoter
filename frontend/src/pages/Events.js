import {Link} from "react-router-dom";

const DUMMY_EVENTS = [
    { id: 'E1', title: 'Event 01'},
    { id: 'E2', title: 'Event 02'},
]

function EventsPage() {
    return (
    <>
        <h1>Events Home Page</h1>
        <ul>
            {DUMMY_EVENTS.map(event => (
                <li key={event.id}>
                    {/*<Link to={event.id}>{event.title}</Link>*/}
                    <Link to={`/events/${event.id}`}>{event.title}</Link>
                </li>
            ))}
        </ul>
    </>
    );
}

export default EventsPage;
