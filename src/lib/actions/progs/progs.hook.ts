/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProg, deleteProg, getProg, getProgs, updateProg } from ".";
import type { Prisma } from "@prisma/client";

// Queries
export const getProgramQuery = (progId: string) => {
  return { queryKey: ["getPrograms"], queryFn: () => getProg(progId) };
};

export const getProgramsQuery = (userId: string) => {
  return { queryKey: ["getPrograms"], queryFn: () => getProgs(userId) };
};

export const useGetPrograms = (userId: string) => {
  return useQuery(getProgramsQuery(userId));
};

// Mutations
export const createProgramMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (program: Prisma.ProgramCreateInput) => createProg(program),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getPrograms"] })
  });
};

export const updateProgramMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (program: Prisma.ProgramUpdateInput) => updateProg(program),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getPrograms"] })
  });
};

export const deleteProgramMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (progId: string) => deleteProg(progId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getPrograms"] })
  });
};