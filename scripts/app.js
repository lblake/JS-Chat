const chatroom = new Chatroom("general", "Lloyd");

chatroom.getChats(data => {
  console.log(data);
});
