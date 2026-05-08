import httpInstance from "@/utils/http";
export function getCategoryHead() {
    return httpInstance({
        url: '/home/category/head',
    })
}