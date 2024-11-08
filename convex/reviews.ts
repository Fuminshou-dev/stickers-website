import { query } from "./_generated/server";

export const getAllReviews = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("reviews").collect();
  },
});
