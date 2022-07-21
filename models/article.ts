import {Schema, model} from 'mongoose';

export interface IArticle {
    title: string;
    author: string;
    body: string;
}

const articleSchema: Schema = new Schema<IArticle>({
    title: {type: String, required: true},
    author: {type: String, required: true},
    body: {type: String, required: true}
}, {timestamps: true});


const Article = model<IArticle>('Article', articleSchema);

export default Article;