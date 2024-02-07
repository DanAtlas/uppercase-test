export type PaginationProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPageChange: ({ selected }: any) => void,
  pageCount: number
}