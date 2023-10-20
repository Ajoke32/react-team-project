import {z} from "zod";


export const LearnedTimeSchema = z.object({
   startDate:z.date(),
   endDate:z.date()
});

export type LearnedTimeInfer = z.infer<typeof LearnedTimeSchema>