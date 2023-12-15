import { Types } from "mongoose";

export interface IDocsActivity {
    docsId: Types.ObjectId | string
    uid: Types.ObjectId | string
    action: string
}

export interface IDocs {
    uid: Types.ObjectId | string;
    title: string;
    body: string;
    activity?: IDocsActivity[]
}