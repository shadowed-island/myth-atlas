import {
  BookOpen,
  Landmark,
  Moon,
  Sparkles,
  Sun,
  Swords
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { StoryCategory } from "@/lib/story-types";

export const categoryIconComponents: Record<StoryCategory, LucideIcon> = {
  myth: Sparkles,
  folktale: BookOpen,
  epic: Swords,
  creature: Moon,
  religion: Sun,
  history: Landmark
};
