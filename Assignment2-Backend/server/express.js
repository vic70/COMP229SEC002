import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
//import Template from "./../template.js";
//import userRoutes from "./routes/user.routes.js";
import productsRouters from "./routes/products.routers.js";

const app = express();

//To serve this template at the root URL, update the express.js file to import this template and send it in the response to a GET request for the '/' route.

app.get("/", (req, res) => {
  //res.status(200).send(Template());
  res.status(200).json({ message: "Welcome to DressStore application." });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use route
//app.use("/", userRoutes);
app.use("/", productsRouters);

/*... configure express ... */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
export default app;

/**
 bodyParser.json(): This is a middleware function that parses incoming requests with JSON payloads. After this middleware, you can access the JSON data of a request through req.body.

bodyParser.urlencoded({ extended: true }): This middleware function parses incoming requests with URL-encoded payloads. The extended: true option allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience.

cookieParser(): This middleware function parses cookie header and populate req.cookies with an object keyed by the cookie names. It can be used to read cookies sent back from the client.

compress(): This middleware function attempts to compress response bodies for all request that traverse through the middleware, based on the given options.

helmet(): Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

cors(): This is a middleware function to enable Cross Origin Resource Sharing (CORS). With this, you can specify which domains are allowed to access the resources of your app.
 */
