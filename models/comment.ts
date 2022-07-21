import {Schema, model} from 'mongoose';

export interface IComment {
    author: string;
    body: string;
    article: Schema.Types.ObjectId;
  }

  const commentSchema: Schema = new Schema<IComment>({
    author: { type: String, required: true },
    body: { type: String, required: true },
    article: {type: Schema.Types.ObjectId, ref: 'Article'}
    }, {timestamps: true});


const Comment = model<IComment>('Comment', commentSchema);

export default Comment;