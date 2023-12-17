/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUser, updateUser, getUser } from ".";
import type { Prisma } from "@prisma/client";

// Queries
export const getUserQuery = (userId: string) => {
  return { queryKey: ["getUser"], queryFn: () => getUser(userId) };
};

export const useGetUser = (userId: string) => {
  return useQuery(getUserQuery(userId));
};

// Mutations
export const updateUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: Prisma.UserUpdateInput) => updateUser(user),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getUser"] })
  });
};

export const deleteUserMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: string) => deleteUser(userId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getUser"] })
  });
};