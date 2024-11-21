import config from "../config/config"
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint( config.appwriteURL )
        .setProject( config.projectID);

        this.account = new Account( this.client);
    }

    async createAccount( { email, password, name } ) {
        try{
            const userAccount = await this.account.create( ID.unique(), email, password, name );
            if( userAccount ) {
                //calling another method
                return this.login( {email, password });
            }
            else
                return userAccount;
        }
        catch(error)
        {

        }
    }

    async login( {email,password} ) {
        try {
            return await this.account.createEmailPasswordSession( email, password );
        }
        catch(error) {

        }
    }

    async getCurrentUser() {
        try {
            return this.account.get();
        }
        catch( error )
        {
            
        }

        return null;
    }
}