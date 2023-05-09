import type { NextApiRequest, NextApiResponse } from "next";
import { z, ZodError } from "zod";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    switch (req.method) {
        case 'POST': {
            const result = await createUser(req.body);
            return res.status(result.success ? 200 : 400).json(result);
        }
        default:
          return res.status(405).json('Method not allowed.');
      }
    
  }
  
  const useSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    confirmEmail: z.string().email(),
    role: z.enum(["Lead Engineer", "Senior Engineer", "Engineer"]),
    websiteUrl: z.string().url().nullable().optional(),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Email and Confirm Email should match",
    path: ["confirmEmail"],
  });

  async function createUser(
    rawData: any
  ): Promise<{ success: boolean; errors: any }> {
    try {
      const data = useSchema.parse(rawData);
      console.log("Saving Data", data);
    } catch (e) {
      if (e instanceof ZodError) {
        return { success: false, errors: e.flatten() };
      } else {
        throw e;
      }
    }
  
    return { success: true, errors: null };
  }