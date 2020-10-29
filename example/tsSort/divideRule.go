package main

import (
	"fmt"
	"math"
)

func main() {
	var sortArr = []int{5, 3, 6, 7, 2, 8, 1, 9}
	var reg []int
	fmt.Println(sortArr, len(sortArr))
	divideRule(&sortArr, &reg, 0, len(sortArr)-1)
}

func divideRule(arr *[]int, reg *[]int, start int, end int) {
	if start >= end {
		return
	}
	length := end - start
	mid := math.Floor(length/2) + start
}
