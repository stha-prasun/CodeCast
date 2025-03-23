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

    socket.on("userJoined", async (userId, room) => {
      try {
        const user = await User.findById(userId).select("profilePic");
        if (!user) return;

        // Store user in activeUsers map
        activeUsers.set(socket.id, { profilePic: user.profilePic });

        // Join a room
        socket.join(room);

        // io.to(room).emit("activeUsers", Array.from(activeUsers.values()));
        io.emit("activeUsers", Array.from(activeUsers.values()));
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    });

    socket.on("codeChange", (data, room) => { 
      // socket.to(room).emit("codeUpdate", data);
      socket.broadcast.emit("codeUpdate", data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      activeUsers.delete(socket.id);
      io.emit("activeUsers", Array.from(activeUsers.values()));
    });
  });

  return io;
};

export default initializeSocket;
