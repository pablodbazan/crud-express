import { IComment } from "../models/comment";
import {Comment} from '../models';

class CommentService{
    fetch(articleId:  String){
        return Comment.find({ "article":  articleId}).populate('article').lean().exec();
    }

    find(id: String){
        return Comment.findById(id).populate('article').lean().exec();
    }

    create(comment: IComment){
        return Comment.create(comment);
    }

    update(id: String, comment: IComment){
        return Comment.findByIdAndUpdate(id, comment).lean().exec();
    }

    remove(id: String){
        return Comment.findByIdAndRemove(id).lean().exec();
    }
}

export default CommentService;