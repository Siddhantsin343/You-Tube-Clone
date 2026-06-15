const ChatMssg = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2 p-2 border-b">

      <img
        className="w-8 h-8 rounded-full"
        src="https://www.pngfind.com/pngs/m/93-938050_png-file-transparent-white-user-icon-png-download.png"
        alt="user"
      />

      <span className="font-semibold text-sm">
        {name}
      </span>

      <span className="text-sm">
        {message}
      </span>

    </div>
  );
};

export default ChatMssg;