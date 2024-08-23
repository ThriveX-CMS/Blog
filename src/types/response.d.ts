interface Response<T> {
    code: number,
    message: string
    data: T
}

interface Paginate<T> {
    next: boolean,
    prev: boolean,
    page: number,
    size: number,
    pages: number,
    total: number,
    result: T
}

interface Page {
    page?: number,
    size?: number,
}

interface FilterData {
    key?: string | null,
    startDate?: number | null,
    endDate?: number | null
}

interface QueryData {
    // 通用的
    sort?: "asc" | "desc",
    pattern?: "list" | "recursion",
    query?: FilterData,
    pagination?: Page,

    // 文件相关
    dir?: "all" | string
}