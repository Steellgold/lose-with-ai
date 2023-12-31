"use server";

import { prisma } from "@/lib/utils/db/prisma";
import type { Prisma, User } from "@prisma/client";
import { z } from "zod";

export const getUser = async(userId: string): Promise<Prisma.UserGetPayload<{ include: { programs: true }}> | null> => {
  const id = z.string().parse(userId);
  return prisma.user.findFirst({ where: { id }, include: { programs: true } });
};

export const updateUser = async(user: Prisma.UserUpdateInput): Promise<User | null> => {
  const id = z.string().parse(user.id);
  return prisma.user.update({ where: { id }, data: user });
};

export const deleteUser = async(userId: string): Promise<User | null> => {
  const id = z.string().parse(userId);
  return prisma.user.delete({ where: { id } });
};