import { z } from 'zod';

export const TopicSchema = z.object({
    title: z.string().min(5),
    description: z.string().min(5),
    imgLink: z.string().optional(),
});

export type TopicInfer = z.infer<typeof TopicSchema>;
