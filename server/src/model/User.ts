import mongoose, { Document, Model, Schema } from "mongoose";

export interface IUser{
    
}


export interface IUserDocument extends IUser, Document {}

const UserSchema = new Schema<IUserDocument>(
    {
        
    }
);




const User: Model<IUserDocument> = mongoose.model<IUserDocument>("User", UserSchema);
export default User;