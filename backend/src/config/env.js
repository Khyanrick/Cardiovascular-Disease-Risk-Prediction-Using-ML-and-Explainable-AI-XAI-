import "dotenv/config";
import { z } from "zod";

// Define enviornment variable schema
const envschema =  z.object({
    NODE_ENV: z.enum(["development", "production", "test"])
    .default("development"),
    
    PORT: z.coerce.number()
    .int()
    .min(1)
    .max(65535)
    .default(3000),

    DATABASE_URL: z.string().min(1),

    JWT_SECRET: z.string().min(32),

    FRONTEND_URL: z.string().url()
});

//2. Validate environment variables:

const parsedENV = envschema.safeParse(process.env);

//3.error handling
if (!parsedENV.success){
    console.error("Invalid environment configuration:");
    console.error(parsedENV.error.flatten().fieldErrors);
    process.exit(1);
}

//4. Export centrallized configuration
export const config = {
    app: {
        environment: parsedENV.data.NODE_ENV,
        port: parsedENV.data.PORT        
    },
    database: {
        url: parsedENV.data.DATABASE_URL
    },
    auth : {
        jwtsecret: parsedENV.data.JWT_SECRET
    },
    frontend: {
        url : parsedENV.data.FRONTEND_URL
    }
}