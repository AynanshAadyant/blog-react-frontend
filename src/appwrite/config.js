import config from "../config/config"
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Services{
    client = new Client();
    databases; bucket;

    constructor() {
        this.client
        .setEndpoint( config.appwriteURL)
        .setProject( config.projectID)

        this.databases = new Databases( this.client );   
        this.bucket = new Storage( this.client );
    }

     async createPost( {title, slug, content, featuredImage, status, userID} ) {
        try{
            return await this.databases.createDocument( 
                config.databaseID, 
                config.collectionID, 
                slug, 
                { 
                    title, 
                    content, 
                    featuredImage, 
                    status, 
                    userID
                })
        }
        catch( error ) {
            console.log( "Appwrite service :: createPost error",error );
        }
    }

    async updatePost( slug, {title, content, featuredImage, status} ) {
        try{
            return await this.databases( 
                config.databaseID,
                config.collectionID,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status
                }
            )
        }
        catch( error )
        {
            console.log( "Appwrite service :: updatePost error", error );
        }
    }

    async deletePost( slug )
    {
        try{
            await this.databases.deleteDocument( config.databaseID, config.collectionID, slug );
        }
        catch( error ) {
            console.log( "Appwrite service :: deletePost error" );
        }
    }

    async getPost( slug )
    {
        try{
            return await this.getDocument(
                config.databaseID,
                config.collectionID,
                slug
            )
        }
        catch( error ) {
            console.log( "Appwrite service :: getPost error", error );
            return false; //denotes post not fetched for DB
        }
    }

    async getAllPosts( queries = [ Query.equal( "status", "active") ] ) {
        try{
            return await this.databases.listDocuments( 
                config.databaseID,
                config.collectionID,
                queries
            )
        }
        catch( error ) {
            console.log( `Appwrite service :: getAllPosts error, ${error}`)
        }
    }

    //file uploading service

    async uploadFile( file ) {
        try{
            return await this.bucket.createFile(
                config.bucketID,
                ID.unique(),
                file
            )
            return true;
        }
        catch( error ) {
            console.log( `Appwrite service :: uploadFile error ${error}`);
        } 
    }

    async deleteFile( file ) {
        try{
            await this.bucket.deleteFile(
                config.bucketID,
                file
            )
        }
        catch( error ) {
            console.log( `Appwrite service :: deleteFile error ${error}`);
            return false;
        }
    }

    getFilePreview( file ) {
        return this.bucket.getFilePreview(
            config.bucketID,
            file
        )
    }
}

const service = new Services();

export default service;
