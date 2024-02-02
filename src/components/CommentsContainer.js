import React from "react";

const commentsData = [
  {
    name: "Shashank",
    text: "lorem ipsum dolor sit",
    replies: [],
  },
  {
    name: "Shashank",
    text: "lorem ipsum dolor sit",
    replies: [
      {
        name: "Shashank",
        text: "lorem ipsum dolor sit",
        replies: [
          {
            name: "Shashank",
            text: "lorem ipsum dolor sit",
            replies: [
              {
                name: "Shashank",
                text: "lorem ipsum dolor sit",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shashank",
    text: "lorem ipsum dolor sit",
    replies: [
      {
        name: "Shashank",
        text: "lorem ipsum dolor sit",
        replies: [],
      },
      {
        name: "Shashank",
        text: "lorem ipsum dolor sit",
        replies: [],
      },
      {
        name: "Shashank",
        text: "lorem ipsum dolor sit",
        replies: [],
      },
    ],
  },
  {
    name: "Shashank",
    text: "lorem ipsum dolor sit",
    replies: [],
  },
  {
    name: "Shashank",
    text: "lorem ipsum dolor sit",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  console.log(name, text);
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div key={i}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
