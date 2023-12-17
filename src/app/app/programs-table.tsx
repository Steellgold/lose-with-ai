/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { ReactElement } from "react";
import React, { useCallback } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip } from "@nextui-org/react";
import type { SPORTS } from "@/lib/utils/types/names";
import { type Sport, getSportByID } from "@/lib/utils/types/names";
import type { Component } from "@/lib/utils/component";
import { DeleteIcon } from "./icons/delete";
import { EyeIcon } from "./icons/eye";

type Data = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  linkAccessTo: string | null;
  isPublic: boolean;
  description: string | null;
  name: string | null;
  type: Sport | null;
  data: Record<string, unknown>;
  userId: string;
}[];

export const ProgramsTable: Component<{ programs: Data }> = ({ programs }) => {
  const columns = [
    { name: "Name", uid: "name" },
    { name: "Description", uid: "description" },
    { name: "Public", uid: "isPublic" },
    { name: "Type", uid: "type" },
    { name: "Actions", uid: "actions" }
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCell = useCallback((item: { [x: string]: any }, columnKey: string | number): ReactElement => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "name":
        return <span className="font-bold">{cellValue}</span>;
      case "description":
        return <span className="text-gray-500">{cellValue.length > 50 ? `${cellValue.slice(0, 50)}...` : cellValue}</span>;
      case "isPublic":
        return <Chip color={cellValue ? "success" : "danger"}>{cellValue ? "Public" : "Private"}</Chip>;
      case "type":
        return <Tooltip
          content={getSportByID(cellValue as SPORTS).name}
          closeDelay={10} delay={10}>{getSportByID(cellValue as SPORTS).icon}</Tooltip>;
      case "actions":
        return (
          <div className="flex gap-2 justify-center">
            <Tooltip content="View" color="primary" closeDelay={10} delay={10}>
              <span className="text-lg text-default-500 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Delete" color="danger" closeDelay={10} delay={10}>
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={programs}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};