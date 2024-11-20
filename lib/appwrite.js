/*

import { Platform } from "react-native";
import {Account,  Client, ID } from 'react-native-appwrite';
import { Avatars } from "react-native-appwrite";
import { Databases } from "react-native-appwrite";
import { Query } from "react-native-appwrite";
import { createEmailSession } from "react-native-appwrite";	


export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform:'com.jsm.BLOODKING',
    projectId:'66a35af20037742091aa',
    databaseId:'66a362550030bb520c80',
    userCollectionId:'66a3628c00083f632398',
    VideoCollectionId:'66a3630c003380d5c1de',
    storageId:'66a366100037ef85e1ea',

}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases (client);

export const createUser = async (email, password, username) => {
    try{
        const newAccount = await account.create( 
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw new Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn(email, password);
    
        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )
        return newUser;

    }catch (error){
        console.log(error);
        throw new Error(error);
    }
}



export const signIn = async (email, password) => {
    try{
        const session = await account.createEmailSession(email, password);
        return session;

    }catch (error){
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try{
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0];
    }catch (error){
        console.log(error);
    }
}

*/