import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  reviews: defineTable({
    comment: v.string(),
    id: v.float64(),
    profileUrl: v.string(),
  }),
  stickers: defineTable({
    stickerName: v.string(),
    stickerImgUrl: v.string(),
    stickerId: v.float64(),
    stickerDescription: v.string(),
  }),
});
