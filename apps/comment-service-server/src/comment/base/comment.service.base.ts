/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Comment as PrismaComment } from "@prisma/client";
import { CommentDto } from "../CommentDto";

export class CommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CommentCountArgs, "select">): Promise<number> {
    return this.prisma.comment.count(args);
  }

  async comments(args: Prisma.CommentFindManyArgs): Promise<PrismaComment[]> {
    return this.prisma.comment.findMany(args);
  }
  async comment(
    args: Prisma.CommentFindUniqueArgs
  ): Promise<PrismaComment | null> {
    return this.prisma.comment.findUnique(args);
  }
  async createComment(args: Prisma.CommentCreateArgs): Promise<PrismaComment> {
    return this.prisma.comment.create(args);
  }
  async updateComment(args: Prisma.CommentUpdateArgs): Promise<PrismaComment> {
    return this.prisma.comment.update(args);
  }
  async deleteComment(args: Prisma.CommentDeleteArgs): Promise<PrismaComment> {
    return this.prisma.comment.delete(args);
  }
  async ConsumeKafkaEvent(args: string): Promise<CommentDto> {
    throw new Error("Not implemented");
  }
}
