import Pt from 'prop-types';

const Notification = ({ mess }) => {
  return <p>{mess}</p>;
};

Notification.protoTypes = { mess: Pt.string };

export default Notification;
