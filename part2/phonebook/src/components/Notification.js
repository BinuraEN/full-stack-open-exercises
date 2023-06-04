const Notification = ({ message, type = "success" }) => {
  if (message === null) {
    return null;
  }

  return (
    <div
      className="notification"
      style={{ color: type === "error" ? "red" : "green" }}
    >
      {message}
    </div>
  );
};

export default Notification;
