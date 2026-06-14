const commentData = [
  {
    name: "siddhant",
    comment: "Hi this is comment !",
    reply: [
      {
        name: "siddhant",
        comment: "Hi this is comment !",
        reply: [
          {
            name: "siddhant",
            comment: "Hi this is comment !",
            reply: [
              {
                name: "siddhant",
                comment: "Hi this is comment !",
                reply: [
                  {
                    name: "siddhant",
                    comment: "Hi this is comment !",
                    reply: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "siddhant",
    comment: "Hi this is comment !",
    reply: [
      {
        name: "siddhant",
        comment: "Hi this is comment !",
        reply: [
          {
            name: "siddhant",
            comment: "Hi this is comment !",
            reply: []
          }
        ]
      }
    ]
  }
];


const Comment = ({ info }) => {
  const { name, comment } = info;

  return (
    <div className="flex gap-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-200">
      <img
        className="w-10 h-10 rounded-full object-cover"
        src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${name}`}
        alt={name}
      />

      <div>
        <p className="font-semibold text-sm text-gray-900">@{name}</p>
        <p className="text-sm text-gray-700 mt-1">{comment}</p>

        <div className="flex gap-4 mt-2 text-sm text-gray-500">
          <button className="hover:text-black">👍</button>
          <button className="hover:text-black">👎</button>
          <button className="hover:text-black">Reply</button>
        </div>
      </div>
    </div>
  );
};

const CommentList = ({ comment }) => {
  return comment.map((com, index) => (
    <div key={index}>
      <Comment info={com} />

      {com.reply.length > 0 && (
        <div className="ml-8 border-l-2 border-gray-300 pl-4 mt-2">
          <CommentList comment={com.reply} />
        </div>
      )}
    </div>
  ));
};

const CommentSection = () => {
  return (
    <div className="mt-6 p-4 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">
        Comments ({commentData.length})
      </h1>

      <CommentList comment={commentData} />
    </div>
  );
};

export default CommentSection;
