import { cn } from "@/lib/utils";
import { motion } from "motion/react";

function SkeletonMotion({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="w-full h-full"
    >
      <div
        className={cn(
          "animate-pulse rounded-md bg-zinc-900/10 dark:bg-zinc-50/10",
          className
        )}
        {...props}
      />
    </motion.div>
  );
}

export { SkeletonMotion };
