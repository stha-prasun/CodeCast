import { Server } from "socket.io";
import { User } from "../models/userSchema.js";

const activeUsers = new Map();

const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("userJoined", async (userId) => {
      try {
        const user = await User.findById(userId).select("profilePic");
        if (!user) return;

        // Store user in activeUsers map
        activeUsers.set(socket.id, { profilePic: user.profilePic });

        // Send updated active users list to all clients
        io.emit("activeUsers", Array.from(activeUsers.values()));
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    });

    socket.on("codeChange", (data) => {
      console.log(data);
      socket.broadcast.emit("codeUpdate", data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  return io;
};

export default initializeSocket;
