// Bien sûr, voici les noms en anglais et en français pour les activités sportives et les conseils liés à la perte de poids :

import { ReactElement } from "react";
import { IconRun, IconRings, IconSwimming, IconBike, IconHelmet, IconYoga, IconPool, IconBarbell, IconMountain, IconConfetti, IconUsersGroup, IconKarate, IconJumpRope, IconSnowboarding, IconKayak, IconBallTennis, IconWood, IconWalk, IconStairs, IconStretching, IconTrekking, IconPingPong, IconGolf  } from "@tabler/icons-react";

type SPORTS = "RUNNING" | "HIIT" | "SWIMMING" | "CYCLING" | "CIRCUIT" | "WEIGHTLIFTING" | "YOGA" | "CLIMBING" | "ZUMBA" | "GROUP" | "PLANKING" | "HIKING" | "KICKBOXING" | "AEROBICS" | "TEAM" | "JUMP" | "SKIING" | "FUNCTIONAL" | "PILATES" | "WATER" | "TENNIS" | "TRX" | "ELLIPTICAL" | "STAIR" | "TAICHI" | "CROSSFIT" | "STAIRCLIMBING" | "PERSONAL" | "COMMUNITY";

export type Sport = {
  id: SPORTS;
  name: string;
  description: string;
  icon: ReactElement;
};

export const Sports: Sport[] = [
  { id: "RUNNING", name: "Running", description: "Dynamic sprinting for fitness enthusiasts.", icon: <IconRun className="w-6 h-6" /> },
  { id: "HIIT", name: "HIIT", description: "Intense bursts ignite rapid calorie burn.", icon: <IconStretching className="w-6 h-6" /> },
  { id: "SWIMMING", name: "Swimming", description: "Fluid strokes in aquatic serenity.", icon: <IconPool className="w-6 h-6" /> },
  { id: "CYCLING", name: "Cycling", description: "Smooth pedal motion, endless vitality.", icon: <IconBike className="w-6 h-6" /> },
  { id: "CIRCUIT", name: "Circuit Training", description: "Varied exercises for holistic fitness.", icon: <IconRings className="w-6 h-6" /> },
  { id: "WEIGHTLIFTING", name: "Weightlifting", description: "Strengthening through controlled resistance.", icon: <IconBarbell className="w-9 h-9" /> },
  { id: "YOGA", name: "Yoga", description: "Mindful poses, harmony in motion.", icon: <IconYoga className="w-6 h-6" /> },
  { id: "CLIMBING", name: "Climbing", description: "Ascend to peak strength and resilience.", icon: <IconMountain className="w-6 h-6" /> },
  { id: "ZUMBA", name: "Zumba or Aerobic Dance", description: "Rhythmic joy, cardio celebration.", icon: <IconConfetti className="w-6 h-6" /> },
  { id: "GROUP", name: "Group Workouts", description: "Motivation in collective fitness journeys.", icon: <IconUsersGroup className="w-6 h-6" /> },
  { id: "PLANKING", name: "Planking", description: "Core stability, enduring strength.", icon: <IconWood className="w-6 h-6" /> },
  { id: "HIKING", name: "Outdoor Hiking", description: "Nature's gym, scenic endurance.", icon: <IconWalk className="w-6 h-6" /> },
  { id: "KICKBOXING", name: "Kickboxing", description: "Power-packed cardio with martial flair.", icon: <IconKarate className="w-6 h-6" /> },
  { id: "AEROBICS", name: "Aerobics", description: "Dynamic rhythmic movement, heart-pumping energy.", icon: <IconPingPong className="w-6 h-6" /> },
  { id: "TEAM", name: "Team Sports", description: "Collective triumphs in football or basketball.", icon: <IconBallTennis className="w-6 h-6" /> },
  { id: "JUMP", name: "Jump Rope Workout", description: "Cardio precision with rhythmic jumps.", icon: <IconJumpRope className="w-6 h-6" /> },
  { id: "SKIING", name: "Skiing or Snowboarding", description: "Alpine exhilaration in winter sports.", icon: <IconSnowboarding className="w-6 h-6" /> },
  { id: "FUNCTIONAL", name: "Functional Training", description: "Adaptive exercises for real-world strength.", icon: <IconTrekking className="w-6 h-6" /> },
  { id: "PILATES", name: "Pilates", description: "Core-centric balance and flexibility.", icon: <IconGolf className="w-6 h-6" /> },
  { id: "WATER", name: "Water Sports", description: "Kayaking - aquatic adventure and fitness fusion.", icon: <IconKayak className="w-6 h-6" /> },
  { id: "TENNIS", name: "Tennis or Badminton", description: "Racquet elegance, court agility.", icon: <IconBallTennis className="w-6 h-6" /> },
  { id: "TRX", name: "TRX Training", description: "Suspension challenge for full-body strength.", icon: <IconConfetti className="w-6 h-6" /> },
  { id: "ELLIPTICAL", name: "Elliptical Cycling", description: "Fluid elliptical motion for low-impact cardio.", icon: <IconWalk className="w-6 h-6" /> },
  { id: "STAIR", name: "Stair Cardio Exercises", description: "Ascend for elevated heart health.", icon: <IconStairs className="w-6 h-6" /> }
];