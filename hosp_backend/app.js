import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
const app = express();


config({ path: "./config/config.env" });

app.use(cors({
    origin:[process.env.FRONTEND_URL, process.env.DASHBOARD_URL,"https://hospital-management-app-28f4.vercel.app"],
    methods: ["GET","PUT", "POST", "DELETE"],
    credentials: true
})
);

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form data (x-www-form-urlencoded)
app.use("/api/v1/message", messageRouter);


app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));

app.use("/api/v1/user", userRouter);

app.use("/api/v1/appointment", appointmentRouter);
dbConnection();

app.post("/test", (req, res) => {
  console.log("🚀 TEST req.body:", req.body);
  res.json({ received: req.body });
});


app.use(errorMiddleware);
export default app;