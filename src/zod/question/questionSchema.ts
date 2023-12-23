import {z} from "zod";

export const questionSchema = z
    .object({
        question: z.string().min(10),
        countRightAnswers: z.number().min(1),
        answers: z.string()
    })
    .refine((data)=>data.answers != "No created answers", {
        message: "There are must be at least one answer!",
        path: ["answers"]
    }  )


