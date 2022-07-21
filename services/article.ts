import { IArticle } from "../models/article";
import {Article} from '../models';

class ArticleService{
    fetch(){
        return Article.find({}).lean().exec();
    }

    find(id: String){
        return Article.findById(id).lean().exec();
    }

    create(article: IArticle){
        return Article.create(article);
    }

    update(id: String, article: IArticle){
        return Article.findByIdAndUpdate(id, article).lean().exec();
    }

    remove(id: String){
        return Article.findByIdAndRemove(id).lean().exec();
    }

    constructor() { }
}

export default ArticleService;