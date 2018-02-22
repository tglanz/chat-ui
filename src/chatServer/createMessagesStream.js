import { Observable } from 'rxjs';

export default ({ socket, event }) => Observable.create(observer => {
    socket.on(event, message => observer.next(message));
})
