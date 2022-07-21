import {Request, Response, NextFunction} from 'express'
const {CommentService} = require("../services");

const commentService = new CommentService();

class CommentsController{
    static async fetch(req: Request, res: Response, next: NextFunction){
        try{
            return res.send(await commentService.fetch(req.query.article));
        }
        catch(err){
            next(err);
        }
    }

    static async find(req: Request, res: Response, next: NextFunction){
        try{
            return res.send(await commentService.find(req.params.id));
        }
        catch(err){
            next(err);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction){
        try{
            return res.status(201).send(await commentService.create(req.body.comment));
        }
        catch(err){
            next(err);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction){
        try{
            return res.send(await commentService.update(req.params.id, req.body.comment));
        }
        catch(err){
            next(err);
        }
    }

    static async remove(req: Request, res: Response, next: NextFunction){
        try{
            return res.send(await commentService.remove(req.params.id));
        }
        catch(err){
            next(err);
        }
    }
}

export default CommentsController;