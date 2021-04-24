import { Injectable } from "@angular/core";
import axios, { AxiosInstance } from "axios";

@Injectable()
export class Api{

    public request : AxiosInstance = axios.create({
            baseURL:"http://localhost:3000",
    });

}