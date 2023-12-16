// @ts-nocheck
import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','name','credit','createdAt','updatedAt']);

export const ProgramScalarFieldEnumSchema = z.enum(['id','prompt','createdAt','updatedAt','userId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string(),
  name: z.string(),
  credit: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// PROGRAM SCHEMA
/////////////////////////////////////////

export const ProgramSchema = z.object({
  id: z.string().uuid(),
  prompt: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string(),
})

export type Program = z.infer<typeof ProgramSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  programs: z.union([z.boolean(),z.lazy(() => ProgramFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  programs: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  credit: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  programs: z.union([z.boolean(),z.lazy(() => ProgramFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PROGRAM
//------------------------------------------------------

export const ProgramIncludeSchema: z.ZodType<Prisma.ProgramInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const ProgramArgsSchema: z.ZodType<Prisma.ProgramDefaultArgs> = z.object({
  select: z.lazy(() => ProgramSelectSchema).optional(),
  include: z.lazy(() => ProgramIncludeSchema).optional(),
}).strict();

export const ProgramSelectSchema: z.ZodType<Prisma.ProgramSelect> = z.object({
  id: z.boolean().optional(),
  prompt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  programs: z.lazy(() => ProgramListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  credit: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  programs: z.lazy(() => ProgramOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credit: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  programs: z.lazy(() => ProgramListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  credit: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserSumOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  credit: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ProgramWhereInputSchema: z.ZodType<Prisma.ProgramWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProgramWhereInputSchema),z.lazy(() => ProgramWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramWhereInputSchema),z.lazy(() => ProgramWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  prompt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const ProgramOrderByWithRelationInputSchema: z.ZodType<Prisma.ProgramOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  prompt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const ProgramWhereUniqueInputSchema: z.ZodType<Prisma.ProgramWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => ProgramWhereInputSchema),z.lazy(() => ProgramWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramWhereInputSchema),z.lazy(() => ProgramWhereInputSchema).array() ]).optional(),
  prompt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const ProgramOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProgramOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  prompt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProgramCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProgramMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProgramMinOrderByAggregateInputSchema).optional()
}).strict();

export const ProgramScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProgramScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProgramScalarWhereWithAggregatesInputSchema),z.lazy(() => ProgramScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramScalarWhereWithAggregatesInputSchema),z.lazy(() => ProgramScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  prompt: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string().optional(),
  credit: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  programs: z.lazy(() => ProgramCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string().optional(),
  credit: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  programs: z.lazy(() => ProgramUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  programs: z.lazy(() => ProgramUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  programs: z.lazy(() => ProgramUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string().optional(),
  credit: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProgramCreateInputSchema: z.ZodType<Prisma.ProgramCreateInput> = z.object({
  id: z.string().uuid().optional(),
  prompt: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProgramsInputSchema)
}).strict();

export const ProgramUncheckedCreateInputSchema: z.ZodType<Prisma.ProgramUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  prompt: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export const ProgramUpdateInputSchema: z.ZodType<Prisma.ProgramUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prompt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutProgramsNestedInputSchema).optional()
}).strict();

export const ProgramUncheckedUpdateInputSchema: z.ZodType<Prisma.ProgramUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prompt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProgramCreateManyInputSchema: z.ZodType<Prisma.ProgramCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  prompt: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export const ProgramUpdateManyMutationInputSchema: z.ZodType<Prisma.ProgramUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prompt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProgramUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProgramUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prompt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const ProgramListRelationFilterSchema: z.ZodType<Prisma.ProgramListRelationFilter> = z.object({
  every: z.lazy(() => ProgramWhereInputSchema).optional(),
  some: z.lazy(() => ProgramWhereInputSchema).optional(),
  none: z.lazy(() => ProgramWhereInputSchema).optional()
}).strict();

export const ProgramOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProgramOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  credit: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput> = z.object({
  credit: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  credit: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  credit: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = z.object({
  credit: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const ProgramCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProgramCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  prompt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProgramMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProgramMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  prompt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProgramMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProgramMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  prompt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProgramCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ProgramCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutUserInputSchema),z.lazy(() => ProgramCreateWithoutUserInputSchema).array(),z.lazy(() => ProgramUncheckedCreateWithoutUserInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProgramCreateOrConnectWithoutUserInputSchema),z.lazy(() => ProgramCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProgramCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProgramUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ProgramUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutUserInputSchema),z.lazy(() => ProgramCreateWithoutUserInputSchema).array(),z.lazy(() => ProgramUncheckedCreateWithoutUserInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProgramCreateOrConnectWithoutUserInputSchema),z.lazy(() => ProgramCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProgramCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const ProgramUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ProgramUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutUserInputSchema),z.lazy(() => ProgramCreateWithoutUserInputSchema).array(),z.lazy(() => ProgramUncheckedCreateWithoutUserInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProgramCreateOrConnectWithoutUserInputSchema),z.lazy(() => ProgramCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProgramUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ProgramUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProgramCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProgramUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ProgramUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProgramUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ProgramUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProgramScalarWhereInputSchema),z.lazy(() => ProgramScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProgramUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ProgramUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutUserInputSchema),z.lazy(() => ProgramCreateWithoutUserInputSchema).array(),z.lazy(() => ProgramUncheckedCreateWithoutUserInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProgramCreateOrConnectWithoutUserInputSchema),z.lazy(() => ProgramCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProgramUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ProgramUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProgramCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProgramUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ProgramUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProgramUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ProgramUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProgramScalarWhereInputSchema),z.lazy(() => ProgramScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutProgramsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutProgramsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutProgramsInputSchema),z.lazy(() => UserUncheckedCreateWithoutProgramsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProgramsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutProgramsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProgramsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutProgramsInputSchema),z.lazy(() => UserUncheckedCreateWithoutProgramsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProgramsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutProgramsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutProgramsInputSchema),z.lazy(() => UserUpdateWithoutProgramsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProgramsInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const ProgramCreateWithoutUserInputSchema: z.ZodType<Prisma.ProgramCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  prompt: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ProgramUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ProgramUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  prompt: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ProgramCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ProgramWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProgramCreateWithoutUserInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ProgramCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ProgramCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProgramCreateManyUserInputSchema),z.lazy(() => ProgramCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProgramUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ProgramUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ProgramWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProgramUpdateWithoutUserInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ProgramCreateWithoutUserInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ProgramUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ProgramUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ProgramWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProgramUpdateWithoutUserInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const ProgramUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ProgramUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ProgramScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProgramUpdateManyMutationInputSchema),z.lazy(() => ProgramUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const ProgramScalarWhereInputSchema: z.ZodType<Prisma.ProgramScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProgramScalarWhereInputSchema),z.lazy(() => ProgramScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProgramScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProgramScalarWhereInputSchema),z.lazy(() => ProgramScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  prompt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateWithoutProgramsInputSchema: z.ZodType<Prisma.UserCreateWithoutProgramsInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string().optional(),
  credit: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUncheckedCreateWithoutProgramsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutProgramsInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string().optional(),
  credit: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserCreateOrConnectWithoutProgramsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProgramsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutProgramsInputSchema),z.lazy(() => UserUncheckedCreateWithoutProgramsInputSchema) ]),
}).strict();

export const UserUpsertWithoutProgramsInputSchema: z.ZodType<Prisma.UserUpsertWithoutProgramsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutProgramsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProgramsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutProgramsInputSchema),z.lazy(() => UserUncheckedCreateWithoutProgramsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutProgramsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProgramsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutProgramsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProgramsInputSchema) ]),
}).strict();

export const UserUpdateWithoutProgramsInputSchema: z.ZodType<Prisma.UserUpdateWithoutProgramsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateWithoutProgramsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutProgramsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProgramCreateManyUserInputSchema: z.ZodType<Prisma.ProgramCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  prompt: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ProgramUpdateWithoutUserInputSchema: z.ZodType<Prisma.ProgramUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prompt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProgramUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ProgramUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prompt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProgramUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.ProgramUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prompt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const ProgramFindFirstArgsSchema: z.ZodType<Prisma.ProgramFindFirstArgs> = z.object({
  select: ProgramSelectSchema.optional(),
  include: ProgramIncludeSchema.optional(),
  where: ProgramWhereInputSchema.optional(),
  orderBy: z.union([ ProgramOrderByWithRelationInputSchema.array(),ProgramOrderByWithRelationInputSchema ]).optional(),
  cursor: ProgramWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProgramScalarFieldEnumSchema,ProgramScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProgramFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProgramFindFirstOrThrowArgs> = z.object({
  select: ProgramSelectSchema.optional(),
  include: ProgramIncludeSchema.optional(),
  where: ProgramWhereInputSchema.optional(),
  orderBy: z.union([ ProgramOrderByWithRelationInputSchema.array(),ProgramOrderByWithRelationInputSchema ]).optional(),
  cursor: ProgramWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProgramScalarFieldEnumSchema,ProgramScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProgramFindManyArgsSchema: z.ZodType<Prisma.ProgramFindManyArgs> = z.object({
  select: ProgramSelectSchema.optional(),
  include: ProgramIncludeSchema.optional(),
  where: ProgramWhereInputSchema.optional(),
  orderBy: z.union([ ProgramOrderByWithRelationInputSchema.array(),ProgramOrderByWithRelationInputSchema ]).optional(),
  cursor: ProgramWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProgramScalarFieldEnumSchema,ProgramScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProgramAggregateArgsSchema: z.ZodType<Prisma.ProgramAggregateArgs> = z.object({
  where: ProgramWhereInputSchema.optional(),
  orderBy: z.union([ ProgramOrderByWithRelationInputSchema.array(),ProgramOrderByWithRelationInputSchema ]).optional(),
  cursor: ProgramWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProgramGroupByArgsSchema: z.ZodType<Prisma.ProgramGroupByArgs> = z.object({
  where: ProgramWhereInputSchema.optional(),
  orderBy: z.union([ ProgramOrderByWithAggregationInputSchema.array(),ProgramOrderByWithAggregationInputSchema ]).optional(),
  by: ProgramScalarFieldEnumSchema.array(),
  having: ProgramScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProgramFindUniqueArgsSchema: z.ZodType<Prisma.ProgramFindUniqueArgs> = z.object({
  select: ProgramSelectSchema.optional(),
  include: ProgramIncludeSchema.optional(),
  where: ProgramWhereUniqueInputSchema,
}).strict() ;

export const ProgramFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProgramFindUniqueOrThrowArgs> = z.object({
  select: ProgramSelectSchema.optional(),
  include: ProgramIncludeSchema.optional(),
  where: ProgramWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const ProgramCreateArgsSchema: z.ZodType<Prisma.ProgramCreateArgs> = z.object({
  select: ProgramSelectSchema.optional(),
  include: ProgramIncludeSchema.optional(),
  data: z.union([ ProgramCreateInputSchema,ProgramUncheckedCreateInputSchema ]),
}).strict() ;

export const ProgramUpsertArgsSchema: z.ZodType<Prisma.ProgramUpsertArgs> = z.object({
  select: ProgramSelectSchema.optional(),
  include: ProgramIncludeSchema.optional(),
  where: ProgramWhereUniqueInputSchema,
  create: z.union([ ProgramCreateInputSchema,ProgramUncheckedCreateInputSchema ]),
  update: z.union([ ProgramUpdateInputSchema,ProgramUncheckedUpdateInputSchema ]),
}).strict() ;

export const ProgramCreateManyArgsSchema: z.ZodType<Prisma.ProgramCreateManyArgs> = z.object({
  data: z.union([ ProgramCreateManyInputSchema,ProgramCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProgramDeleteArgsSchema: z.ZodType<Prisma.ProgramDeleteArgs> = z.object({
  select: ProgramSelectSchema.optional(),
  include: ProgramIncludeSchema.optional(),
  where: ProgramWhereUniqueInputSchema,
}).strict() ;

export const ProgramUpdateArgsSchema: z.ZodType<Prisma.ProgramUpdateArgs> = z.object({
  select: ProgramSelectSchema.optional(),
  include: ProgramIncludeSchema.optional(),
  data: z.union([ ProgramUpdateInputSchema,ProgramUncheckedUpdateInputSchema ]),
  where: ProgramWhereUniqueInputSchema,
}).strict() ;

export const ProgramUpdateManyArgsSchema: z.ZodType<Prisma.ProgramUpdateManyArgs> = z.object({
  data: z.union([ ProgramUpdateManyMutationInputSchema,ProgramUncheckedUpdateManyInputSchema ]),
  where: ProgramWhereInputSchema.optional(),
}).strict() ;

export const ProgramDeleteManyArgsSchema: z.ZodType<Prisma.ProgramDeleteManyArgs> = z.object({
  where: ProgramWhereInputSchema.optional(),
}).strict() ;