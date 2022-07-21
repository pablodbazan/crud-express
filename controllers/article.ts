import {Request, Response, NextFunction} from 'express'
const {ArticleService} =  require('../services');

const articleService = new ArticleService();

class ArticleController{

    static async fetch(req: Request, res: Response, next: NextFunction){
        try{
            return res.send(await articleService.fetch());
        }
        catch(err){
            next(err);
        }
    }

    static async find(req: Request, res: Response, next: NextFunction){
        try{
            return res.send(await articleService.find(req.params.id));
        }
        catch(err){
            next(err);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction){
        try{
            return res.status(201).send(await articleService.create(req.body.article));
        }
        catch(err){
            next(err);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction){
        try{
            return res.send(await articleService.update(req.params.id, req.body.article));
        }
        catch(err){
            next(err);
        }
    }

    static async remove(req: Request, res: Response, next: NextFunction){
        try{
            return res.send(await articleService.remove(req.params.id));
        }
        catch(err){
            next(err);
        }
    }
}

export default ArticleController;