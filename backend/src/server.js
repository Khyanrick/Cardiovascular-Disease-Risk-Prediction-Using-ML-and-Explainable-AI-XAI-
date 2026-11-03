import app from "./app.js" //default export
import { config }  from  "./config/env.js" //named export need { }

const server = app.listen(config.app.port, () => {
    console.log(`server connected successfully on port ${config.app.port}`);
});