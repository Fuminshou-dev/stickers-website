import { v } from "convex/values";
import { query } from "./_generated/server";

export const getAllStickers = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("stickers").collect();
  },
});

export const getSticker = query({
  args: { stickerId: v.number() },
  handler: async (ctx, args) => {
    const sticker = await ctx.db
      .query("stickers")
      .filter((q) => q.eq(q.field("stickerId"), args.stickerId))
      .collect();
    if (!sticker) return undefined;
    return sticker;
  },
});
