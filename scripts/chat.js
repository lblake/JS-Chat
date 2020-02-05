class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.db = db.collection("chats");
  }
  async addChat(message) {
    const now = new Date();
    const chat = {
      message: message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    const response = await this.chats.add(chat);
    return response;
  }
}
