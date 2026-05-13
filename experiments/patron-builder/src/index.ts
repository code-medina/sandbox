import express, {
  Router,
  type Application,
  type ErrorRequestHandler,
  type RequestHandler,
} from "express";

class App {
  private expressApp: Application;
  port = 8888;

  middlewares: RequestHandler[] = [];
  routers: Router[] = [];
  errorHandler?: ErrorRequestHandler;

  constructor(port:number,errorHandler?:ErrorRequestHandler,routers:Router[]=[],middlewares:RequestHandler[]=[]) {
    this.expressApp = express();
    this.port=port;
    this.routers=routers;
    this.middlewares=middlewares;
    if(errorHandler)
    this.errorHandler=errorHandler;
    
  }

  init() {
    // middlewares
    this.middlewares.forEach((mw) => {
      this.expressApp.use(mw);
    });

    // routers
    this.routers.forEach((router) => {
      this.expressApp.use(router);
    });

    // error handler
    if (this.errorHandler) {
      this.expressApp.use(this.errorHandler);
    }

    this.expressApp.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
class AppBuilder {
  private routers: Router[] = [];
  private middlewares: RequestHandler[] = [];
  private errorHandler?: ErrorRequestHandler;
  private port: number = 3000;

 // private app: App;
  constructor() {
 //   this.app = new App();
  }
  setPort(port: number) {
    this.port = port;

    //    this.app.port=port;
    return this;
  }
  setRouter(router: Router) {
    //  this.app.routers.push(router);
    this.routers.push(router);

    return this;
  }
  setErrorHandler(globalErrorHandler: ErrorRequestHandler) {
    //this.app.errorHandler = globalErrorHandler;
    this.errorHandler=globalErrorHandler;

    return this;
  }
  build() {
    
   // return this.app;
   return new App(this.port,this.errorHandler,this.routers,this.middlewares);
  }
}
const router: Router = Router();
router.get("/", (req, res) => {
  res.send("server is live");
});
const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error) {
    console.error(error);
    return res.status(500).json({ ok: false, error });
  }
};
const app = new AppBuilder()
  .setPort(8000)
  .setRouter(router)
  .setErrorHandler(errorHandler)
  .build();
app.init();
