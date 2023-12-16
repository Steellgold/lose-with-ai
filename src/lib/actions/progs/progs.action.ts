"use server";

import { prisma } from "@/lib/utils/db/prisma";
import type { Prisma, Program } from "@prisma/client";
import { ProgramCreateInputSchema } from "@prisma/zod";
import { z } from "zod";

export const getProg = async(progId: string): Promise<Program | null> => {
  const id = z.string().parse(progId);
  return prisma.program.findFirst({ where: { id } });
};

export const getProgs = async(userId: string): Promise<Program[]> => {
  const id = z.string().parse(userId);
  return prisma.program.findMany({ where: { userId: id } });
}

export const createProg = async(program: Prisma.ProgramCreateInput): Promise<Program> => {
  const data = ProgramCreateInputSchema.parse(program);
  return prisma.program.create({ data });
};

export const updateProg = async(program: Prisma.ProgramUpdateInput): Promise<Program> => {
  const id = z.string().parse(program.id);
  const data = ProgramCreateInputSchema.parse(program);
  return prisma.program.update({ where: { id }, data });
};

export const deleteProg = async(progId: string): Promise<Program> => {
  const id = z.string().parse(progId);
  return prisma.program.delete({ where: { id } });
};