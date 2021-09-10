import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: process.env.BASE_URL
}

export const CREDENTIALS = {
    STANDAD_USER:{
        USERNAME: process.env.STANDARD_USERNAME,
        PASSWORD: process.env.STANDARD_PASSWORD
    }
}