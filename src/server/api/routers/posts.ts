import { z } from "zod";

import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

export const postsRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.posts.findMany();
    }),


    getOne: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(({ ctx, input }) => {
            return ctx.prisma.posts.findUnique({
                where: {
                    id: input.id,
                },
            });
        }),

    create: protectedProcedure
        .input(
            z.object({
                title: z.string(),
                content: z.string(),
                published: z.boolean(),
                authorId: z.string(),
                slug: z.string(),
                thumbnail: z.string(),
                images: z.array(z.string()),
                tags: z.array(z.string()),
            })
        ).mutation(({ ctx, input }) => {
            return ctx.prisma.posts.create({
                data: {
                    title: input.title,
                    content: input.content,
                    published: input.published,
                    authorId: input.authorId,
                    slug: input.slug,
                    thumbnail: input.thumbnail,
                    images: input.images,
                    tags: input.tags,
                },
            })
        }),
});