export type pagingModel = {
    pageNo: string,
    pageSize: string,
    rowsPerPageOption: string[],
    totalPage: string,
    totalRow: string,
    pageSizeStr: string,
    pageNoStr: string,
    totalPageStr: string,
    totalRowStr: string
}

export type filterModel = {
    label: string,
    value: string,
    asParam: string,
}

export type filterCountModel = {
    [value:string]: string
}