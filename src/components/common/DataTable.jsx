import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState } from "react";
import Loading from "./Loading";

const DataTable = ({
  data,
  columns,
  pagination = true,
  totalItems,
  itemPerPage,
  page,
  setPage,
  limit,
  setLimit,
  loader,
}) => {
  const totalPages = Math.ceil(totalItems / itemPerPage);

  const paginationLimits = useMemo(() => [5, 10, 15, 30, 50], []);
  // const [limit, setLimit] = useState(10)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <ScrollArea className="flex-1 rounded-t-[15px] overflow-auto bg-white shadow-sm">
        {!loader ? (
          <>
            <Table className="h-max sticky rounded-[15px] bg-secondary  top-0">
              <TableHeader className="bg-table_header rounded-[15px] ">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    className="flex  rounded-[15px] items-center  border-none"
                  >
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead
                          key={header.id}
                          style={
                            header.getSize() === 150
                              ? { width: "100%" }
                              : { minWidth: header.getSize() + "px" }
                          }
                          className="py-4 sm:py-[18px] px-4 sm:px-6 text-sm sm:text-lg bg-table_header text-primary font-medium"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
            </Table>

            <Table>
              <TableBody className="">
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="flex border-b border-[#F5F5F5] items-center "
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id}
                          style={
                            cell.column.getSize() === 150
                              ? { width: "100%" }
                              : { minWidth: cell.column.getSize() + "px" }
                          }
                          className="py-4 px-4 sm:px-6 font-medium text-xs sm:text-base text-primary"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow className="hover:bg-white ">
                    <TableCell
                      colSpan={columns.length}
                      className="w-full h-[65vh] flex text-secondary justify-center items-center text-xl font-semibold"
                    >
                      Data Not Found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </>
        ) : (
          <div className="flex justify-center items-center h-full">
            <Loading className="text-2xl" />
          </div>
        )}

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {pagination && !loader && (
        <div className="px-6 rounded-b-[15px] py-2.5 flex justify-between items-center gap-y-2 sm:gap-y-0 flex-col sm:flex-row bg-white">
          <p className="w-full text-center sm:text-start text-primary text-[13px] sm:text-[15px] font-medium">
            {" "}
            Showing {limit * page > totalItems ? totalItems : limit} out of{" "}
            {totalItems} results
          </p>
          <div className="flex gap-x-3 items-center">
            <div className="">
              <Select value={limit} onValueChange={(e) => setLimit(e)}>
                <SelectTrigger className="w-[70px] font-semibold border-[2px] border-primary">
                  <SelectValue placeholder={limit} />
                </SelectTrigger>
                <SelectContent>
                  {paginationLimits.map((item, key) => (
                    <SelectItem
                      className="font-semibold "
                      key={key}
                      value={item}
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Pagination className="justify-center pt-0 sm:justify-end">
                <PaginationContent className="space-x-1">
                  <PaginationItem>
                    <PaginationPrevious
                      className="size-8 sm:size-10 p-0 bg-transparent hover:bg-[#F7FCF9] aspect-square rounded-full"
                      onClick={() => setPage(page > 1 ? page - 1 : 1)}
                      href="#"
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem>
                      <PaginationLink
                        // className={` rounded-full border-none ${page === i + 1
                        //   ? " bg-[#ED1B241A]/10 text-red"
                        //   : "bg-transparent text-secondary"
                        //   } text-sm md:text-base  rounded-lg`}
                        href="#"
                        onClick={() => setPage(i + 1)}
                        className={`size-8 sm:size-10  ${
                          page === i + 1
                            ? "text-main bg-[#E1ECFF]"
                            : "text-secondary bg-transparent"
                        }   border-[2px] border-none hover:bg-[#E1ECFF] text-sm md:text-base text-secondary hover:text-main  rounded-full font-medium`}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      className="size-8 sm:size-10 p-0 bg-transparent hover:bg-[#F7FCF9] aspect-square rounded-full"
                      onClick={() =>
                        setPage(page < totalPages ? page + 1 : totalPages)
                      }
                      href="#"
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
